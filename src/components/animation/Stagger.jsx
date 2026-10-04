import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Stagger({ children, className = '', stagger = 0.1 }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.ul>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.li variants={item} className={className}>
      {children}
    </motion.li>
  )
}