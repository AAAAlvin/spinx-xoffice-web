import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  공인인증센터
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  계정 일시잠금
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  고객보호센터
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">회사</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* Inquiries */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">문의</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  사업 제휴
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  인증 사업 문의
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  마케팅 · PR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  IR
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">고객센터</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                <span>1599-4905</span>
              </li>
              <li className="text-sm text-gray-500">24시간 연중무휴</li>
              <li className="flex items-center text-gray-600 mt-4">
                <Mail size={16} className="mr-2" />
                <span>support@spinx.im</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-gray-900">㈜SPINX</p>
            <p>사업자 등록번호 : 000-0000-00000 | 대표 : 김혜주</p>
            <p>호스팅 서비스 : 주식회사 SPINX | 통신판매업 신고번호 : 2024-서울강남-03377</p>
            <p>경기도 성남시 분당구 판교역로240 A동 514호</p>
            <p className="mt-4">고객센터 : 010-3432-5887</p>
          </div>

          {/* Terms and Links */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              서비스 이용약관
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              통합 금융정보 서비스 약관
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              이용자의 권리 및 유의사항
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors font-semibold">
              개인정보 처리방침
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              위치기반서비스 이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

