import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const cards = [
  {
    name: 'xChat',
    tagline: '대화에서 바로 실행으로 이어지는 AI 업무 공간',
    desc: '자연어로 질문하면 업무 맥락을 반영해 실시간으로 답을 제공합니다. 후속 질문, 도구 호출, xOffice 연계를 통해 분석, 코드 작성, 작업 안내까지 하나의 대화 안에서 이어갈 수 있습니다.',
    tag: '스트리밍 · 도구 · xOffice',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    ),
  },
  {
    name: 'xSchema',
    tagline: 'Excel 데이터를 DB 설계로 바꾸는 캔버스',
    desc: 'Excel 시트를 테이블, 컬럼, 관계로 정리하고 캔버스에서 구조를 다듬습니다. 관계 자동 감지, 검증, SQL/DDL 전송, MySQL 스키마 반영을 지원하며, 외부 MySQL 카탈로그와 연결해 물리 테이블과 논리 뷰(sql_view)를 함께 다룰 수 있습니다.',
    tag: '설계 · DDL · 뷰',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg>
    ),
  },
  {
    name: 'xBoard',
    tagline: '데이터 확인과 AI 대화를 한 화면에서',
    desc: '넓은 그리드에서 데이터를 조회하고 정리하면서, 같은 화면에서 AI에게 질문할 수 있습니다. 표 작업과 대화를 오가며 필요한 분석을 빠르게 좁혀 갑니다.',
    tag: '분할 화면',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
    ),
  },
  {
    name: 'xFlow',
    tagline: '반복 업무를 설계하고 실행하는 자동화 엔진',
    desc: '트리거, 조건, HTTP, 코드, 지연 노드를 연결해 업무 흐름을 만듭니다. 서버 스케줄과 연동하면 정해진 주기에 맞춰 자동으로 실행되는 업무 플로우를 구성할 수 있습니다.',
    tag: '플로 · 스케줄',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E9AA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M6 9v3a3 3 0 0 0 3 3h6" /></svg>
    ),
  },
]

export default function XConnectorSection() {
  return (
    <section
      id="xconnector"
      className="scroll-mt-16 border-t border-[#EAEFEF] bg-surface-muted px-6 py-[104px]"
    >
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-14 text-center">
          <Image
            src="/images/xconnector-logo.png"
            alt="xConnector"
            width={165}
            height={42}
            className="mx-auto mb-[22px] h-[42px] w-auto object-contain"
          />
          <p className="text-[clamp(1.2rem,2vw,1.5rem)] font-bold tracking-[-0.02em] text-ink-800">
            Excel과 AI를 연결하는 플랫폼
          </p>
          <p className="mx-auto mt-2.5 max-w-[560px] text-[1.05rem] text-ink-500">
            AI와 업무 데이터를 안전하게 이어 주고, 필요한 서비스와 유연하게 통합할 수 있어요.
          </p>
        </ScrollReveal>

        <ScrollReveal className="relative mb-6 overflow-hidden rounded-[28px] bg-ink-900 p-[56px_32px] text-center">
          <div
            aria-hidden
            className="absolute left-1/2 top-[-40%] h-[420px] w-[680px] -translate-x-1/2"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(22,194,206,.18), rgba(22,194,206,0) 70%)',
            }}
          />
          <div className="relative">
            <p className="mb-3.5 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-brand-bright">
              xConnector
            </p>
            <h3 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-[-0.02em] text-white">
              xConnector의 네 가지 축
            </h3>
            <p className="mx-auto mt-[18px] max-w-[620px] text-[1.02rem] leading-[1.7] text-white/[0.62]">
              질문하고, 설계하고, 확인하고, 자동화하는 흐름을
              <br />
              하나의 업무 공간에서 이어갑니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {cards.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col rounded-[22px] border border-line bg-white p-[30px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#CFE5E6] hover:shadow-[0_22px_50px_-28px_rgba(11,26,34,.28)]">
                <div className="mb-3.5 flex items-center justify-between">
                  <h3 className="text-[1.4rem] font-extrabold tracking-[-0.02em] text-ink-900">
                    {c.name}
                  </h3>
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-brand-tint">
                    {c.icon}
                  </span>
                </div>
                <p className="mb-3.5 text-[0.9rem] font-semibold text-brand">{c.tagline}</p>
                <p className="mb-5 text-[0.94rem] leading-[1.68] text-ink-600">{c.desc}</p>
                <div className="mt-auto border-t border-line-faint pt-3.5 text-[0.82rem] font-semibold text-brand">
                  {c.tag}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="relative overflow-hidden rounded-[28px] bg-ink-900 p-[60px_32px] text-center">
          <div
            aria-hidden
            className="absolute bottom-[-50%] left-1/2 h-[460px] w-[760px] -translate-x-1/2"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(22,194,206,.16), rgba(22,194,206,0) 70%)',
            }}
          />
          <div className="relative">
            <h3 className="mb-4 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-white">
              Excel, AI, 자동화까지 하나의 흐름으로
            </h3>
            <p className="mx-auto mb-8 max-w-[660px] text-[1.08rem] leading-[1.65] text-white/[0.66]">
              xChat으로 묻고, xSchema로 구조를 분석하고, xBoard로 컨텐츠를 구성하고, xFlow를 통해 이 모든것을 연결하세요.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[13px] bg-white px-8 py-[15px] text-[16px] font-bold text-ink-900 transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-brand-tint"
            >
              xConnector 시작하기<span>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
