import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SPINX - Office 자동화의 새로운 시작',
  description: 'xoffice와 xconnector로 오피스 업무를 자동화하고 세상과 연결하세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${noto.className} text-gray-900 antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

