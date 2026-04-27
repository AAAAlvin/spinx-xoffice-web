'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const nav = [
  { href: '#xoffice', label: 'xOffice' },
  { href: '#xconnector', label: 'xConnector' },
  { href: '#usecases', label: '사용 사례' },
  { href: '#contact', label: '문의' },
] as const

const contactCtaClass =
  'shrink-0 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-[0_6px_20px_rgba(49,130,246,0.4)] ring-2 ring-primary/30 transition hover:scale-[1.02] hover:bg-blue-600 hover:shadow-[0_8px_28px_rgba(49,130,246,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]'

const navLinkClass =
  'rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100/80 hover:text-gray-900'

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
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'border-b border-gray-200/60 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-white/70'
          : 'border-b border-transparent bg-gradient-to-b from-white/90 to-white/0'
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="relative flex h-9 w-[7.5rem] shrink-0 items-center sm:h-10 sm:w-[8.5rem]"
        >
          <Image
            src="/images/xoffice-logo.png"
            alt="xOffice"
            width={180}
            height={48}
            className="h-full w-full object-contain object-left"
            priority
          />
        </a>

        <a href="#contact" className={`${contactCtaClass} ml-auto md:hidden`}>
          <span
            className="inline-block size-1.5 rounded-full bg-white/90"
            aria-hidden
          />
          문의
        </a>

        <div className="hidden min-w-0 flex-1 md:block">
          <div className="mx-auto flex max-w-max items-center justify-center">
            <nav
              className="flex items-center gap-0.5 sm:gap-1"
              aria-label="주요 섹션"
            >
              {nav.map((item) => {
                const isContact = item.href === '#contact'
                if (isContact) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={contactCtaClass}
                    >
                      <span
                        className="inline-block size-1.5 rounded-full bg-white/90"
                        aria-hidden
                      />
                      {item.label}
                    </a>
                  )
                }
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={navLinkClass}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
