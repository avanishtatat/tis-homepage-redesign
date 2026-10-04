import { MotionConfig } from "framer-motion";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Rankings from "./components/sections/Rankings";
import Stats from "./components/sections/Stats";
import ScrollProgress from "./components/animation/ScrollProgress";
import About from "./components/sections/About";
import Sports from "./components/sections/Sports";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
      >
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Rankings />
        <Stats />
        <About />
        <Sports />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
