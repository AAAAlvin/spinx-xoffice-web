import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const features = [
  {
    title: 'Excel을 통한 업무 효율화',
    desc: '데이터 연동, 가공, 취합, 분석, 리포트 생성까지 모든 Excel 작업을 한 번에 처리하고 효율적으로 마무리하세요.',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>
    ),
  },
  {
    title: '리포트 · 양식',
    desc: 'Excel 템플릿 기반의 리포트, 양식을 손쉽게 생성하고 배포할 수 있어요.',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
    ),
  },
  {
    title: '워크플로우 자동화',
    desc: '복잡한 업무 프로세스를 시각적으로 설계하고 자동으로 실행되도록 설정하세요.',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M6 9v3a3 3 0 0 0 3 3h6" /></svg>
    ),
  },
  {
    title: '스케줄 실행',
    desc: '매일, 매주, 매월 원하는 시간에 자동으로 작업이 실행되도록 예약하세요.',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
    ),
  },
]

const savings = [
  { label: '데이터 처리', pct: 85 },
  { label: '리포트 작성', pct: 92 },
  { label: '문서 작업', pct: 78 },
]

export default function XOfficeSection() {
  return (
    <section
      id="xoffice"
      className="scroll-mt-16 border-t border-line-faint bg-white px-6 py-[104px]"
    >
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-16 text-center">
          <Image
            src="/images/xoffice-logo.png"
            alt="xOffice"
            width={150}
            height={42}
            className="mx-auto mb-[22px] h-[42px] w-auto object-contain"
          />
          <p className="text-[clamp(1.2rem,2vw,1.5rem)] font-bold tracking-[-0.02em] text-ink-800">
            Native Excel 기반의 강력한 업무 플랫폼
          </p>
          <p className="mt-2.5 text-[1.05rem] text-ink-500">Excel을 활용한 손쉬운 데이터 분석과 활용</p>
        </ScrollReveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12">
          <div className="flex flex-col gap-2">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.07}>
                <div className="flex gap-[18px] rounded-2xl p-[18px] transition-colors duration-200 hover:bg-surface-muted">
                  <div className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[13px] bg-brand-tint">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-[1.18rem] font-bold tracking-[-0.01em] text-ink-900">
                      {f.title}
                    </h3>
                    <p className="text-[0.97rem] leading-[1.65] text-ink-600">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="rounded-[24px] border border-line bg-surface p-7 shadow-[0_24px_60px_-34px_rgba(11,26,34,.22)]">
            <div className="mb-4 rounded-[18px] border border-line-soft bg-white p-6">
              <div className="mb-3.5 flex items-center justify-between">
                <span className="text-[0.95rem] font-semibold text-ink-600">이번 달 처리한 작업</span>
                <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[0.78rem] font-bold text-brand">
                  +24%
                </span>
              </div>
              <div className="text-[3rem] font-extrabold leading-none tracking-[-0.03em] text-ink-900">
                156<span className="text-[1.3rem] font-bold text-ink-500">개</span>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="rounded-[16px] border border-line-soft bg-white p-[18px]">
                <div className="mb-1.5 text-[0.82rem] text-ink-500">Excel 처리</div>
                <div className="text-[1.6rem] font-bold text-ink-900">
                  87<span className="text-[0.9rem] text-ink-400">개</span>
                </div>
              </div>
              <div className="rounded-[16px] border border-line-soft bg-white p-[18px]">
                <div className="mb-1.5 text-[0.82rem] text-ink-500">리포트 · 양식</div>
                <div className="text-[1.6rem] font-bold text-ink-900">
                  42<span className="text-[0.9rem] text-ink-400">개</span>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border border-line-soft bg-white p-[22px]">
              <div className="mb-4 text-[0.88rem] font-semibold text-ink-600">업무 시간 절감</div>
              <div className="flex flex-col gap-3.5">
                {savings.map((s) => (
                  <div key={s.label}>
                    <div className="mb-[7px] flex justify-between text-[0.85rem]">
                      <span className="font-medium text-ink-800">{s.label}</span>
                      <span className="font-bold text-brand">-{s.pct}%</span>
                    </div>
                    <div className="h-[7px] overflow-hidden rounded-full bg-line-soft">
                      <div className="h-full rounded-full bg-brand" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16 rounded-[24px] border border-line bg-surface-muted p-[56px_32px] text-center">
          <h3 className="mb-3 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em] text-ink-900">
            Excel 작업으로 인한 야근은 이제 그만!
          </h3>
          <p className="mb-7 text-[1.08rem] text-ink-600">xOffice가 당신의 시간을 되찾아 드립니다.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[13px] bg-brand px-[30px] py-3.5 text-[16px] font-bold text-white shadow-[0_8px_24px_rgba(14,154,167,.28)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-dark hover:shadow-[0_12px_34px_rgba(14,154,167,.42)]"
          >
            xOffice 시작하기<span>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
