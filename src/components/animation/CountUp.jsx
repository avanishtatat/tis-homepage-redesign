import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ to, duration = 1.5 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!inView || reduceMotion) return

    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        ref.current.textContent = Math.round(latest)
      },
    })

    return () => controls.stop()
  }, [inView, reduceMotion, to, duration])

  return (
    <span ref={ref} aria-hidden="true">
      {reduceMotion ? to : 0}
    </span>
  )
}