import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/* 서버 전용: SMTP_HOST, SMTP_PORT(기본 587), SMTP_USER, SMTP_PASS,
   CONTACT_TO(접수 받을 주소), SMTP_SECURE(465 등 SSL 시 true/1), SMTP_FROM(옵션, 기본 SMTP_USER) */

const LIMITS = { name: 120, email: 320, company: 200, message: 10_000 }

function createMailer() {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO
  if (!host || !user || !pass || !to) return null
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  const secure =
    process.env.SMTP_SECURE === '1' || process.env.SMTP_SECURE?.toLowerCase() === 'true'
  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure: secure || port === 465,
      auth: { user, pass },
    }),
    to,
    from: process.env.SMTP_FROM?.trim() || user,
  }
}

export async function POST(req: NextRequest) {
  let body: {
    name?: string
    email?: string
    company?: string
    message?: string
    _honey?: string
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (body._honey) {
    return NextResponse.json({ ok: true })
  }

  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const company = String(body.company || '').trim()
  const message = String(body.message || '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: '필수 항목을 입력해 주세요.' }, { status: 400 })
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: '입력이 너무 깁니다.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: '이메일 형식을 확인해 주세요.' }, { status: 400 })
  }

  const cfg = createMailer()
  if (!cfg) {
    return NextResponse.json(
      { error: '서버에 메일 전송이 설정되지 않았습니다.' },
      { status: 503 }
    )
  }

  const { transporter, to, from: fromAddr } = cfg
  const text = [
    `이름: ${name}`,
    `이메일: ${email}`,
    ...(company ? [`회사/소속: ${company}`] : []),
    '',
    '---',
    message,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: fromAddr,
      to,
      replyTo: email,
      subject: `[SPINX] 웹사이트 문의 — ${name}`,
      text,
    })
  } catch (e) {
    console.error('contact SMTP', e)
    return NextResponse.json(
      { error: '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
