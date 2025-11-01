import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          오피스 업무를 자동화하고
          <br />
          <span className="text-blue-500">세상과 연결하세요</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          <span className="font-semibold text-blue-500">xoffice</span>로 반복적인 업무를 자동화하고,
          <br />
          <span className="font-semibold text-blue-500">xconnector</span>로 MCP를 통해 모든 것과 연결하세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 shadow-lg">
            무료로 시작하기
          </button>
          <button className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105">
            데모 보기
          </button>
        </div>

        {/* Main Product Image */}
        <div className="mb-16">
          <div className="relative max-w-5xl mx-auto">
            <Image 
              src="/images/block.jpg" 
              alt="xoffice & xconnector 제품 소개" 
              width={1920}
              height={1080}
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              priority
            />
          </div>
        </div>

        {/* Product Stats */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">10,000+</div>
                <div className="text-sm text-gray-600">활성 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">90%</div>
                <div className="text-sm text-gray-600">업무 시간 절감</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
                <div className="text-sm text-gray-600">통합 앱</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
                <div className="text-sm text-gray-600">자동 실행</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

