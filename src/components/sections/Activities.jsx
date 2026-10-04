import { activities, activitiesIntro } from '../../data/activities'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { Stagger, StaggerItem } from '../animation/Stagger'

export default function Activities() {
  return (
    <section aria-labelledby="activities-heading" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="activities-heading"
            title={activitiesIntro.title}
            accent={activitiesIntro.accent}
          />
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {activities.map((activity) => (
            <StaggerItem key={activity.name} className="group relative overflow-hidden rounded-2xl">
              <img
                src={activity.image}
                alt={`Students enjoying ${activity.name.toLowerCase()} at TIS`}
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <p aria-hidden="true" className="absolute inset-x-0 bottom-0 p-4 font-display text-xl font-bold uppercase text-white">
                {activity.name}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}