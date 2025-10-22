import { Zap, Shield, Code, BarChart3, Users, Clock } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            주요 기능
          </h2>
          <p className="text-xl text-gray-600">
            xoffice와 xconnector가 함께 제공하는 강력한 기능들
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              초고속 자동화
            </h3>
            <p className="text-gray-700">
              최적화된 엔진으로 대용량 데이터도 빠르게 처리합니다. 
              수천 개의 파일을 몇 초 만에 처리하세요.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              엔터프라이즈 보안
            </h3>
            <p className="text-gray-700">
              기업급 보안 시스템으로 데이터를 안전하게 보호합니다. 
              GDPR 및 ISO 27001 준수.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-green-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Code className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              노코드 & 로우코드
            </h3>
            <p className="text-gray-700">
              코딩 없이 드래그 앤 드롭으로 자동화를 구축하세요. 
              개발자라면 Python/JavaScript로 확장 가능.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              실시간 모니터링
            </h3>
            <p className="text-gray-700">
              모든 자동화 작업을 실시간으로 추적하고 
              대시보드에서 성과를 한눈에 확인하세요.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              팀 협업
            </h3>
            <p className="text-gray-700">
              팀원들과 워크플로우를 공유하고 함께 관리하세요. 
              권한 관리와 버전 관리 기능 제공.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-indigo-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Clock className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              스마트 스케줄링
            </h3>
            <p className="text-gray-700">
              AI 기반 스케줄링으로 최적의 시간에 작업을 실행합니다. 
              시스템 부하를 자동으로 분산.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              더 많은 기능이 계속 추가됩니다
            </h3>
            <p className="text-xl mb-8 opacity-90">
              사용자 피드백을 바탕으로 매월 새로운 기능을 업데이트합니다
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                전체 기능 보기
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                로드맵 확인하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

