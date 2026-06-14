import { useEffect, useRef } from 'react';
import { Clock, MapPin, Award, Smartphone, Shield, DollarSign, Users, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Clock,
    title: 'خدمة 24 ساعة',
    description: 'نعمل طوال اليوم وطوال أيام الأسبوع بما في ذلك الإجازات',
  },
  {
    icon: Truck,
    title: 'وصول سريع',
    description: 'نصل إليك في أقل من 30 دقيقة في جميع أنحاء الرياض',
  },
  {
    icon: Shield,
    title: 'بدون تكسير',
    description: 'نستخدم أحدث التقنيات لحل المشكلة دون إحداث أي ضرر',
  },
  {
    icon: Users,
    title: 'فنيون متخصصون',
    description: 'فريق من أفضل الفنيين المدربين على أحدث الأجهزة',
  },
  {
    icon: Smartphone,
    title: 'أجهزة حديثة',
    description: 'نستخدم أحدث أجهزة الكمبرسور والكاميرات التشخيصية',
  },
  {
    icon: DollarSign,
    title: 'أسعار مناسبة',
    description: 'أسعار تنافسية مع ضمان أفضل قيمة مقابل السعر',
  },
  {
    icon: MapPin,
    title: 'جميع أحياء الرياض',
    description: 'نغطي شمال وجنوب وشرق وغرب ووسط الرياض',
  },
  {
    icon: Award,
    title: 'ضمان الخدمة',
    description: 'نقدم ضمان شامل على جميع أعمالنا لراحة بالك',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    gsap.fromTo(
      header,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateX: 30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.08,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger && (section?.contains(st.vars.trigger as Element) || st.vars.trigger === section)) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative z-10 bg-soft-gray py-24 md:py-32"
    >
      <div className="max-w-[1512px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Header */}
          <div ref={headerRef} className="lg:sticky lg:top-32">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-deep-navy tracking-tight mb-6">
              لماذا تختار
              <br />
              <span className="text-clean-blue">مؤسسة المهندس؟</span>
            </h2>
            <p className="text-lg text-muted-navy leading-relaxed mb-8">
              نحن نفهم مدى إزعاج مشاكل المجاري، لذلك نقدم خدمة سريعة وفعالة
              بأحدث التقنيات. فريقنا من الفنيين المتخصصين جاهز على مدار الساعة
              لحل جميع مشاكل الصرف الصحي في منزلك أو مؤسستك.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+966501401518"
                onClick={() => (window as any).gtag_report_conversion?.('tel:+966501401518')}
                className="inline-flex items-center gap-2 bg-clean-blue text-white px-6 py-3 rounded-pill font-medium hover:bg-clean-blue/90 transition-all duration-300 hover:scale-[0.98] active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب خدمة الآن</span>
              </a>
            </div>
          </div>

          {/* Right column - Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="group bg-white rounded-2xl p-5 shadow-card-subtle hover:shadow-card transition-all duration-500 hover:-translate-y-1"
                  style={{ perspective: '1000px' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-clean-blue/10 flex items-center justify-center mb-3 group-hover:bg-clean-blue/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-clean-blue" />
                  </div>
                  <h3 className="font-display text-base font-medium text-deep-navy mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-navy text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
