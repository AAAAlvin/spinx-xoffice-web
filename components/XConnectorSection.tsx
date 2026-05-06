import Image from 'next/image'

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

        <div className="grid gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-950 via-blue-900 to-teal-800 rounded-3xl px-6 py-10 text-center text-white shadow-2xl sm:px-10 sm:py-12">
            <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">xConnector의 네 가지 축</h3>
            <ul className="mx-auto mt-8 max-w-3xl list-none space-y-4 text-base leading-snug sm:text-lg">
              <li className="text-balance">xChat — 자연어 대화, 실시간 응답, 도구·xOffice 연계</li>
              <li className="text-balance">xSchema — Excel 기반 설계, 검증, DDL, MySQL·뷰 관리</li>
              <li className="text-balance">xBoard — 표 데이터 작업과 AI 채팅을 한 화면에서</li>
              <li className="text-balance">xFlow — 노드 기반 플로우와 주기 실행 자동화</li>
            </ul>
            <p className="mx-auto mt-8 max-w-3xl text-sm font-medium leading-relaxed text-balance opacity-95 sm:text-base">
              질문하고, 설계하고, 확인하고, 자동화하는 흐름을 하나의 업무 공간에서 이어갑니다.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">xChat</h3>
            <p className="text-sm font-semibold text-blue-700 mb-4">대화에서 바로 실행으로 이어지는 AI 업무 공간</p>
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
              자연어로 질문하면 업무 맥락을 반영해 실시간으로 답을 제공합니다. 후속 질문, 도구 호출, xOffice 연계를 통해 분석,
              코드 작성, 작업 안내까지 하나의 대화 안에서 이어갈 수 있습니다.
            </p>
            <div className="rounded-xl border border-blue-100 bg-blue-50/80 px-4 py-3 text-center text-sm font-medium text-blue-800">
              스트리밍·도구·xOffice
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">xSchema</h3>
            <p className="text-sm font-semibold text-purple-700 mb-4">Excel 데이터를 DB 설계로 바꾸는 캔버스</p>
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
              Excel 시트를 테이블, 컬럼, 관계로 정리하고 캔버스에서 구조를 다듬습니다. 관계 자동 감지, 검증, SQL/DDL 전송,
              MySQL 스키마 반영을 지원하며, 외부 MySQL 카탈로그와 연결해 물리 테이블과 논리 뷰(sql_view)를 함께 다룰 수
              있습니다.
            </p>
            <div className="text-center text-sm font-semibold text-purple-600">설계·DDL·뷰</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">xBoard</h3>
            <p className="text-sm font-semibold text-amber-800 mb-4">데이터 확인과 AI 대화를 한 화면에서</p>
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
              넓은 그리드에서 데이터를 조회하고 정리하면서, 같은 화면에서 AI에게 질문할 수 있습니다. 표 작업과 대화를 오가며
              필요한 분석을 빠르게 좁혀 갑니다.
            </p>
            <div className="text-center text-sm font-semibold text-amber-800">분할 화면</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">xFlow</h3>
            <p className="text-sm font-semibold text-green-800 mb-4">반복 업무를 설계하고 실행하는 자동화 엔진</p>
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
              트리거, 조건, HTTP, 코드, 지연 노드를 연결해 업무 흐름을 만듭니다. 서버 스케줄과 연동하면 정해진 주기에 맞춰
              자동으로 실행되는 업무 플로우를 구성할 수 있습니다.
            </p>
            <div className="text-center text-sm font-semibold text-green-800">플로·스케줄</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-800 rounded-3xl p-12 text-white text-center shadow-[0_24px_80px_-16px_rgba(15,23,42,0.45)]">
          <h3 className="text-3xl font-bold mb-4">Excel, AI, 자동화까지 하나의 흐름으로</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            xChat으로 묻고, xSchema로 구조를 분석하고, xBoard로 컨텐츠를 구성하고, xFlow를 통해 이 모든것을 연결하세요.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-sm hover:bg-cyan-50 transition-colors"
          >
            xConnector 시작하기
          </a>
        </div>
      </div>
    </section>
  )
}
