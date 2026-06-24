"use client"

import { useEffect, useRef, useState } from "react"

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimateIn({ children, delay = 0, className }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      data-visible={visible}
    >
      {children}
    </div>
  )
}
