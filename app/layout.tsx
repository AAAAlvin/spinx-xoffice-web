import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
// 문의 섹션 아래 영역 임시 숨김
// import Footer from '@/components/Footer'

const title = 'xOffice & xConnector — Excel 업무 효율화와 AI 연결'
const description =
  'xOffice로 Excel 파일을 시스템에 연결하고, xConnector로 AI와 업무를 효율적으로 연결하세요.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans text-ink-900 antialiased">
        <SiteHeader />
        {children}
        {/* 문의 섹션 아래 영역 임시 숨김 */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
