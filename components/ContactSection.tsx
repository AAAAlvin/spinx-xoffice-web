'use client'

import { FormEvent, useState } from 'react'
import { AlertCircle, CheckCircle2, Mail, Send } from 'lucide-react'

type Feedback = { kind: 'success' } | { kind: 'error'; message: string }

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
      className="section-shell bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/60"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance text-gray-900 tracking-[-0.02em] mb-2">
            문의하기
          </h2>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">Contact us</p>
          <p className="text-lg text-gray-600 mt-4">
            문의 접수 시 담당자가 연락드립니다.
          </p>
        </div>

        {feedback?.kind === 'success' && (
          <div
            className="mb-8 overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/95 to-white shadow-[0_8px_30px_rgba(16,185,129,0.12)]"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600"
                aria-hidden
              >
                <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
              </div>
              <div className="min-w-0 space-y-1 pt-0.5">
                <p className="text-base font-bold text-gray-900 sm:text-lg">접수되었어요</p>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  빠른 시일 안에 남겨주신 주소로 답변 드릴게요. 스팸 메일함도 한 번
                  봐주시면 좋아요.
                </p>
              </div>
            </div>
          </div>
        )}

        {feedback?.kind === 'error' && (
          <div
            className="mb-8 overflow-hidden rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/95 to-white shadow-[0_8px_30px_rgba(245,158,11,0.1)]"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700"
                aria-hidden
              >
                <AlertCircle className="h-6 w-6" strokeWidth={2} />
              </div>
              <div className="min-w-0 space-y-2 pt-0.5">
                <p className="text-base font-bold text-gray-900 sm:text-lg">잠시 문제가 있었어요</p>
                <p className="text-sm leading-relaxed text-gray-700">{feedback.message}</p>
                <p className="text-xs text-gray-500">입력 내용은 그대로 있으니, 잠시 후 다시 눌러 주세요.</p>
              </div>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_12px_40px_rgba(25,31,40,0.06)] p-6 sm:p-10 space-y-6"
        >
          <input
            type="text"
            name="_honey"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
          />

          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
              placeholder="홍길동"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
              이메일 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
                aria-hidden
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-gray-200 pl-11 pr-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
              회사 / 소속 <span className="text-gray-400 font-normal">(선택)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
              문의 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition resize-y min-h-[120px]"
              placeholder="도입 시기, 희망 기능, 문의 사항을 남겨주세요."
            />
          </div>

          <div className="flex justify-center pt-1">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white shadow-[0_8px_28px_rgba(49,130,246,0.35)] ring-2 ring-inset ring-white/20 transition hover:scale-[1.01] hover:bg-blue-600 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
            >
              <Send size={20} />
              {sending ? '보내는 중…' : '문의 보내기'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
