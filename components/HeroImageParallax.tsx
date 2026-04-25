'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * 히어로 주 이미지에만 적용. 스크롤에 따라 아래로 천천히 이동 (토스 랜딩 느낌의 깊이감)
 */
export default function HeroImageParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 64])

  return (
    <div ref={ref} className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl">
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
