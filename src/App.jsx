import { MotionConfig } from 'framer-motion'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
      >
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main" className="min-h-[120vh] p-8">
        <h1 className="font-display text-5xl font-extrabold uppercase text-ink">
          Made for the <span className="font-accent italic text-brand-text">future</span>
        </h1>
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App