'use client'

import { FormEvent, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

type Feedback = { kind: 'success' } | { kind: 'error'; message: string }

const fieldClass =
  'w-full rounded-[14px] border border-line-field bg-white px-4 py-[13px] text-[15px] text-ink-900 outline-none transition-[border-color,box-shadow] duration-200 focus:border-brand focus:shadow-[0_0_0_3px_rgba(14,154,167,0.14)]'

export default function ContactSection() {
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setFeedback(null)
    if (sending) return
    const fd = new FormData(form)
    const _honey = String(fd.get('_honey') || '')
    if (_honey) {
      setFeedback({ kind: 'success' })
      return
    }
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const company = String(fd.get('company') || '').trim()
    const message = String(fd.get('message') || '').trim()
    if (!name || !email || !message) return

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      })
      const raw = await res.text()
      let data: { ok?: boolean; error?: string } = {}
      if (raw) {
        try {
          data = JSON.parse(raw) as { ok?: boolean; error?: string }
        } catch {
          data = {}
        }
      }

      if (!res.ok) {
        setFeedback({
          kind: 'error',
          message: data.error || '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
        })
        return
      }

      setFeedback({ kind: 'success' })
      form.reset()
    } catch {
      setFeedback({
        kind: 'error',
        message: '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-[#EAEFEF] bg-surface-muted px-6 py-[104px]"
    >
      <div className="mx-auto max-w-[660px]">
        <ScrollReveal className="mb-10 text-center">
          <p className="mb-3 text-[0.82rem] font-bold uppercase tracking-[0.12em] text-brand">
            Contact us
          </p>
          <h2 className="mb-3 text-[clamp(2rem,3.6vw,2.6rem)] font-extrabold tracking-[-0.025em] text-ink-900">
            문의하기
          </h2>
          <p className="text-[1.08rem] text-ink-600">문의 접수 시 담당자가 연락드립니다.</p>
        </ScrollReveal>

        <ScrollReveal className="rounded-[26px] border border-line bg-white p-9 shadow-[0_24px_60px_-36px_rgba(11,26,34,.22)]">
          {feedback?.kind === 'success' ? (
            <div className="px-2 py-7 text-center" role="status" aria-live="polite">
              <div className="mx-auto mb-[18px] flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-brand-tint">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="mb-2 text-[1.3rem] font-extrabold text-ink-900">접수되었어요</h3>
              <p className="text-[0.97rem] leading-[1.6] text-ink-600">
                빠른 시일 안에 남겨주신 주소로 답변 드릴게요.
                <br />
                스팸 메일함도 한 번 봐주시면 좋아요.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="_honey"
                className="sr-only"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              {feedback?.kind === 'error' && (
                <div
                  className="rounded-[14px] border border-[#F3D9A8] bg-[#FBF1E3] px-4 py-3.5 text-[0.9rem] font-medium text-[#B26A1F]"
                  role="alert"
                  aria-live="assertive"
                >
                  {feedback.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="mb-2 block text-[0.88rem] font-semibold text-ink-800">
                  이름 <span className="text-[#E2575A]">*</span>
                </label>
                <input id="name" name="name" type="text" required placeholder="홍길동" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-[0.88rem] font-semibold text-ink-800">
                  이메일 <span className="text-[#E2575A]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-[0.88rem] font-semibold text-ink-800">
                  회사 / 소속 <span className="font-normal text-ink-400">(선택)</span>
                </label>
                <input id="company" name="company" type="text" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[0.88rem] font-semibold text-ink-800">
                  문의 내용 <span className="text-[#E2575A]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="도입 시기, 희망 기능, 문의 사항을 남겨주세요."
                  className={`${fieldClass} min-h-[120px] resize-y leading-[1.6]`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-[9px] rounded-[14px] bg-brand p-4 text-[16px] font-bold text-white shadow-[0_10px_28px_rgba(14,154,167,.3)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-dark hover:shadow-[0_12px_34px_rgba(14,154,167,.42)] disabled:pointer-events-none disabled:opacity-60"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></svg>
                {sending ? '보내는 중…' : '문의 보내기'}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
