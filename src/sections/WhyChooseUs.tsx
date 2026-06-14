import { Award, Users, Zap, TrendingUp, Phone, MessageCircle } from 'lucide-react';

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
 * Why Choose Us Section - Eco-Friendly
 * Design: Split-screen layout with image and features
 * Features: Premium benefits with green eco accents
 */
export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'خبرة 15+ سنة',
      description: 'فريق متخصص بخبرة عملية طويلة في مجال تسليك المجاري الصديق للبيئة',
    },
    {
      icon: Zap,
      title: 'تقنية متقدمة',
      description: 'استخدام أحدث أجهزة الكمبروسر التي تعمل بضغط الهواء والماء',
    },
    {
      icon: Users,
      title: '+10,000 عميل',
      description: 'آلاف العملاء الراضين عن خدماتنا المتميزة والمستدامة',
    },
    {
      icon: TrendingUp,
      title: 'ضمان كامل',
      description: 'ضمان على جميع الخدمات مع التزام تام بالمعايير البيئية',
    },
  ];

  return (
    <section id="why-us" className="luxury-section bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden luxury-border luxury-glow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594372769/RXekFWzqRZqREtUzHxtuDw/service-technician-work-BiLuwHnGJkg5DqwRjAsV7j.webp"
                alt="فريق متخصص في العمل"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur px-6 py-4 rounded-lg border border-accent/30">
                <p className="text-accent font-bold text-lg">15+ سنة خبرة</p>
                <p className="text-foreground/70 text-sm">في مجال الخدمات البيئية</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="luxury-title mb-6">لماذا تختار Best Compressor؟</h2>
            <div className="luxury-divider mb-8" />

            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              نحن نقدم خدمة تسليك مجاري احترافية بمستوى عالمي مع التزام كامل بالجودة وحماية البيئة
            </p>

            {/* Benefits Grid */}
            <div className="space-y-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground/70">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
              <a
                href="tel:+966501401518"
                onClick={() => gtag_report_conversion('tel:+966501401518')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-lg transition-all w-full sm:w-auto"
              >
                <Phone size={20} />
                <span>اتصل بنا الآن</span>
              </a>
              <a
                href="https://wa.me/966501401518"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span>واتساب مباشر</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
