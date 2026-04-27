import Image from 'next/image'
import { Calendar, FileSpreadsheet, FileText, Repeat, Workflow, Zap } from 'lucide-react'

export default function XOfficeSection() {
  return (
    <section id="xoffice" className="scroll-mt-16 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/xoffice-logo.png"
              alt="xOffice"
              width={200}
              height={56}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </div>
          <p className="text-xl text-gray-600">Native Excel 기반의 강력한 업무 플랫폼</p>
          <p className="text-lg text-gray-500 mt-2">Excel을 활용한 손쉬운 데이터 분석과 활용</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <FileSpreadsheet className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excel을 통합 업무 효율화</h3>
                <p className="text-gray-600">
                  데이터 연동, 가공, 취합, 분석, 리포트 생성까지 모든 Excel 작업을 한 번에 처리하고
                  효율적으로 마무리하세요.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <FileText className="text-blue-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">리포트 · 양식</h3>
                <p className="text-gray-600">
                  Excel 템플릿 기반의 리포트, 양식을 손쉽게 생성하고 배포할 수 있어요.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Workflow className="text-purple-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">워크플로우 자동화</h3>
                <p className="text-gray-600">
                  복잡한 업무 프로세스를 시각적으로 설계하고 자동으로 실행되도록 설정하세요.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Calendar className="text-orange-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">스케줄 실행</h3>
                <p className="text-gray-600">
                  매일, 매주, 매월 원하는 시간에 자동으로 작업이 실행되도록 예약하세요.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8 shadow-2xl text-white">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">작업 현황</span>
                  <Zap size={24} className="text-yellow-300" />
                </div>
                <div className="text-4xl font-bold mb-2">156개</div>
                <div className="text-sm opacity-80">이번 달 처리한 작업</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm opacity-80 mb-1">Excel 처리</div>
                  <div className="text-2xl font-semibold">87개</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm opacity-80 mb-1">리포트 · 양식</div>
                  <div className="text-2xl font-semibold">42개</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-sm opacity-80 mb-3">업무 시간 절감</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>데이터 처리</span>
                      <span>-85%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-yellow-300 rounded-full h-2 w-10/12" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>리포트 작성</span>
                      <span>-92%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-yellow-300 rounded-full h-2 w-11/12" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>문서 작업</span>
                      <span>-78%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-yellow-300 rounded-full h-2 w-9/12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 text-center">
          <Repeat className="mx-auto mb-4 text-blue-500" size={48} />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Excel 작업으로 인한 야근은 이제 그만!</h3>
          <p className="text-gray-600 mb-6">xOffice가 당신의 시간을 되찾아 드립니다.</p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            xOffice 시작하기
          </a>
        </div>
      </div>
    </section>
  )
}
