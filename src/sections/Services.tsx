import { Zap, Wrench, Shield, Clock } from 'lucide-react';

/**
 * Services Section - Luxury Minimalist
 * Design: Bento-box layout with hover effects and gold accents
 * Features: Service cards with icons and descriptions
 */
export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'تسليك سريع',
      description: 'تسليك فوري بأحدث تقنيات الكمبروسر المتطور والآمن على الأنابيب',
      features: ['وصول سريع', 'نتائج فورية', 'آمن 100%'],
    },
    {
      icon: Wrench,
      title: 'صيانة احترافية',
      description: 'فحص شامل وصيانة دورية للأنابيب والمجاري بدقة هندسية عالية',
      features: ['فحص مجاني', 'تقرير مفصل', 'ضمان العمل'],
    },
    {
      icon: Shield,
      title: 'حماية دائمة',
      description: 'حلول وقائية متقدمة لحماية أنابيبك من الانسدادات المستقبلية',
      features: ['معالجة كيميائية', 'حماية طويلة', 'استشارة مجانية'],
    },
    {
      icon: Clock,
      title: 'خدمة 24 ساعة',
      description: 'فريق احترافي متاح في أي وقت لحل مشاكلك الطارئة والحرجة',
      features: ['رد سريع', 'عمل ليلي', 'في أي وقت'],
    },
  ];

  return (
    <section id="services" className="luxury-section bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="luxury-title mb-4">خدماتنا المتميزة</h2>
          <div className="luxury-divider mb-6" />
          <p className="luxury-subtitle">
            نقدم حلولاً احترافية وشاملة لجميع احتياجات تسليك المجاري
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="luxury-card group hover-lift cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon size={32} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-6 border-t border-accent/20">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
