import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'أحمد العتيبي',
    area: 'الملقا',
    rating: 5,
    text: 'خدمة ممتازة وسرعة في الاستجابة. جاء الفني في أقل من 20 دقيقة وحل المشكلة باحترافية. أنصح الجميع بالتعامل معهم.',
  },
  {
    name: 'خالد السبيعي',
    area: 'العليا',
    rating: 5,
    text: 'تعاملت مع كمبروسر الرياض أكثر من مرة وكل مرة يثبتون كفاءتهم. أسعار مناسبة وخدمة احترافية حقاً.',
  },
  {
    name: 'فهد الدوسري',
    area: 'الصحافة',
    rating: 5,
    text: 'مشكلة انسداد المجاري كانت مزعجة جداً لكن الفني حلها في دقائق معدودة. شكراً للفريق الرائع.',
  },
  {
    name: 'سعد القحطاني',
    area: 'النرجس',
    rating: 5,
    text: 'أفضل خدمة تسليك مجاري في الرياض. أجهزتهم حديثة والفنيين محترفين. خدمة 24 ساعة فعلاً.',
  },
  {
    name: 'محمد الشمري',
    area: 'الياسمين',
    rating: 5,
    text: 'سرعة ودقة في العمل. الفني وضح لي سبب الانسداد وكيف أتجنبه مستقبلاً. تجربة رائعة أنصح بها.',
  },
  {
    name: 'عبدالله المالكي',
    area: 'قرطبة',
    rating: 5,
    text: 'كنت أعاني من رجوع المياه باستمرار. بعد التسليك بالكمبروسر المشكلة اختفت تماماً. شكراً جزيلاً.',
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reviews-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.reviews-carousel',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.reviews-carousel', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % Math.max(1, reviews.length - itemsPerPage + 1));
  const prev = () => setCurrent((prev) => (prev - 1 + Math.max(1, reviews.length - itemsPerPage + 1)) % Math.max(1, reviews.length - itemsPerPage + 1));

  const visibleReviews = reviews.slice(current, current + itemsPerPage);

  return (
    <section ref={sectionRef} id="reviews" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="reviews-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            آراء <span className="gradient-text">عملائنا</span>
          </h2>
          <p className="text-white/60 text-lg">ما يقوله عملاؤنا عن خدماتنا</p>
        </div>

        <div className="reviews-carousel relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review, idx) => (
              <div
                key={current + idx}
                className="glass-card rounded-3xl p-8 hover:border-[#0055FF]/20 transition-all duration-500 group"
              >
                <Quote size={32} className="text-[#0055FF]/30 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">{review.area}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0055FF]/20 to-[#00E5FF]/10 flex items-center justify-center">
                    <span className="text-[#0055FF] font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#0055FF]/20 transition-all duration-300"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(1, reviews.length - itemsPerPage + 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#0055FF] w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#0055FF]/20 transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
