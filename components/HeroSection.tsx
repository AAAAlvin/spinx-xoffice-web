import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import HeroImageParallax from '@/components/HeroImageParallax'

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[85vh] scroll-mt-16 pt-32 pb-24 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-white to-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-[-0.01em] text-primary mb-4 sm:text-base">
          Office 자동화 · MCP 연결
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance text-gray-900 mb-6 leading-[1.15] tracking-[-0.02em]">
          오피스 업무를 자동화하고
          <br />
          <span className="text-primary">세상과 연결하세요</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed sm:text-xl">
          <span className="font-semibold text-primary">xoffice</span>로 반복적인 업무를 자동화하고,{' '}
          <span className="font-semibold text-primary">xconnector</span>로 MCP를 통해 모든 것과
          연결하세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-14 sm:mb-16">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-2xl text-base sm:text-lg font-bold shadow-[0_8px_28px_rgba(49,130,246,0.4)] ring-2 ring-inset ring-white/20 transition hover:scale-[1.02] hover:bg-blue-600 hover:shadow-[0_10px_32px_rgba(49,130,246,0.5)] active:scale-[0.99] sm:px-8 sm:py-4"
          >
            <MessageCircle
              className="shrink-0 size-[1.15em] transition group-hover:rotate-6"
              strokeWidth={2.25}
              aria-hidden
            />
            <span>무료로 문의하기</span>
            <span className="ml-0.5 inline-block text-white/80 transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <button
            type="button"
            className="bg-white text-primary border border-gray-200 px-7 py-3.5 rounded-2xl text-base sm:text-lg font-semibold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.99] sm:px-8 sm:py-4"
          >
            데모 보기
          </button>
        </div>

        {/* Main Product Image */}
        <div className="mb-16">
          <HeroImageParallax>
            <Image
              src="/images/block.jpg"
              alt="xoffice & xconnector 제품 소개"
              width={1920}
              height={1080}
              className="w-full h-auto shadow-2xl border border-gray-200"
              priority
            />
          </HeroImageParallax>
        </div>

        {/* Product Stats — 토스 랜딩형 숫자 하이라이트 */}
        <div className="mt-6 sm:mt-8 relative">
          <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100/80 bg-white/90 p-6 shadow-[0_12px_40px_rgba(25,31,40,0.06)] backdrop-blur sm:p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">10,000+</div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">활성 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">90%</div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">업무 시간 절감</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">500+</div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">통합 앱</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">24/7</div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">자동 실행</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

