import { stats } from '../../data/stats'
import { Stagger, StaggerItem } from '../animation/Stagger'
import CountUp from '../animation/CountUp'

export default function Stats() {
  return (
    <section aria-label="TIS at a glance" className="border-y border-line bg-surface-alt py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-display text-5xl font-extrabold text-brand-text sm:text-6xl">
                <span className="sr-only">
                  {stat.value}
                  {stat.suffix}
                </span>
                <CountUp to={stat.value} />
                <span aria-hidden="true">{stat.suffix}</span>
              </p>
              <span
                aria-hidden="true"
                className="mx-auto mt-3 block h-0.5 w-10 bg-accent"
              />
              <p className="mt-3 font-display text-base font-bold uppercase tracking-wide text-ink-muted sm:text-lg">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}