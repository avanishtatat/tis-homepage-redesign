import { about } from '../../data/about'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow={about.eyebrow}
              title={about.title}
              accent={about.accent}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {about.paragraph}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-accent text-3xl font-extrabold italic text-brand-text">
              {about.closing}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40}>
          <div className="rounded-3xl bg-brand p-8 text-on-brand sm:p-10">
            <p className="font-display text-sm font-bold uppercase tracking-widest">Established in</p>
            <p className="mt-2 font-display text-7xl font-extrabold sm:text-8xl">
              {about.established.year}
            </p>
            <span aria-hidden="true" className="mt-4 block h-0.5 w-14 bg-accent" />
            <p className="mt-4 text-lg">Under the aegis of {about.established.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}