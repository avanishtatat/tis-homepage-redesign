import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { navItems } from '../../data/navItems'
import { contact } from '../../data/contact'
import Button from '../ui/Button'

export default function MobileNav({ id, open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="overflow-hidden border-t border-line bg-surface lg:hidden"
        >
          <ul className="px-4 pt-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 font-display text-xl font-bold uppercase text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 py-5 sm:px-6">
            <Button href={contact.helpline.href} variant="outline" className="w-full">
              <Phone size={18} aria-hidden="true" />
              Call {contact.helpline.label}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}