'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const nav = [
  { href: '#xoffice', label: 'xOffice' },
  { href: '#xconnector', label: 'xConnector' },
  { href: '#usecases', label: '사용 사례' },
] as const

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'border-b border-line-soft bg-white/[0.82] shadow-[0_1px_0_rgba(11,26,34,0.04)] backdrop-blur-[12px] [backdrop-filter:blur(12px)_saturate(140%)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-6">
        <a href="#top" className="flex h-[28px] flex-none items-center">
          <Image
            src="/images/xoffice-logo.png"
            alt="xOffice"
            width={120}
            height={28}
            priority
            className="h-[26px] w-auto object-contain"
          />
        </a>

        <nav className="ml-auto flex items-center gap-1">
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[10px] px-3.5 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:bg-[#F0F4F4] hover:text-ink-900"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-[7px] rounded-[11px] bg-brand px-[18px] py-[9px] text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(14,154,167,0.25)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-dark hover:shadow-[0_12px_34px_rgba(14,154,167,0.42)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden />
            문의하기
          </a>
        </nav>
      </div>
    </header>
  )
}
