import { Building2, ShoppingCart, GraduationCap, TrendingUp, Factory, Truck } from 'lucide-react'

export default function UseCasesSection() {
  return (
    <section id="usecases" className="scroll-mt-16 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-gray-900 tracking-[-0.02em] mb-4">
            활용 제안
          </h2>
          <p className="text-xl text-gray-600">
            다양한 산업에서 활용가능한 xOffice{' & '}xConnector
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 ring-1 ring-slate-200/60">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-slate-700 p-3 rounded-xl">
                <Factory className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">제조업</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">생산일보</h4>
                <p className="text-sm text-gray-600">
                  매일 오전, 아침까지의 생산 실적을 분석해 생산일보를 만들고 이메일로 발송합니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">재고 리포트</h4>
                <p className="text-sm text-gray-600">
                  입고·출고·기초재고를 반영해 재고 리포트를 작성하고, 부족·악성 재고 시 알림 메일을
                  보냅니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 ring-1 ring-teal-200/60">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-teal-600 p-3 rounded-xl">
                <Truck className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">유통업</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">채널 · 지점 · 영업 실적</h4>
                <p className="text-sm text-gray-600">
                  채널별, 지점별, 영업사원별 판매 실적을 분석 관점별로 정리한 실적 리포트를 활용할 수
                  있어요.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">반품 · 불량 사유 리포트</h4>
                <p className="text-sm text-gray-600">
                  반품·불량 목록을 바탕으로 사유별 지표를 나누어 원인 파악에 쓰는 리포트를 만듭니다.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Building2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">금융 · 보험</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">일일 리포트</h4>
                <p className="text-sm text-gray-600">
                  매일 오전 9시, 전일 거래 내역을 분석해 Excel 리포트를 만들고 이메일로 발송합니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">고객 데이터 통합</h4>
                <p className="text-sm text-gray-600">
                  여러 시스템의 고객 정보를 모아 CRM에 맞게 반영합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-500 p-3 rounded-xl">
                <ShoppingCart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">이커머스</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">재고 관리</h4>
                <p className="text-sm text-gray-600">
                  판매 데이터를 바탕으로 재고 수준을 살펴 보고, 부족 품목 발주에 참고합니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">주문 처리</h4>
                <p className="text-sm text-gray-600">
                  주문 접수부터 송장·배송 추적까지 한 흐름으로 데이터를 모읍니다.
                </p>
              </div>
            </div>
          </div> */}

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-xl">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">교육</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">성적 처리</h4>
                <p className="text-sm text-gray-600">
                  점수 입력에 따라 등급을 산출하고 성적표 양식을 생성합니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">출석 관리</h4>
                <p className="text-sm text-gray-600">
                  출석 데이터를 모아 통계를 내고, 학부모 알림에 활용합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-pink-500 p-3 rounded-xl">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">마케팅</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">캠페인 성과 분석</h4>
                <p className="text-sm text-gray-600">
                  여러 채널 데이터를 모아 통합 리포트 형태로 확인합니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">이메일 캠페인</h4>
                <p className="text-sm text-gray-600">
                  고객 행동을 참고해 메시지를 나누어 발송하는 흐름을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-800 rounded-3xl p-12 text-white text-center shadow-[0_24px_80px_-16px_rgba(15,23,42,0.45)]">
          <h3 className="text-3xl font-bold mb-4">당신의 업무에는 어떻게 활용하시겠어요?</h3>
          <p className="text-xl mb-8 opacity-90">
            문의 접수 시 담당자가 연락드리며, 도입에 맞는 효율화 방안을 함께 살펴 드립니다.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-sm hover:bg-cyan-50 transition-colors"
          >
            문의하기
          </a>
        </div>
      </div>
    </section>
  )
}
