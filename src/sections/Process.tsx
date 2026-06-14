import { useEffect, useRef } from 'react';
import { Search, Zap, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    title: 'تقييم المشكلة',
    description: 'نصل إلى موقعك ونقوم بتشخيص دقيق للمشكلة باستخدام كاميرات الفحص المتخصصة',
    image: '/images/process-inspection.jpg',
  },
  {
    icon: Zap,
    title: 'حل سريع',
    description: 'نطبق الحل الأنسب باستخدام أحدث أجهزة التسليك بدون تكسير وبأقل وقت ممكن',
    image: '/images/process-cleaning.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'متابعة وضمان',
    description: 'نضمن عدم عودة المشكلة مع متابعة دورية وضمان شامل على جميع أعمالنا',
    image: '/images/process-maintenance.jpg',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    stepRefs.current.filter(Boolean).forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.15,
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
      id="process"
      className="relative z-10 bg-deep-navy py-24 md:py-32"
    >
      <div className="max-w-[1512px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4">
            عملية تسليك المجاري
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            نتبع خطوات منظمة لضمان أفضل نتيجة بأقل وقت وأعلى جودة
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gold/30 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="relative"
                >
                  {/* Image container */}
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 group">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent" />
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-deep-navy font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-clean-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-clean-blue" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
