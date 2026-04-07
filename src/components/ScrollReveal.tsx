import { motion } from 'framer-motion'
import type React from 'react'

type ScrollRevealAs =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'footer'
  | 'main'
  | 'aside'
  | 'li'
  | 'span'
  | 'p'

type ScrollRevealProps = {
  as?: ScrollRevealAs
  className?: string
  /**
   * Animate only the first time it enters the viewport.
   * Default: true
   */
  once?: boolean
  /**
   * How much of the element must be visible before triggering.
   * Default: 0.2
   */
  amount?: number
  /**
   * Slide distance in pixels.
   * Default: 14
   */
  y?: number
  x?: number
  /**
   * Default: 0.45
   */
  duration?: number
  /**
   * Default: 0
   */
  delay?: number
  children: React.ReactNode
}

export function ScrollReveal({
  as,
  children,
  className,
  once = false,
  amount = 0.2,
  y = 80,
  x = 0,
  duration = 1.2,
  delay = 0.1,
}: ScrollRevealProps) {
  const commonProps = {
    className,
    initial: { opacity: 0, y, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once, amount },
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
    children,
  }

  switch (as) {
    case 'section':
      return <motion.section {...commonProps} />
    case 'article':
      return <motion.article {...commonProps} />
    case 'header':
      return <motion.header {...commonProps} />
    case 'footer':
      return <motion.footer {...commonProps} />
    case 'main':
      return <motion.main {...commonProps} />
    case 'aside':
      return <motion.aside {...commonProps} />
    case 'li':
      return <motion.li {...commonProps} />
    case 'span':
      return <motion.span {...commonProps} />
    case 'p':
      return <motion.p {...commonProps} />
    case 'div':
    default:
      return <motion.div {...commonProps} />
  }
}
