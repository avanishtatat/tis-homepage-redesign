import { rankings } from "../../data/rankings";
import { Stagger, StaggerItem } from "../animation/Stagger";

export default function Rankings() {
  return (
    <section aria-label="School rankings" className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {rankings.map((item) => (
            <StaggerItem
              key={`${item.rank}-${item.scope}`}
              className="rounded-2xl border border-line bg-surface-alt p-6 text-center"
            >
              <p className="font-display font-extrabold text-brand-text">
                <span className="align-top text-2xl">#</span>
                <span className="text-6xl">{item.rank}</span>
              </p>
              <p className="mt-2 font-display text-lg font-bold uppercase tracking-wide">
                In {item.scope}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{item.category}</p>
              <p className="mt-1 text-sm font-medium text-ink-muted">
                by {item.source}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
