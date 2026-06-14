import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageSquare, MapPin, Wrench, CheckCircle, ThumbsUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Phone, title: 'اتصل بنا', desc: 'اتصل على الرقم أو راسلنا واتساب على مدار 24 ساعة' },
  { icon: MessageSquare, title: 'وصف المشكلة', desc: 'صف لنا المشكلة وسنحدد الحل المناسب فوراً' },
  { icon: MapPin, title: 'وصول الفني', desc: 'وصول سريع في أقل من 30 دقيقة لجميع أحياء الرياض' },
  { icon: Wrench, title: 'تنفيذ الخدمة', desc: 'تسليك المجاري بالكمبروسر الضغط العالي المتطور' },
  { icon: CheckCircle, title: 'اختبار التصريف', desc: 'اختبار شامل للتأكد من سريان المياه بشكل طبيعي' },
  { icon: ThumbsUp, title: 'تأكيد نجاح العملية', desc: 'ضمان على العمل واستلام توصية للصيانة الدورية' },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hiw-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      const stepEls = sectionRef.current!.querySelectorAll('.hiw-step');
      stepEls.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="howitworks" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="hiw-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            كيف <span className="gradient-text">نعمل</span>
          </h2>
          <p className="text-white/60 text-lg">6 خطوات بسيطة لحل مشكلة المجاري</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute right-6 md:right-1/2 md:translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0055FF] via-[#00E5FF] to-[#0055FF] opacity-30" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`hiw-step relative flex items-center gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card rounded-2xl p-6 hover:border-[#0055FF]/30 transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold gradient-text">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <step.icon size={24} className="text-[#00E5FF] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-[#0055FF] border-4 border-[#0B1A2E] shadow-lg shadow-[#0055FF]/30" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
