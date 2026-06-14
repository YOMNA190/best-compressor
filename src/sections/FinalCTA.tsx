import { Phone, MessageCircle } from 'lucide-react';

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
 * Final CTA Section - Eco-Friendly
 * Design: High-converting call-to-action with green eco styling
 * Features: Prominent contact buttons with green accents
 */
export default function FinalCTA() {
  return (
    <section className="luxury-section bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="luxury-title mb-6">
            هل أنت مستعد للحصول على خدمة صديقة للبيئة؟
          </h2>

          {/* Divider */}
          <div className="luxury-divider mb-8" />

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
            تواصل معنا الآن واحصل على استشارة مجانية وحلول تسليك آمنة وفعالة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="tel:+966501401518"
              onClick={() => gtag_report_conversion('tel:+966501401518')}
              className="flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-2xl hover:shadow-accent/60 active:scale-95 transition-all duration-300 text-lg w-full sm:w-auto justify-center animate-ecoGlow"
            >
              <Phone size={28} />
              <span>اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/966501401518"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-5 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 active:scale-95 transition-all duration-300 text-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle size={28} />
              <span>واتساب مباشر</span>
            </a>
          </div>

          {/* Trust Message */}
          <div className="p-8 bg-card rounded-lg luxury-border">
            <p className="text-foreground/80 text-lg">
              ✓ استجابة فورية <span className="text-accent font-bold">خلال دقائق</span>
              <br />
              ✓ تقنيات تنظيف آمنة وصديقة للبيئة
              <br />
              ✓ فريق متخصص وموثوق بخبرة طويلة
            </p>
          </div>

          {/* Service Areas */}
          <div className="mt-12">
            <p className="text-foreground/70 mb-4">متوفرون في:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold">
                الرياض
              </span>
              <span className="px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold">
                الدمام
              </span>
              <span className="px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold">
                والمناطق المحيطة
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
