import { hero } from "../../data/hero";
import { contact } from "../../data/contact";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-brand text-on-brand"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="hero-rise">
            <p className="font-display text-sm font-bold uppercase tracking-widest sm:text-base">
              {hero.eyebrow}
            </p>
          </div>

          <div className="hero-rise" style={{ animationDelay: "0.1s" }}>
            <h1
              id="hero-heading"
              className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
            >
              {hero.headingStart}{" "}
              <span className="relative inline-block font-accent normal-case italic">
                {hero.headingAccent}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 88 10"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-accent"
                >
                  <path
                    d="M1.112 1.683c22.786-2.73 35.31 2.575 61.669.538 5.588-.432 45.211-.681 52.8-.809"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <div className="hero-rise" style={{ animationDelay: '0.2s' }}>
            <p className="mt-8 max-w-xl text-lg font-light sm:text-xl">
              {hero.description}
            </p>
          </div>

          <div className="hero-rise" style={{ animationDelay: '0.3s' }}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={contact.applyUrl}
                external
                variant="light"
                size="lg"
              >
                Apply Now
              </Button>
              <Button
                href={contact.virtualTourUrl}
                external
                variant="outlineLight"
                size="lg"
              >
                Take a Virtual Tour
              </Button>
            </div>
          </div>

          <div className="hero-rise" style={{ animationDelay: '0.4s' }}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {hero.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/40 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-rise relative isolate">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border-2 border-accent"
          />
          <img
            src="/campus-hero.webp"
            alt={hero.imageAlt}
            width="1000"
            height="563"
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
