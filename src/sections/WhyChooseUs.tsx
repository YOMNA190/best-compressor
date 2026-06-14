import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Clock, MapPin, Shield, Phone, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Zap, title: 'أجهزة كمبروسر حديثة', desc: 'أحدث تقنيات ضغط الماء العالي تصل إلى 400 بار' },
  { icon: Clock, title: 'خدمة 24 ساعة', desc: 'متاحون على مدار الساعة طوال أيام الأسبوع' },
  { icon: MapPin, title: 'تغطية واسعة', desc: 'نغطي جميع أحياء الرياض شمالاً وجنوباً وشرقاً وغرباً' },
  { icon: Shield, title: 'ضمان على الخدمة', desc: 'ضمان شامل على جميع أعمال التسليك والتنظيف' },
  { icon: Phone, title: 'تواصل مباشر وسريع', desc: 'رد فوري على المكالمات والرسائل بدون تأخير' },
  { icon: Rocket, title: 'استجابة فورية للطوارئ', desc: 'وصول الطوارئ في أقل من 30 دقيقة' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wcu-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.wcu-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.wcu-grid', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="whyus" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="wcu-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            لماذا <span className="gradient-text">تختارنا</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نتميز بأحدث المعدات وأفضل الفنيين المتخصصين في تسليك المجاري
          </p>
        </div>

        <div className="wcu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="wcu-card group glass-card rounded-3xl p-8 hover:border-[#0055FF]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0055FF]/20 to-[#00E5FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#0055FF]/20">
                <feature.icon size={28} className="text-[#0055FF] group-hover:text-[#00E5FF] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
