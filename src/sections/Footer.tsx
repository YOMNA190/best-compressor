import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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
 * Footer Component - Eco-Friendly
 * Design: Clean footer with contact info and links
 * Features: Professional layout with green eco accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-accent/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-6 h-6 text-background"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="50" cy="50" r="35" />
                  <path d="M 30 50 Q 50 35 70 50" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Best Compressor</h3>
                <p className="text-xs text-foreground/60">خدمة تسليك مجاري صديقة للبيئة</p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              حلول تسليك مجاري احترافية ومستدامة بأحدث التقنيات مع ضمان كامل على الجودة.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">الخدمات</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  تسليك سريع بالكمبروسر
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  صيانة وقائية دورية
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  تنظيف أنابيب آمن
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  طوارئ 24 ساعة
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">الشركة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="text-foreground/70 hover:text-accent transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-foreground/70 hover:text-accent transition-colors">
                  آراء عملائنا
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-accent transition-colors">
                  الأسئلة المتكررة
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل مباشر</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+966501401518"
                  onClick={() => gtag_report_conversion('tel:+966501401518')}
                  className="text-foreground/70 hover:text-accent transition-colors font-medium"
                >
                  +966 50 140 1518
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/966501401518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors font-medium"
                >
                  واتساب مباشر
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  الرياض والدمام
                  <br />
                  المملكة العربية السعودية
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="luxury-divider mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Best Compressor. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a
              href="https://wa.me/966501401518"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="tel:+966501401518"
              onClick={() => gtag_report_conversion('tel:+966501401518')}
              className="p-2 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
