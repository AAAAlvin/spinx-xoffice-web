'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/** 토스 류 — 길고 부드럽게 감기는 out cubic */
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** 스크롤에 걸리기 전 딜레이 (초) */
  delay?: number
  /** 첫 화면(히어로) — 뷰포트 진입이 아닌 마운트 시 애니메이션 */
  asHero?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  asHero = false,
}: ScrollRevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  if (asHero) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay, ease }}
      viewport={{ once: false, amount: 0.1, margin: '0px 0px -8% 0px' }}
    >
      {children}
    </motion.div>
  )
}
