import { Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Google Ads Conversion Tracking for Phone Calls
function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18237596537/ehTyCJnpzL4cEPnGrvhD',
      'value': 1.0,
      'currency': 'EGP',
      'event_callback': callback
    });
  }
  return false;
}

/**
 * Hero Section - Eco-Friendly
 * Design: Cinematic background image with bold green typography overlay
 * Features: Eco CTAs with green accents, trust indicators
 */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trustItems = [
    { icon: '✓', label: '+10,000 عميل راضي' },
    { icon: '✓', label: 'خدمة 24 ساعة' },
    { icon: '✓', label: 'ضمان على العمل' },
    { icon: '✓', label: 'خبرة 15+ سنة' },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663594372769/RXekFWzqRZqREtUzHxtuDw/hero-compressor-industrial-eAkCszTww7RtDaBFMHRkiY.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-accent font-semibold text-sm">خدمة طوارئ متاحة الآن</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          تسليك مجاري
          <br />
          <span className="luxury-text-gradient">بحلول صديقة للبيئة</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          نستخدم أحدث تقنيات الكمبروسر المتطورة لتنظيف الأنابيب بكفاءة عالية
          <br className="hidden md:block" />
          خدمة محترفة في الرياض والدمام مع التزام كامل بالمعايير البيئية
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:+966501401518"
            onClick={() => gtag_report_conversion('tel:+966501401518')}
            className="flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-xl hover:shadow-accent/50 active:scale-95 transition-all duration-300 text-lg w-full sm:w-auto justify-center"
          >
            <Phone size={24} />
            <span>اتصل الآن</span>
          </a>
          <a
            href="https://wa.me/966501401518"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 active:scale-95 transition-all duration-300 text-lg w-full sm:w-auto justify-center"
          >
            <MessageCircle size={24} />
            <span>واتساب مباشر</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-background/50 border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
