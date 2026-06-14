import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroVideoBackground from './components/HeroVideoBackground';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import WhyChooseUs from './sections/WhyChooseUs';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  return (
    <div dir="rtl" className="relative">
      {/* Video Background */}
      <HeroVideoBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
