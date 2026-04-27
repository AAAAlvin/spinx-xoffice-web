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
  title: 'xOffice & xConnector — Excel 업무 효율화와 AI 연결',
  description:
    'xOffice로 Excel 파일을 시스템에 연결하고, xConnector로 AI와 업무를 효율적으로 연결하세요.',
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

