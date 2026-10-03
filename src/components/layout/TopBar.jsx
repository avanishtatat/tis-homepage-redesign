import { Phone } from 'lucide-react'
import { contact } from '../../data/contact'

export default function TopBar() {
  return (
    <div className="bg-brand text-on-brand">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6 lg:px-8">
        <p className="hidden font-medium uppercase tracking-wide sm:block">
          Admissions Helpline
        </p>
        <div className="flex w-full items-center justify-between gap-6 sm:w-auto">
          <a
            href={contact.helpline.href}
            className="inline-flex min-h-8 items-center gap-2 font-bold focus-visible:outline-white"
          >
            <Phone size={16} aria-hidden="true" />
            {contact.helpline.label}
          </a>
          <a
            href="#enquire"
            className="font-bold uppercase tracking-wide underline-offset-4 hover:underline focus-visible:outline-white"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  )
}