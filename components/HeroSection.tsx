import { MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[70vh] scroll-mt-16 pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-white to-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-[-0.01em] text-primary mb-4 sm:text-base">
          Excel은 그대로, 업무의 가치는 무한하게
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance text-gray-900 mb-6 leading-[1.15] tracking-[-0.02em]">
          사용하던 Excel File 그대로,
          <br />
          <span className="text-primary">System과 AI를 결합하세요</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed sm:text-xl">
          <span className="font-semibold text-primary">xOffice</span>로 Excel File을 System에 연결하고
          <br />
          <span className="font-semibold text-primary">xConnector</span>로 AI를 통해 모든 것과 연결하세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-14">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-2xl text-base sm:text-lg font-bold shadow-[0_8px_28px_rgba(49,130,246,0.4)] ring-2 ring-inset ring-white/20 transition hover:scale-[1.02] hover:bg-blue-600 hover:shadow-[0_10px_32px_rgba(49,130,246,0.5)] active:scale-[0.99] sm:px-8 sm:py-4"
          >
            <MessageCircle
              className="shrink-0 size-[1.15em] transition group-hover:rotate-6"
              strokeWidth={2.25}
              aria-hidden
            />
            <span>문의하기</span>
            <span className="ml-0.5 inline-block text-white/80 transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="mt-6 sm:mt-8 relative">
          <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100/80 bg-white/90 p-6 shadow-[0_12px_40px_rgba(25,31,40,0.06)] backdrop-blur sm:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">
                  10,000+
                </div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">활성 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">90%</div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">업무 시간 절감</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums text-primary sm:text-3xl sm:mb-2">
                  연동
                </div>
                <div className="text-xs text-gray-500 sm:text-sm sm:text-gray-600">
                  다양한 시스템과 데이터 연결
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
