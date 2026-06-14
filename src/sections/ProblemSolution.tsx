import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Droplets, RotateCcw, Wind } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: AlertTriangle,
    title: 'انسداد المجاري',
    description: 'تراكم الدهون والرواسب يسبب انسداداً تاماً في مواسير الصرف',
    solution: 'الكمبروسر يفكك الانسداد بضغط ماء عالي يصل إلى 400 بار',
  },
  {
    icon: Droplets,
    title: 'بطء التصريف',
    description: 'تدفق الماء البطيء يشير إلى تراكم جزئي في المواسير',
    solution: 'تنظيف شامل يعيد التصريف إلى سرعته الطبيعية',
  },
  {
    icon: RotateCcw,
    title: 'رجوع المياه',
    description: 'ارتداد المياه القذرة يدل على انسداد خطير في المجاري',
    solution: 'إزالة الانسداد الكامل وضمان تدفق سليم',
  },
  {
    icon: Wind,
    title: 'الروائح الكريهة',
    description: 'روائح العفن والتراكمات تنتشر في المنزل أو المنشأة',
    solution: 'تنظيف عميق يزيل مصدر الرائحة نهائياً',
  },
];

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const cards = sectionRef.current!.querySelectorAll('.problem-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.15,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="problems" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            المشاكل <span className="gradient-text">والحلول</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نواجه جميع مشاكل المجاري بحلول تقنية متطورة بالكمبروسر الضغط العالي
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="problem-card group glass-card rounded-3xl p-6 sm:p-8 hover:border-[#0055FF]/30 transition-all duration-500 cursor-default"
              style={{ perspective: '1000px' }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DC143C]/20 to-[#DC143C]/5 flex items-center justify-center border border-[#DC143C]/20 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={26} className="text-[#DC143C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#0055FF]/10 to-[#00E5FF]/5 border border-[#0055FF]/20">
                    <div className="w-8 h-8 rounded-lg bg-[#0055FF]/20 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[#00E5FF] text-sm font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
