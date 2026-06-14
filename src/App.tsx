import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import FloatingCTAs from './components/FloatingCTAs';
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import BeforeAfter from './sections/BeforeAfter';
import ServiceVideo from './sections/ServiceVideo';
import PhotoGallery from './sections/PhotoGallery';
import HowItWorks from './sections/HowItWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import ServiceAreas from './sections/ServiceAreas';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', (e: { velocity: number }) => {
      setScrollSpeed(e.velocity * 0.001);
      ScrollTrigger.update();
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-[#0B1A2E] min-h-screen" dir="rtl">
      <Header />
      <FloatingCTAs />

      <main>
        <Hero scrollSpeed={scrollSpeed} />
        <ProblemSolution />
        <BeforeAfter />
        <ServiceVideo />
        <PhotoGallery />
        <HowItWorks />
        <WhyChooseUs />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
