import { Check, Zap, Rocket, Building } from 'lucide-react'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            가격 플랜
          </h2>
          <p className="text-xl text-gray-600">
            규모에 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Zap className="text-blue-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                <p className="text-sm text-gray-500">개인 및 소규모 팀</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">무료</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">영구 무료</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">월 100회 자동화 실행</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">5개 워크플로우</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">기본 통합 연동</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">이메일 지원</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">커뮤니티 접근</span>
              </li>
            </ul>

            <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
              무료로 시작하기
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                인기
              </span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6 text-white">
              <div className="bg-white/20 p-3 rounded-xl">
                <Rocket className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-sm opacity-90">중소기업 및 팀</p>
              </div>
            </div>
            
            <div className="mb-6 text-white">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">₩49,000</span>
                <span className="ml-2 opacity-90">/월</span>
              </div>
              <p className="text-sm opacity-90 mt-2">월간 결제 시</p>
            </div>

            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-start">
                <Check className="text-yellow-300 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>월 5,000회 자동화 실행</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-300 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>무제한 워크플로우</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-300 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>모든 통합 연동</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-300 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>우선 이메일/채팅 지원</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-300 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>팀 협업 기능</span>
              </li>
              <li className="flex items-start">
                <Check className="text-yellow-300 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>고급 분석 대시보드</span>
              </li>
            </ul>

            <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Pro로 시작하기
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Building className="text-purple-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                <p className="text-sm text-gray-500">대기업 및 조직</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">맞춤형</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">문의 필요</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">무제한 자동화 실행</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">무제한 워크플로우</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">커스텀 통합 개발</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">전담 계정 매니저</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">24/7 전화 지원</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">SLA 보장</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">온프레미스 배포 옵션</span>
              </li>
            </ul>

            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              영업팀 문의하기
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            모든 플랜에 포함
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-gray-900 mb-1">보안</div>
              <div className="text-sm text-gray-600">엔터프라이즈급 보안</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold text-gray-900 mb-1">모바일</div>
              <div className="text-sm text-gray-600">모바일 앱 지원</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="font-semibold text-gray-900 mb-1">업데이트</div>
              <div className="text-sm text-gray-600">지속적인 기능 추가</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="font-semibold text-gray-900 mb-1">교육</div>
              <div className="text-sm text-gray-600">온라인 강의 자료</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

