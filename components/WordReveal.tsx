'use client'

/**
 * MengTo/Skills — staggered-word-reveal 를 우리 프레임워크(framer-motion)에 이식.
 * 토큰: y:20, opacity:0, duration 0.8, ease [0.16,1,0.3,1], stagger 0.07, once:true.
 * 단어(글자 아님) 단위 스태거, 뷰포트 진입 시 1회만.
 */
import { Fragment } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

type Segment = { text: string; className?: string } | { br: true }

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export default function WordReveal({
  segments,
  className,
  immediate = false,
}: {
  segments: Segment[]
  className?: string
  /** 히어로처럼 항상 첫 화면인 경우 뷰포트 감지 없이 마운트 시 재생 */
  immediate?: boolean
}) {
  const reduce = useReducedMotion()
  const label = segments
    .filter((s): s is { text: string; className?: string } => 'text' in s)
    .map((s) => s.text)
    .join(' ')

  if (reduce) {
    return (
      <h1 className={className}>
        {segments.map((s, i) =>
          'br' in s ? (
            <br key={i} />
          ) : (
            <span key={i} className={s.className}>
              {s.text}
            </span>
          )
        )}
      </h1>
    )
  }

  const revealProps = immediate
    ? { animate: 'visible' as const }
    : {
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.2, margin: '0px 0px -10% 0px' },
      }

  return (
    <motion.h1
      className={className}
      aria-label={label}
      variants={container}
      initial="hidden"
      {...revealProps}
    >
      {segments.map((seg, si) => {
        if ('br' in seg) return <br key={`br-${si}`} aria-hidden />
        return (
          <Fragment key={`seg-${si}`}>
            {seg.text.split(/(\s+)/).map((part, pi) =>
              part.trim() ? (
                <motion.span
                  key={`w-${si}-${pi}`}
                  variants={wordVariant}
                  aria-hidden
                  className={`inline-block ${seg.className ?? ''}`}
                >
                  {part}
                </motion.span>
              ) : (
                <Fragment key={`sp-${si}-${pi}`}>{part}</Fragment>
              )
            )}
          </Fragment>
        )
      })}
    </motion.h1>
  )
}
