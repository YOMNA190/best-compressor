import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'كم يستغرق الوصول؟',
    answer:
      'نصل إليك خلال 30 دقيقة فقط في جميع أحياء الرياض، حيث نمتلك فريقاً متوزعاً في مختلف أنحاء المدينة للاستجابة السريعة.',
  },
  {
    question: 'هل يتم التسليك بدون تكسير؟',
    answer:
      'نعم، نستخدم أحدث أجهزة التسليك بدون تكسير مثل الكمبرسور وكاميرات الفحص التي تتيح لنا تحديد مكان الانسداد بدقة وحله دون الحاجة لتكسير الجدران أو الأرضيات.',
  },
  {
    question: 'هل الخدمة متوفرة 24 ساعة؟',
    answer:
      'نعم، نعمل على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك الإجازات والعطل الرسمية.',
  },
  {
    question: 'هل تعملون في جميع أحياء الرياض؟',
    answer:
      'نعم، نغطي جميع أحياء الرياض شمالاً وجنوباً وشرقاً وغرباً ووسط المدينة.',
  },
  {
    question: 'ما هي تكلفة الخدمة؟',
    answer:
      'تبدأ أسعارنا من 150 ريال سعودي، وتختلف التكلفة حسب نوع وحجم المشكلة. نقدم عرضاً مجانياً بعد الفحص.',
  },
  {
    question: 'هل تقدمون ضمان على الخدمة؟',
    answer:
      'نعم، نقدم ضماناً يصل إلى 6 أشهر على جميع أعمال التسليك. إذا عادت المشكلة خلال فترة الضمان، نقوم بالإصلاح مجاناً.',
  },
  {
    question: 'ما هي طرق الدفع المتاحة؟',
    answer:
      'نقبل الدفع نقداً وبطاقات مدى والتحويل البنكي. كما نقدم فواتير رسمية لجميع عملائنا.',
  },
  {
    question: 'كيف يمكنني الحجز؟',
    answer:
      'يمكنك الحجز عن طريق الاتصال المباشر على الرقم الموحد، أو عبر الواتساب، أو ملء نموذج الطلب على الموقع.',
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-right group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-white group-hover:text-gold transition-colors duration-300">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 mr-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/60 pb-5 leading-relaxed pr-0">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current;
    if (!section || !items) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
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
      id="faq"
      className="relative z-10 bg-deep-navy py-24 md:py-32"
    >
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-white/60">
            إليك إجابات على أكثر الأسئلة شيوعاً
          </p>
        </div>

        <div ref={itemsRef}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
