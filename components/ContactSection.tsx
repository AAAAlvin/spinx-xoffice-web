'use client'

import { FormEvent, useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactSection() {
  const [sending, setSending] = useState(false)
  const [ok, setOk] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (sending) return
    const fd = new FormData(e.currentTarget)
    const _honey = String(fd.get('_honey') || '')
    if (_honey) {
      setOk(true)
      return
    }
    setOk(false)
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
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setError(data.error || '전송에 실패했습니다.')
        return
      }
      setOk(true)
      e.currentTarget.reset()
    } catch {
      setError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/60"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance text-gray-900 tracking-[-0.02em] mb-2">
            문의하기
          </h2>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">Contact us</p>
          <p className="text-lg text-gray-600 mt-4">
            제품·도입·협력 관련 문의는 아래 양식으로 보내주세요. 담당자가 이메일로 답드립니다.
          </p>
        </div>

        {ok && (
          <p className="text-center text-primary font-medium mb-6" role="status">
            문의가 접수되었습니다. 감사합니다.
          </p>
        )}

        {error && (
          <p className="text-center text-red-600 mb-6" role="alert">
            {error}
          </p>
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

          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg disabled:opacity-60 disabled:pointer-events-none"
          >
            <Send size={20} />
            {sending ? '보내는 중…' : '문의 보내기'}
          </button>
        </form>
      </div>
    </section>
  )
}
