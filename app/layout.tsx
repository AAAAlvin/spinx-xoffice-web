import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

