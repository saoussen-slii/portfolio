import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

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
  once?: boolean
  amount?: number
  children: ReactNode
}

export function ScrollReveal({
  as: Tag = 'div',
  children,
  className,
  once = false,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setVisible(true)
        if (once) observer.disconnect()
      },
      { threshold: amount },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [amount, once])

  const Component = Tag as ElementType

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Component>
  )
}
