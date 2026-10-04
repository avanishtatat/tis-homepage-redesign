import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'

const arrowClass =
  'inline-flex size-11 items-center justify-center rounded-full border border-ink-muted/70 text-ink hover:bg-surface-alt'

export default function Testimonials() {
  const trackRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const scrollByPage = (direction) => {
    const track = trackRef.current
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section aria-labelledby="reviews-heading" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <SectionHeading id="reviews-heading" eyebrow="Google Reviews" title="From our" accent="parents" />
          </Reveal>
          <div className="hidden gap-2 sm:flex">
            <button type="button" onClick={() => scrollByPage(-1)} aria-label="Previous reviews" className={arrowClass}>
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollByPage(1)} aria-label="Next reviews" className={arrowClass}>
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ul
            ref={trackRef}
            tabIndex={0}
            aria-label="Parent reviews, scrollable"
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
          >
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="w-[85%] shrink-0 snap-start sm:w-[calc((100%_-_1rem)/2)] lg:w-[calc((100%_-_2rem)/3)]"
              >
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface-alt p-6">
                  <Quote size={28} className="text-accent" aria-hidden="true" />
                  <blockquote className="mt-4 grow text-lg leading-relaxed">{item.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <span className="block font-display text-lg font-bold uppercase">{item.name}</span>
                    <span className="text-sm text-ink-muted">{item.relation}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}