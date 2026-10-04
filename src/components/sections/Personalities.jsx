import { useRef, useState } from 'react'
import { personalities, personalitiesIntro } from '../../data/personalities'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { Stagger, StaggerItem } from '../animation/Stagger'

const SKIP_WORDS = new Set(['Shri', 'Dr', 'Ji', 'Late', 'Ms', '&'])

function getInitials(name) {
  return name
    .split(' ')
    .filter((word) => !SKIP_WORDS.has(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

export default function Personalities() {
  const [activeId, setActiveId] = useState(personalities[0].id)
  const tabRefs = useRef({})
  const activeGroup = personalities.find((group) => group.id === activeId)

  const handleKeyDown = (event) => {
    const ids = personalities.map((group) => group.id)
    const current = ids.indexOf(activeId)
    let next

    if (event.key === 'ArrowRight') next = (current + 1) % ids.length
    else if (event.key === 'ArrowLeft') next = (current - 1 + ids.length) % ids.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = ids.length - 1
    else return

    event.preventDefault()
    setActiveId(ids[next])
    tabRefs.current[ids[next]]?.focus()
  }

  return (
    <section aria-labelledby="people-heading" className="bg-surface-alt py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="people-heading"
            title={personalitiesIntro.title}
            accent={personalitiesIntro.accent}
          />
        </Reveal>

        <div
          role="tablist"
          aria-label="Personality categories"
          onKeyDown={handleKeyDown}
          className="mt-8 flex flex-wrap gap-2"
        >
          {personalities.map((group) => {
            const selected = group.id === activeId
            return (
              <button
                key={group.id}
                ref={(node) => {
                  tabRefs.current[group.id] = node
                }}
                type="button"
                role="tab"
                id={`tab-${group.id}`}
                aria-selected={selected}
                aria-controls={`panel-${group.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(group.id)}
                className={`min-h-11 rounded-full border-2 px-5 font-display text-base font-bold uppercase tracking-wide transition-colors ${
                  selected
                    ? 'border-brand bg-brand text-on-brand'
                    : 'border-ink-muted/70 text-ink hover:bg-surface'
                }`}
              >
                {group.label}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeGroup.id}`}
          aria-labelledby={`tab-${activeGroup.id}`}
          tabIndex={0}
          className="mt-8"
        >
          <Stagger
            key={activeGroup.id}
            stagger={0.04}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeGroup.people.map((person) => (
              <StaggerItem
                key={person.name}
                className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-on-brand"
                >
                  {getInitials(person.name)}
                </span>
                <div>
                  <p className="font-display text-lg font-bold uppercase leading-tight">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{person.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}