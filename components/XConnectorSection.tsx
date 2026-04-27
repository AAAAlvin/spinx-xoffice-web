import Image from 'next/image'
import { Network, Plug, Globe, Database, MessageSquare, Cloud } from 'lucide-react'

export default function XConnectorSection() {
  return (
    <section id="xconnector" className="scroll-mt-16 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
            <Image
              src="/images/xconnector-logo.png"
              alt="xConnector"
              width={220}
              height={56}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </div>
          <p className="text-xl text-gray-600">Excel과 AI를 연결하는 플랫폼</p>
          <p className="text-lg text-gray-500 mt-2 max-w-2xl mx-auto">
            AI와 업무 데이터를 안전하게 이어 주고, 필요한 서비스와 유연하게 통합할 수 있어요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Network className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MCP 기반 연결</h3>
            <p className="text-gray-600 mb-6">
              표준 프로토콜을 활용해 AI와 주변 서비스를 일관된 방식으로 연결해 보세요.
            </p>
            <div className="rounded-xl border border-blue-100 bg-blue-50/80 px-4 py-3 text-center text-sm font-medium text-blue-800">
              다양한 연동 확장
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Plug className="text-purple-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">빠른 연동</h3>
            <p className="text-gray-600 mb-6">
              복잡한 설정을 최소화하고, 필요한 서비스와 단계적으로 연결할 수 있어요.
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-600">
              <Plug size={20} />
              <span className="font-semibold">간편 온보딩</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Cloud className="text-green-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">클라우드 기반</h3>
            <p className="text-gray-600 mb-6">
              클라우드 환경에서 데이터를 안전하게 주고받을 수 있도록 설계되었습니다.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <Cloud size={20} />
              <span className="font-semibold">안정적인 운영</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <Globe className="mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">연결 가능한 서비스</h3>
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
            <p className="text-sm font-medium opacity-95">
              연결 가능한 서비스는 지속적으로 확대됩니다.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">MCP의 장점</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Network className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">표준화된 프로토콜</h4>
                  <p className="text-sm text-gray-600">
                    통일된 인터페이스로 서비스 간 통신 방식을 맞출 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Plug className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">확장에 유리</h4>
                  <p className="text-sm text-gray-600">새 연동을 단계적으로 추가하기 좋습니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Globe className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">보안</h4>
                  <p className="text-sm text-gray-600">
                    전송 구간 보호와 접근 제어를 바탕으로 데이터를 다루는 흐름을 갖출 수 있어요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
          <Network className="mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-4">업무를 하나의 흐름으로</h3>
          <p className="text-xl mb-8 opacity-90">xConnector로 필요한 도구와 데이터를 연결해 보세요</p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            xConnector 시작하기
          </a>
        </div>
      </div>
    </section>
  )
}
