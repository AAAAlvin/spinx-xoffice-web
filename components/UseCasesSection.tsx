import ScrollReveal from '@/components/ScrollReveal'

const useCases = [
  {
    title: '제조업',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16C2CE" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V8l6-3v15M10 20V5l8 4v11M14 11h0M14 15h0" /></svg>
    ),
    items: [
      {
        h: '생산일보',
        p: '매일 오전, 아침까지의 생산 실적을 분석해 생산일보를 만들고 이메일로 발송합니다.',
      },
      {
        h: '재고 리포트',
        p: '입고·출고·기초재고를 반영해 재고 리포트를 작성하고, 부족·악성 재고 시 알림 메일을 보냅니다.',
      },
    ],
  },
  {
    title: '유통업',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16C2CE" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
    ),
    items: [
      {
        h: '채널 · 지점 · 영업 실적',
        p: '채널별, 지점별, 영업사원별 판매 실적을 분석 관점별로 정리한 실적 리포트를 활용할 수 있어요.',
      },
      {
        h: '반품 · 불량 사유 리포트',
        p: '반품·불량 목록을 바탕으로 사유별 지표를 나누어 원인 파악에 쓰는 리포트를 만듭니다.',
      },
    ],
  },
  {
    title: '교육',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16C2CE" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>
    ),
    items: [
      { h: '성적 처리', p: '점수 입력에 따라 등급을 산출하고 성적표 양식을 생성합니다.' },
      { h: '출석 관리', p: '출석 데이터를 모아 통계를 내고, 학부모 알림에 활용합니다.' },
    ],
  },
  {
    title: '마케팅',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16C2CE" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
    ),
    items: [
      { h: '캠페인 성과 분석', p: '여러 채널 데이터를 모아 통합 리포트 형태로 확인합니다.' },
      { h: '이메일 캠페인', p: '고객 행동을 참고해 메시지를 나누어 발송하는 흐름을 지원합니다.' },
    ],
  },
]

export default function UseCasesSection() {
  return (
    <section
      id="usecases"
      className="scroll-mt-16 border-t border-[#EAEFEF] bg-white px-6 py-[104px]"
    >
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-[0.82rem] font-bold uppercase tracking-[0.12em] text-brand">
            Use Cases
          </p>
          <h2 className="mb-3.5 text-[clamp(2rem,3.6vw,2.8rem)] font-extrabold tracking-[-0.025em] text-ink-900">
            활용 제안
          </h2>
          <p className="text-[1.1rem] text-ink-500">다양한 산업에서 활용 가능한 xOffice &amp; xConnector</p>
        </ScrollReveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {useCases.map((u, i) => (
            <ScrollReveal key={u.title} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col rounded-[24px] border border-line bg-white p-8 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#CFE5E6] hover:shadow-[0_22px_50px_-28px_rgba(11,26,34,.28)]">
                <div className="mb-[22px] flex items-center gap-3.5">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-ink-900">
                    {u.icon}
                  </div>
                  <h3 className="text-[1.45rem] font-extrabold tracking-[-0.02em] text-ink-900">
                    {u.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {u.items.map((it) => (
                    <div
                      key={it.h}
                      className="rounded-[14px] border border-line-soft bg-surface p-4"
                    >
                      <h4 className="mb-1.5 text-[1rem] font-bold text-ink-800">{it.h}</h4>
                      <p className="text-[0.9rem] leading-[1.6] text-ink-600">{it.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 rounded-[24px] border border-line bg-surface-muted p-[56px_32px] text-center">
          <h3 className="mb-3 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em] text-ink-900">
            당신의 업무에는 어떻게 활용하시겠어요?
          </h3>
          <p className="mx-auto mb-7 max-w-[560px] text-[1.05rem] leading-[1.6] text-ink-600">
            문의 접수 시 담당자가 연락드리며, 도입에 맞는 효율화 방안을 함께 살펴 드립니다.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[13px] bg-brand px-[30px] py-3.5 text-[16px] font-bold text-white shadow-[0_8px_24px_rgba(14,154,167,.28)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-dark hover:shadow-[0_12px_34px_rgba(14,154,167,.42)]"
          >
            문의하기<span>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
