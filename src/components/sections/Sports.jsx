import { sports, sportsIntro } from '../../data/sports'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { Stagger, StaggerItem } from '../animation/Stagger'

export default function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-heading" className="bg-surface-alt py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="sports-heading"
            eyebrow={sportsIntro.eyebrow}
            title={sportsIntro.title}
            description={sportsIntro.description}
          />
        </Reveal>

        <Stagger
          stagger={0.04}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {sports.map((sport, index) => (
            <StaggerItem
              key={sport}
              className="rounded-2xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-brand-text"
            >
              <span aria-hidden="true" className="font-display text-sm font-bold text-accent-text">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-display text-xl font-bold uppercase leading-tight">{sport}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}