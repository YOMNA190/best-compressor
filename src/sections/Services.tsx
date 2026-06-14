import { useEffect, useRef } from 'react';
import { Home, Bath, CookingPot, Wrench, Droplets, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Home,
    title: 'تسليك مجاري المنازل',
    description:
      'حلول متكاملة لتسليك مجاري المنازل بأحدث المعدات وبدون تكسير. نصلك أينما كنت في الرياض.',
    image: '/images/service-home-drain.jpg',
  },
  {
    icon: Bath,
    title: 'تسليك الحمامات',
    description:
      'تسليك حوض الاستحمام والبانيو والحمامات باحترافية عالية باستخدام أدوات متخصصة.',
    image: '/images/service-bathroom.jpg',
  },
  {
    icon: CookingPot,
    title: 'تسليك المطابخ',
    description:
      'إزالة الانسدادات في مجاري المطابخ والأحواض بسرعة فائقة مع ضمان عدم عودة المشكلة.',
    image: '/images/service-kitchen.jpg',
  },
  {
    icon: Wrench,
    title: 'تسليك بالكمبروسر',
    description:
      'نستخدم أجهزة الكمبرسور المتطورة لفتح الانسدادات الصعبة دون الحاجة للتكسير.',
    image: '/images/process-cleaning.jpg',
  },
  {
    icon: Droplets,
    title: 'فتح الانسدادات الرئيسية',
    description:
      'معالجة الانسدادات الرئيسية في خطوط الصرف الصحي الكبيرة بأحدث التقنيات.',
    image: '/images/process-inspection.jpg',
  },
  {
    icon: Clock,
    title: 'خدمة طوارئ 24 ساعة',
    description:
      'خدمة طوارئ على مدار الساعة طوال أيام الأسبوع. نصلك في أقل من 30 دقيقة.',
    image: '/images/process-maintenance.jpg',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || cards.length === 0) return;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
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
      id="services"
      className="relative z-10 bg-soft-gray py-24 md:py-32"
    >
      <div className="max-w-[1512px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-deep-navy tracking-tight mb-4">
            خدماتنا
          </h2>
          <p className="text-lg text-muted-navy max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات تسليك المجاري بأحدث التقنيات وأفضل
            الفنيين المتخصصين في الرياض
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="group bg-white rounded-3xl overflow-hidden shadow-card-subtle hover:shadow-card transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-clean-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-clean-blue/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-clean-blue" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-deep-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-navy text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
