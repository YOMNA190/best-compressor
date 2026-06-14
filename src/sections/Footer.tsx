import { Phone, Mail, MapPin } from 'lucide-react';

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
 * Footer Component - Luxury Minimalist
 * Design: Clean footer with contact info and links
 * Features: Professional layout with gold accents
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
                <p className="text-xs text-foreground/60">خدمة تسليك مجاري فاخرة</p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              خدمة تسليك مجاري احترافية بأحدث التقنيات مع ضمان كامل على العمل.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">الخدمات</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  تسليك سريع
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  صيانة دورية
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  حماية دائمة
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  خدمة 24 ساعة
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
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-foreground/70 hover:text-accent transition-colors">
                  آراء العملاء
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-accent transition-colors">
                  الأسئلة الشائعة
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
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+966501401518"
                  onClick={() => gtag_report_conversion('tel:+966501401518')}
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  +966 50 140 1518
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@bestcompressor.sa"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  info@bestcompressor.sa
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
            جميع الحقوق محفوظة © {currentYear} Best Compressor. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a
              href="https://wa.me/966501401518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.144-1.831 1.832-2.911 4.265-2.911 6.883 0 1.141.188 2.261.537 3.33l.036.15-.383 1.4 1.435-.364.157.05a9.382 9.382 0 004.968 1.348h.004c5.049 0 9.14-4.095 9.14-9.144 0-2.433-.944-4.717-2.662-6.435-1.719-1.719-4.003-2.666-6.435-2.666" />
              </svg>
            </a>
            <a
              href="tel:+966501401518"
              onClick={() => gtag_report_conversion('tel:+966501401518')}
              className="text-foreground/60 hover:text-accent transition-colors"
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
