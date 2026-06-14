import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.finalcta-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF] via-[#0044CC] to-[#0B1A2E]" />
      
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="finalcta-content">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <Clock size={16} className="text-[#00E5FF]" />
            <span className="text-white text-sm font-semibold">متاحون الآن - 24 ساعة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            هل تحتاج خدمة تسليك مجاري
            <br />
            <span className="text-[#00E5FF]">بالكمبروسر الآن؟</span>
          </h2>

          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            فريقنا جاهز لخدمتك 24 ساعة في جميع أنحاء الرياض. وصول سريع، خدمة احترافية، ضمان على العمل.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+966501401518"
              className="flex items-center gap-3 bg-white text-[#0055FF] hover:bg-white/90 font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg hover:scale-105 shadow-xl"
            >
              <Phone size={24} />
              <span>اتصل فوراً</span>
            </a>
            <a
              href="https://wa.me/966501401518"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg hover:scale-105 shadow-xl"
            >
              <MessageCircle size={24} />
              <span>راسلنا واتساب</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#00E5FF]" />
              <span>جميع أحياء الرياض</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#00E5FF]" />
              <span dir="ltr">+966 50 140 1518</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#00E5FF]" />
              <span>24/7 خدمة مستمرة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
