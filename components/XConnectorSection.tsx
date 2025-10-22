import { Network, Plug, Globe, Database, MessageSquare, Cloud } from 'lucide-react'

export default function XConnectorSection() {
  return (
    <section id="xconnector" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            xconnector
          </h2>
          <p className="text-xl text-gray-600">
            MCP로 세상과 연결하는 플랫폼
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Model Context Protocol을 통해 모든 서비스와 자유롭게 통합
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Network className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              MCP 기반 연결
            </h3>
            <p className="text-gray-600 mb-6">
              Model Context Protocol을 사용하여 
              다양한 AI 모델과 서비스를 손쉽게 연결하세요.
            </p>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-1">500+</div>
              <div className="text-sm text-gray-600">연결 가능한 앱</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Plug className="text-purple-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              플러그 앤 플레이
            </h3>
            <p className="text-gray-600 mb-6">
              복잡한 설정 없이 클릭 몇 번으로 
              원하는 서비스와 즉시 연동할 수 있어요.
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-500">
              <Plug size={20} />
              <span className="font-semibold">즉시 연동</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Cloud className="text-green-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              클라우드 네이티브
            </h3>
            <p className="text-gray-600 mb-6">
              클라우드 기반으로 언제 어디서나 
              안전하게 데이터를 주고받을 수 있어요.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-500">
              <Cloud size={20} />
              <span className="font-semibold">24/7 가동</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <Globe className="mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">
              연결 가능한 서비스
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Database size={20} />
                <span>데이터베이스 (MySQL, PostgreSQL, MongoDB)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={20} />
                <span>메신저 (Slack, Teams, Discord)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Cloud size={20} />
                <span>클라우드 (AWS, Azure, GCP)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={20} />
                <span>웹 서비스 (REST API, GraphQL)</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              그리고 더 많은 서비스들과 계속 연결 중...
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              MCP의 장점
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Network className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">표준화된 프로토콜</h4>
                  <p className="text-sm text-gray-600">
                    통일된 인터페이스로 모든 서비스와 일관되게 통신
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Plug className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">쉬운 확장성</h4>
                  <p className="text-sm text-gray-600">
                    새로운 서비스 추가가 간단하고 빠름
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Globe className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">보안성</h4>
                  <p className="text-sm text-gray-600">
                    엔드투엔드 암호화로 안전한 데이터 전송
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
          <Network className="mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-4">
            모든 것과 연결하세요
          </h3>
          <p className="text-xl mb-8 opacity-90">
            xconnector로 업무 환경을 하나로 통합하세요
          </p>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            xconnector 시작하기
          </button>
        </div>
      </div>
    </section>
  )
}

