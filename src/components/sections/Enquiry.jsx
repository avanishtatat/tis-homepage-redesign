import { MapPin, Phone } from 'lucide-react'
import { contact } from '../../data/contact'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../animation/Reveal'
import EnquiryForm from './EnquiryForm'

export default function Enquiry() {
  return (
    <section id="enquire" aria-labelledby="enquire-heading" className="bg-surface-alt py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <SectionHeading
              id="enquire-heading"
              eyebrow="Admissions"
              title="Enquire"
              accent="now!"
              description="Share a few details and our admissions team will get back to you."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <address className="mt-8 space-y-4 text-lg not-italic">
              <p className="flex gap-3">
                <Phone size={22} className="mt-1 shrink-0 text-brand-text" aria-hidden="true" />
                <a href={contact.helpline.href} className="font-bold hover:underline underline-offset-4">
                  {contact.helpline.label}
                </a>
              </p>
              <p className="flex gap-3 text-ink-muted">
                <MapPin size={22} className="mt-1 shrink-0 text-brand-text" aria-hidden="true" />
                {contact.address}
              </p>
            </address>
            <Button href={contact.applyUrl} external size="lg" className="mt-8">
              Apply Now
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}