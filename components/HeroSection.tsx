import ScrollReveal from '@/components/ScrollReveal'
import WordReveal from '@/components/WordReveal'

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white px-6 pb-24 pt-[148px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-160px] h-[560px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(22,194,206,.10), rgba(22,194,206,0) 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[960px] text-center">
        <ScrollReveal asHero>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-[7px] shadow-[0_1px_2px_rgba(11,26,34,.03)]">
            <span className="h-[7px] w-[7px] rounded-full bg-brand" />
            <span className="whitespace-nowrap text-[13.5px] font-semibold tracking-[-0.01em] text-ink-800">
              Excel은 그대로, 업무의 가치는 무한하게
            </span>
          </div>
        </ScrollReveal>
        <WordReveal
          immediate
          className="mb-6 text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-ink-900"
          segments={[
            { text: '사용하던 Excel File 그대로,' },
            { br: true },
            { text: 'System과 AI를 결합하세요', className: 'text-brand' },
          ]}
        />
        <ScrollReveal delay={0.5}>
          <p className="mx-auto mb-10 max-w-[620px] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.6] text-ink-600">
            <strong className="font-bold text-ink-800">xOffice</strong>로 Excel File을 System에 연결하고
            <br />
            <strong className="font-bold text-ink-800">xConnector</strong>로 AI를 통해 모든 것과 연결하세요.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.62}>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-[9px] rounded-[14px] bg-brand px-[30px] py-[15px] text-[17px] font-bold text-white shadow-[0_10px_30px_rgba(14,154,167,.32)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-dark hover:shadow-[0_12px_34px_rgba(14,154,167,.42)]"
            >
              문의하기
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#xoffice"
              className="inline-flex items-center gap-2 rounded-[14px] border border-line-field bg-white px-[26px] py-[15px] text-[17px] font-semibold text-ink-800 transition-colors duration-200 hover:border-[#CFD8D8] hover:bg-[#F4F7F7]"
            >
              제품 살펴보기
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="relative mx-auto mt-[72px] max-w-[1040px]">
        <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <div className="flex items-center gap-[7px] border-b border-line-soft bg-surface px-[18px] py-[14px]">
            <span className="h-[11px] w-[11px] rounded-full bg-[#E2575A]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#EBB740]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#3FB860]" />
            <span className="ml-3.5 text-[12.5px] font-medium text-ink-400">xoffice.spinx.app</span>
          </div>

          <div className="flex aspect-[16/9] w-full bg-surface text-[13px]">
            <aside className="flex w-[188px] flex-none flex-col gap-1 border-r border-line-soft bg-white p-[18px_14px]">
              <div className="flex items-center gap-[9px] px-1.5 pb-4 pt-1">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-[7px] text-[13px] font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg,#16C2CE,#0B7E89)' }}
                >
                  X
                </span>
                <span className="text-[14px] font-bold tracking-[-0.01em] text-ink-900">xOffice</span>
              </div>
              <SideItem label="대시보드" />
              <div className="flex items-center gap-2.5 rounded-[9px] bg-brand-tint px-[11px] py-[9px] font-bold text-brand-dark">
                <span className="h-[15px] w-[15px] rounded-[4px] bg-brand" />
                워크플로우
              </div>
              <SideItem label="리포트" />
              <SideItem label="스케줄" />
              <SideItem label="연결" />
              <div className="mt-auto rounded-[12px] border border-line-soft bg-surface p-3">
                <div className="mb-1 text-[11px] text-ink-400">이번 달 절감</div>
                <div className="text-[19px] font-extrabold tracking-[-0.02em] text-ink-900">
                  142<span className="text-[12px] font-semibold text-ink-500"> 시간</span>
                </div>
              </div>
            </aside>

            <div className="flex min-w-0 flex-1 flex-col p-[20px_22px]">
              <div className="mb-[18px] flex items-center justify-between">
                <div>
                  <div className="mb-[3px] text-[11px] text-ink-400">워크플로우</div>
                  <div className="text-[16px] font-extrabold tracking-[-0.02em] text-ink-900">
                    월간 매출 자동화
                  </div>
                </div>
                <div className="flex flex-none items-center gap-[7px] whitespace-nowrap rounded-full border border-[#D4EBEC] bg-brand-tint px-3 py-1.5">
                  <span className="h-[7px] w-[7px] rounded-full bg-brand [animation:spinx-pulse_1.8s_infinite]" />
                  <span className="text-[12px] font-bold text-brand-dark">실행 중</span>
                </div>
              </div>

              <div className="mb-[18px] flex items-stretch">
                <Step
                  done
                  label="Excel 불러오기"
                  status="완료"
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>
                  }
                />
                <Connector active />
                <Step
                  done
                  label="데이터 정리"
                  status="완료"
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.5V19l4 2v-8.5z" /></svg>
                  }
                />
                <Connector active />
                <div className="flex-1 rounded-[12px] border-[1.5px] border-brand bg-white p-[12px_10px] text-center shadow-[0_4px_14px_rgba(14,154,167,.16)]">
                  <div className="mx-auto mb-2 flex h-[26px] w-[26px] items-center justify-center rounded-[8px] bg-brand">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 14l4-4 3 3 5-6" /></svg>
                  </div>
                  <div className="text-[11px] font-bold text-ink-900">집계·분석</div>
                  <div className="mt-0.5 text-[10px] font-bold text-brand">처리 중</div>
                </div>
                <Connector />
                <div className="flex-1 rounded-[12px] border border-line-soft bg-surface p-[12px_10px] text-center">
                  <div className="mx-auto mb-2 flex h-[26px] w-[26px] items-center justify-center rounded-[8px] bg-[#F0F3F3]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A2A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z" /></svg>
                  </div>
                  <div className="text-[11px] font-bold text-ink-500">리포트·발송</div>
                  <div className="mt-0.5 text-[10px] font-semibold text-ink-400">대기</div>
                </div>
              </div>

              <div className="flex flex-1 flex-col overflow-hidden rounded-[14px] border border-line-soft bg-white">
                <div className="flex border-b border-line-soft bg-surface px-4 py-2.5 text-[11px] font-bold text-ink-400">
                  <span className="flex-[2]">지점</span>
                  <span className="flex-[1.4] text-right">매출</span>
                  <span className="flex-1 text-right">전월비</span>
                  <span className="flex-[1.2] text-right">상태</span>
                </div>
                <TableRow branch="강남점" sales="₩ 4.82억" delta="+12%" up status="달성" />
                <TableRow branch="판교점" sales="₩ 3.41억" delta="+6%" up status="달성" />
                <TableRow branch="부산점" sales="₩ 2.07억" delta="-3%" status="주의" warn last />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

function SideItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-[9px] px-[11px] py-[9px] text-ink-500">
      <span className="h-[15px] w-[15px] rounded-[4px] border-[1.6px] border-[#C2CCCC]" />
      {label}
    </div>
  )
}

function Connector({ active }: { active?: boolean }) {
  return (
    <div className="flex w-[22px] flex-none items-center justify-center">
      <span className={`h-0.5 w-full ${active ? 'bg-[#CFE5E6]' : 'bg-line-soft'}`} />
    </div>
  )
}

function Step({
  label,
  status,
  icon,
}: {
  done?: boolean
  label: string
  status: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex-1 rounded-[12px] border border-line-soft bg-white p-[12px_10px] text-center shadow-[0_1px_2px_rgba(11,26,34,.03)]">
      <div className="mx-auto mb-2 flex h-[26px] w-[26px] items-center justify-center rounded-[8px] bg-brand-tint">
        {icon}
      </div>
      <div className="text-[11px] font-bold text-ink-800">{label}</div>
      <div className="mt-0.5 text-[10px] font-semibold text-brand">{status}</div>
    </div>
  )
}

function TableRow({
  branch,
  sales,
  delta,
  up,
  status,
  warn,
  last,
}: {
  branch: string
  sales: string
  delta: string
  up?: boolean
  status: string
  warn?: boolean
  last?: boolean
}) {
  return (
    <div
      className={`flex items-center px-4 py-[9px] text-[12px] ${last ? '' : 'border-b border-[#F4F7F7]'}`}
    >
      <span className="flex-[2] font-semibold text-ink-800">{branch}</span>
      <span className="flex-[1.4] text-right font-bold text-ink-900">{sales}</span>
      <span className={`flex-1 text-right font-bold ${up ? 'text-brand' : 'text-[#E2575A]'}`}>
        {delta}
      </span>
      <span className="flex-[1.2] text-right">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
            warn ? 'bg-[#FBF1E3] text-[#B26A1F]' : 'bg-brand-tint text-brand-dark'
          }`}
        >
          {status}
        </span>
      </span>
    </div>
  )
}
