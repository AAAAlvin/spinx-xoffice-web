import { Building2, ShoppingCart, Heart, GraduationCap, TrendingUp, Users } from 'lucide-react'

export default function UseCasesSection() {
  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            사용 사례
          </h2>
          <p className="text-xl text-gray-600">
            다양한 산업에서 활용되는 xoffice & xconnector
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Building2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">금융 · 보험</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">일일 리포트 자동화</h4>
                <p className="text-sm text-gray-600">
                  매일 오전 9시, 어제의 거래 내역을 분석하여 
                  Excel 리포트를 자동으로 생성하고 이메일로 발송
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">고객 데이터 통합</h4>
                <p className="text-sm text-gray-600">
                  여러 시스템의 고객 정보를 통합하여 
                  CRM에 자동으로 업데이트
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
                <h4 className="font-semibold text-gray-900 mb-2">재고 관리 자동화</h4>
                <p className="text-sm text-gray-600">
                  판매 데이터를 실시간으로 분석하여 
                  재고가 부족한 상품을 자동으로 발주
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">주문 처리 자동화</h4>
                <p className="text-sm text-gray-600">
                  주문 접수부터 송장 발행, 배송 추적까지 
                  전 과정을 자동화
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-500 p-3 rounded-xl">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">의료 · 헬스케어</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">환자 기록 관리</h4>
                <p className="text-sm text-gray-600">
                  진료 기록을 자동으로 정리하고 
                  필요한 서류를 즉시 생성
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">예약 알림 자동화</h4>
                <p className="text-sm text-gray-600">
                  예약 일정을 확인하여 환자에게 
                  SMS/이메일로 자동 알림 발송
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-xl">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">교육</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">성적 처리 자동화</h4>
                <p className="text-sm text-gray-600">
                  시험 점수를 입력하면 자동으로 등급을 산출하고 
                  성적표를 생성
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">출석 관리</h4>
                <p className="text-sm text-gray-600">
                  출석 데이터를 수집하여 통계를 내고 
                  학부모에게 자동 알림
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                  여러 채널의 데이터를 수집하여 
                  통합 리포트를 자동 생성
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">이메일 마케팅 자동화</h4>
                <p className="text-sm text-gray-600">
                  고객 행동 데이터를 분석하여 
                  개인화된 이메일을 자동 발송
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-500 p-3 rounded-xl">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">인사 · HR</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">급여 계산 자동화</h4>
                <p className="text-sm text-gray-600">
                  근태 데이터를 기반으로 급여를 자동 계산하고 
                  명세서를 생성
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">입사 프로세스 자동화</h4>
                <p className="text-sm text-gray-600">
                  신입 사원 정보를 받아 필요한 서류를 
                  자동으로 생성하고 배포
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            당신의 업무에는 어떻게 활용하시겠어요?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            무료 상담을 통해 최적의 자동화 방안을 찾아드립니다
          </p>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}

