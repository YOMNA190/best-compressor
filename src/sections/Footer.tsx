import { useEffect, useRef } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceAreas = [
  'شمال الرياض',
  'جنوب الرياض',
  'شرق الرياض',
  'غرب الرياض',
  'وسط الرياض',
  'حي النرجس',
  'حي الياسمين',
  'حي الملقا',
  'حي الورود',
  'حي الشفا',
];

const quickLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'أعمالنا', href: '#gallery' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'اتصل بنا', href: '#contact' },
];

export default function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cta = ctaRef.current;
    if (!cta) return;

    gsap.fromTo(
      cta,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cta,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger && (cta?.contains(st.vars.trigger as Element) || st.vars.trigger === cta)) {
          st.kill();
        }
      });
    };
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative z-10 bg-deep-navy">
      {/* Final CTA Section */}
      <div
        ref={ctaRef}
        className="py-24 md:py-32 border-b border-white/10"
      >
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6">
            هل تعاني من انسداد المجاري؟
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto">
            تواصل معنا الآن وسيصل إليك أقرب فني بأسرع وقت. خدمة 24 ساعة في
            جميع أحياء الرياض.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+966501401518"
              onClick={() => (window as any).gtag_report_conversion?.('tel:+966501401518')}
              className="inline-flex items-center gap-3 bg-clean-blue text-white px-10 py-5 rounded-pill text-xl font-medium hover:bg-clean-blue/90 transition-all duration-300 hover:scale-[0.98] active:scale-95 shadow-card"
            >
              <Phone className="w-6 h-6" />
              <span>اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/966501401518"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-deep-navy px-10 py-5 rounded-pill text-xl font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-[0.98] active:scale-95 shadow-card"
            >
              <MessageCircle className="w-6 h-6" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-16">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12">
          {/* Large brand name */}
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-white/10 tracking-tight mb-16 text-center">
            مؤسسة المهندس لتسليك المجاري
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div>
              <h4 className="font-display text-lg font-medium text-white mb-4">
                مؤسسة المهندس
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                نقدم خدمات احترافية في تسليك المجاري والصرف الصحي في الرياض
                بأحدث المعدات وأفضل الفنيين المتخصصين.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+966501401518"
                  onClick={() => (window as any).gtag_report_conversion?.('tel:+966501401518')}
                  className="w-10 h-10 rounded-full bg-clean-blue/20 flex items-center justify-center hover:bg-clean-blue/40 transition-colors duration-300"
                  aria-label="اتصل بنا"
                >
                  <Phone className="w-4 h-4 text-clean-blue" />
                </a>
                <a
                  href="https://wa.me/966501401518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors duration-300"
                  aria-label="واتساب"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-display text-lg font-medium text-white mb-4">
                روابط سريعة
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service areas */}
            <div>
              <h4 className="font-display text-lg font-medium text-white mb-4">
                مناطق الخدمة
              </h4>
              <ul className="space-y-2">
                {serviceAreas.map((area) => (
                  <li key={area} className="text-white/60 text-sm">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-display text-lg font-medium text-white mb-4">
                تواصل معنا
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-clean-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm">050-964-1986</p>
                    <p className="text-white/40 text-xs">اتصل الآن</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm">واتساب</p>
                    <p className="text-white/40 text-xs">راسلنا مباشرة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-clean-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm">الرياض، المملكة العربية السعودية</p>
                    <p className="text-white/40 text-xs">جميع الأحياء</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm">24 ساعة / 7 أيام</p>
                    <p className="text-white/40 text-xs">خدمة طوارئ على مدار الساعة</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 مؤسسة المهندس لتسليك المجاري بالرياض. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-white/40" />
              <span className="text-white/40 text-sm">info@almohandis-sewage.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/966501401518"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </footer>
  );
}
