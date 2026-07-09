/**
 * MengTo/Skills — marquee-loop + company-logos.
 * xConnector가 연동하는 실제 서비스 로고를 이음새 없는 무한 마퀴로.
 * Iconify Simple Icons(단색), 아이템 시퀀스를 2회 복제해 -50% 루프.
 */
const logos = [
  { slug: 'googlesheets', label: 'Google Sheets' },
  { slug: 'airtable', label: 'Airtable' },
  { slug: 'mysql', label: 'MySQL' },
  { slug: 'postgresql', label: 'PostgreSQL' },
  { slug: 'notion', label: 'Notion' },
  { slug: 'discord', label: 'Discord' },
  { slug: 'googledrive', label: 'Google Drive' },
  { slug: 'gmail', label: 'Gmail' },
  { slug: 'telegram', label: 'Telegram' },
  { slug: 'googlegemini', label: 'Gemini' },
  { slug: 'zapier', label: 'Zapier' },
]

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-16 pr-16"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo) => (
        <li key={logo.slug} className="flex-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://cdn.simpleicons.org/${logo.slug}/7C8A8E`}
            alt={logo.label}
            width={28}
            height={28}
            loading="lazy"
            className="h-7 w-auto opacity-70 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  )
}

export default function LogoMarquee() {
  return (
    <section
      aria-label="연동 지원 서비스"
      className="border-y border-line-soft bg-white py-12"
    >
      <p className="mb-8 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-400">
        Excel · DB · 메신저 · AI까지 자유롭게 연동
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max [animation:marquee_34s_linear_infinite] hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
      </div>
    </section>
  )
}
