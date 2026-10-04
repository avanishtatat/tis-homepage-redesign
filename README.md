# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage, focused on conversion, smooth motion and mobile-first responsiveness. Brand colours, official copy and assets are retained from [tis.edu.in](https://tis.edu.in).

## Live Demo

- **Live URL:** https://tis-homepage-redesign-snowy.vercel.app/
- **Repository:** https://github.com/avanishtatat/tis-homepage-redesign

## Tech Stack

- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Barlow, Barlow Semi Condensed, Playfair Display (self-hosted via Fontsource)
- **Deployment:** Vercel

## Standout Features

1. **Scroll-triggered reveals:** a reusable `Reveal` component and a `Stagger` variants pair use `whileInView` with `once: true`. Only `opacity` and `transform` are animated, with durations of 0.5s. The hero uses CSS keyframes instead, to keep it off the critical rendering path.
2. **Scroll progress bar:** `useScroll` feeds a `useSpring`, and the bar is drawn with `scaleX`. The value is a MotionValue, so scrolling causes no React re-renders.
3. **Animated dark/light theme switcher:** CSS variable tokens switched by a `.dark` class. An inline script in `index.html` applies the saved or system theme before first paint, so there is no flash. The choice persists in `localStorage`.

Also included: animated count-up stats (DOM updated directly, no per-frame re-renders), an accessible tabs component with roving tabindex, a scroll-snap review carousel, and a validated enquiry form.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a skip link
- Visible focus rings, adjusted on brand-red backgrounds
- 44px minimum touch targets
- Form errors linked with `aria-invalid` / `aria-describedby`, focus moved to the first invalid field
- `prefers-reduced-motion` respected (`MotionConfig`, `useReducedMotion`, CSS)
- Separate text tokens in dark mode so red and gold text keep readable contrast

## Getting Started Locally

Requires Node.js 20.19+.

```bash
git clone https://github.com/avanishtatat/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev
```

Open http://localhost:5173.

Other scripts: `npm run build` (production build), `npm run preview` (serve the build), `npm run lint`.

## Project Structure

```
src/
├── components/
│   ├── ui/          # Button, Field, SectionHeading
│   ├── layout/      # TopBar, Navbar, MobileNav, Footer
│   ├── sections/    # Hero, Rankings, Stats, About, Sports, Activities,
│   │                # Personalities, Testimonials, Enquiry, EnquiryForm
│   └── animation/   # Reveal, Stagger, CountUp, ScrollProgress, ThemeToggle
├── hooks/           # useScrolled, useTheme
├── data/            # All page content, kept separate from UI
├── utils/           # validateEnquiry
├── assets/          # Optimised images
└── styles/          # Design tokens and global CSS
```

## Design Decisions and Scope

- **Fonts:** the original uses licensed fonts (PF DIN, Mirador), so open-source look-alikes are used.
- **Enquiry form:** client-side validation with a mock success state. OTP verification is intentionally excluded because it needs a backend; `handleSubmit` is where an API call would be plugged in.
- **Personalities:** shown as initials avatars instead of 28 photos, to keep the page light.
- **Excluded for performance:** parent videos, the embedded map and the long awards and collaborations lists.
- **Theme:** a system theme change is picked up on the next load, not live.
- **Original copy:** retained as-is, including the #2 ranking card, whose heading and category differ on the source site.

## Brand Identity Retained

- Primary red `#b90124` and gold accent `#c09d59`
- Official copy, logo and campus imagery from tis.edu.in

## Performance

Lighthouse (mobile, production build): Performance 99, Accessibility 100, Best Practices 100, SEO 100. The hero text animates with CSS transforms only (never `opacity: 0`), and the hero image is preloaded on desktop, so neither delays Largest Contentful Paint.

## Possible Improvements

- Trim the Framer Motion bundle with `LazyMotion` (Lighthouse flags some unused JS).
- Add a custom cursor (not implemented; the three features above already exceed the brief's minimum of two).