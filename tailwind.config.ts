import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 2026 디자인 — teal 액센트
        brand: {
          DEFAULT: '#0E9AA7',
          dark: '#0B7E89',
          bright: '#16C2CE',
          tint: '#ECF6F6',
        },
        primary: '#0E9AA7',
        // ink — 본문/제목 계열
        ink: {
          900: '#0B1A22',
          800: '#16323B',
          700: '#3D4F54',
          600: '#5B6B70',
          500: '#7C8A8E',
          400: '#94A2A6',
        },
        line: {
          DEFAULT: '#E7ECEC',
          soft: '#EEF2F2',
          faint: '#F0F3F3',
          field: '#E0E6E6',
        },
        surface: {
          DEFAULT: '#FBFCFC',
          muted: '#F6F8F8',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
