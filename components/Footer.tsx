const columns = [
  {
    title: '서비스',
    links: ['공지사항', '자주 묻는 질문', '공인인증센터', '계정 일시잠금', '고객보호센터'],
  },
  { title: '회사', links: ['회사 소개', '채용', '블로그'] },
  { title: '문의', links: ['사업 제휴', '인증 사업 문의', '마케팅 · PR', 'IR'] },
]

const policies = [
  { label: '서비스 이용약관', strong: false },
  { label: '통합 금융정보 서비스 약관', strong: false },
  { label: '이용자의 권리 및 유의사항', strong: false },
  { label: '개인정보 처리방침', strong: true },
  { label: '위치기반서비스 이용약관', strong: false },
]

const linkClass = 'text-ink-600 transition-colors duration-150 hover:text-brand'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-muted">
      <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-16">
        <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[14px] font-bold text-ink-900">{col.title}</h3>
              <ul className="flex flex-col gap-[11px]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-[14.5px] ${linkClass}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-4 text-[14px] font-bold text-ink-900">고객센터</h3>
            <ul className="flex flex-col gap-[9px]">
              <li className="text-[14.5px] text-ink-600">☎ 1599-4905</li>
              <li className="text-[13px] text-ink-400">24시간 연중무휴</li>
              <li className="mt-2 text-[14.5px] text-ink-600">✉ support@spinx.im</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8">
          <div className="flex flex-col gap-1.5 text-[13px] leading-[1.6] text-ink-500">
            <p className="text-[14.5px] font-bold text-ink-800">㈜SPINX</p>
            <p className="text-ink-600">xOffice · xConnector</p>
            <p>사업자 등록번호 : 000-0000-00000 | 대표 : 김혜주</p>
            <p>호스팅 서비스 : 주식회사 SPINX | 통신판매업 신고번호 : 2024-서울강남-03377</p>
            <p>경기도 성남시 분당구 판교역로240 A동 514호</p>
            <p className="mt-2">고객센터 : 010-3432-5887</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-[18px]">
            {policies.map((p) => (
              <a
                key={p.label}
                href="#"
                className={`text-[13px] transition-colors duration-150 hover:text-brand ${
                  p.strong ? 'font-bold text-ink-800' : 'text-ink-500'
                }`}
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
