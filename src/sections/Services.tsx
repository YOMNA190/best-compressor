import { Zap, ShieldCheck, Clock, Droplets } from 'lucide-react';

/**
 * Services Section - Eco-Friendly
 * Design: Grid layout for service offerings with green eco styling
 * Features: Service cards with green accents and icons
 */
export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'تسليك سريع بالكمبروسر',
      description: 'حلول فورية لانسدادات المجاري باستخدام أحدث أجهزة الكمبروسر التي تعمل بضغط الهواء والماء.',
      features: ['استجابة سريعة', 'بدون تكسير', 'تنظيف شامل للأنابيب'],
    },
    {
      icon: ShieldCheck,
      title: 'صيانة وقائية بيئية',
      description: 'برامج صيانة دورية تضمن سلامة شبكة الصرف وحمايتها من الانسدادات المستقبلية بطرق مستدامة.',
      features: ['فحص بالكاميرا', 'تنظيف دوري آمن', 'تقارير فنية'],
    },
    {
      icon: Droplets,
      title: 'تنظيف أنابيب آمن',
      description: 'نستخدم تقنيات ميكانيكية متطورة لتنظيف الأنابيب من الداخل دون الحاجة لمواد كيميائية حارقة.',
      features: ['إزالة الدهون والترسبات', 'آمن على المواسير', 'صديق للبيئة'],
    },
    {
      icon: Clock,
      title: 'طوارئ على مدار الساعة',
      description: 'فريقنا متاح 24/7 للتعامل مع حالات الطوارئ المفاجئة في الرياض والدمام بأقصى سرعة.',
      features: ['متاح 24/7', 'تغطية شاملة', 'وصول سريع'],
    },
  ];

  return (
    <section id="services" className="luxury-section bg-card/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="luxury-title mb-6">خدماتنا البيئية المتميزة</h2>
          <div className="luxury-divider mx-auto w-24 mb-8" />
          <p className="luxury-subtitle max-w-2xl mx-auto">
            نقدم حلولاً متكاملة لتسليك المجاري وصيانة شبكات الصرف الصحي باستخدام أحدث التقنيات الآمنة على منزلك والبيئة.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="luxury-card group hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <Icon size={32} className="text-accent group-hover:text-inherit" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
