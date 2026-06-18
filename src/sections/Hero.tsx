import { useEffect, useRef } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { trackPrimaryCTA, trackSecondaryCTA } from '../lib/gtag';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    if (!section || !title || !subtitle || !buttons) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
      },
    });

    tl.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      },
      0
    );

    tl.fromTo(
      subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, ease: 'power2.out' },
      0.3
    );

    tl.fromTo(
      buttons,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, ease: 'power2.out' },
      0.5
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center z-10"
    >
      <div className="max-w-[1512px] mx-auto px-6 md:px-12 w-full pt-24">
        <div className="max-w-3xl">
          <h1
            ref={titleRef}
            className="font-display text-5xl md:text-7xl lg:text-[84px] font-medium text-white leading-tight md:leading-[90px] tracking-tight mb-6"
          >
            تسليك مجاري بالرياض 24 ساعة
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-2xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl"
          >
            وصول سريع، بدون تكسير، وأحدث أجهزة تسليك المجاري والكمبروسر لخدمة
            جميع أحياء الرياض.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <a
              href="tel:+966501401518"
              onClick={() => trackPrimaryCTA()}
              className="inline-flex items-center gap-3 bg-white text-deep-navy px-8 py-4 rounded-pill text-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-[0.98] active:scale-95 shadow-card"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/966501401518"
              onClick={() => trackSecondaryCTA()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-deep-navy px-8 py-4 rounded-pill text-lg font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-[0.98] active:scale-95 shadow-card"
            >
              <MessageCircle className="w-5 h-5" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
