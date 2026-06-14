import { useRef, useEffect, useState } from 'react';
import { Phone, MessageCircle, Star, Shield, Clock, Award } from 'lucide-react';
import FluidTunnel from '../components/FluidTunnel';
import gsap from 'gsap';

interface HeroProps {
  scrollSpeed: number;
}

export default function Hero({ scrollSpeed }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 }
      );
      gsap.fromTo(
        '.hero-trust',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );
    }, contentRef);
    return () => ctx.revert();
  }, []);

  const trustItems = [
    { icon: Star, label: 'تقييمات ممتازة' },
    { icon: Award, label: 'أكثر من 15 سنة خبرة' },
    { icon: Shield, label: 'ضمان على الخدمة' },
    { icon: Clock, label: 'خدمة طوارئ 24 ساعة' },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* WebGL Background */}
      <FluidTunnel scrollSpeed={scrollSpeed} />

      {/* Content Overlay */}
      <div
        ref={contentRef}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Badge */}
        <div className="hero-subtitle inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC143C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DC143C]"></span>
          </span>
          <span className="text-[#00E5FF] text-sm font-semibold">خدمة طوارئ 24 ساعة في الرياض</span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-hero leading-tight">
          تسليك مجاري الرياض
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0055FF] via-[#00E5FF] to-[#0055FF]">
            بالكمبروسر
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          وصول سريع · خدمة 24 ساعة · ضمان على العمل · خبرة أكثر من 15 سنة
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="tel:+966501401518"
            className="flex items-center gap-3 bg-[#0055FF] hover:bg-[#0044CC] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg glow-blue-strong hover:scale-105"
          >
            <Phone size={22} />
            <span>اتصل الآن</span>
          </a>
          <a
            href="https://wa.me/966501401518"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>واتساب</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="hero-trust grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 glass-card rounded-xl px-4 py-3"
            >
              <item.icon size={18} className="text-[#00E5FF] flex-shrink-0" />
              <span className="text-white/90 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1A2E] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
