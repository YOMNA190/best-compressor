import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'ما هي خدمة تسليك المجاري بالكمبروسر؟',
    a: 'خدمة تسليك المجاري بالكمبروسر هي تقنية متطورة تستخدم ضغط ماء عالي يصل إلى 400 بار لفك الانسدادات وإزالة الدهون والرواسب المتراكمة داخل مواسير الصرف الصحي. هذه التقنية آمنة على المواسير وفعالة جداً في حالات الانسداد الشديد.',
  },
  {
    q: 'متى أحتاج إلى تسليك المجاري بالكمبروسر؟',
    a: 'تحتاج إلى هذه الخدمة عندما تلاحظ: بطء تصريف المياه، رجوع المياه في الأحواض، انتشار روائح كريهة، أو انسداداً تاماً في المواسير. أيضاً يُنصح بالصيانة الدورية كل 6 أشهر للمنشآت التجارية.',
  },
  {
    q: 'هل الكمبروسر آمن على المواسير؟',
    a: 'نعم، الكمبروسر آمن تماماً على المواسير عندما يتم تشغيله بواسطة فني متخصص. نحن نستخدم أجهزة حديثة تتيح لنا التحكم في ضغط الماء حسب نوع وعمر الماسورة، مما يضمن تنظيف فعال دون أي ضرر.',
  },
  {
    q: 'كم تستغرق عملية التسليك؟',
    a: 'تستغرق العملية عادةً من 30 دقيقة إلى ساعتين حسب شدة الانسداد وطول الماسورة. معظم الحالات البسيطة تُحل في أقل من ساعة واحدة.',
  },
  {
    q: 'هل الخدمة متاحة 24 ساعة؟',
    a: 'نعم، نحن متاحون 24 ساعة طوال أيام الأسبوع بما في ذلك weekends والعطل الرسمية. نقدم خدمة طوارئ سريعة للحالات العاجلة.',
  },
  {
    q: 'هل تغطون جميع أحياء الرياض؟',
    a: 'نعم، نغطي جميع أحياء الرياض بما فيها: شمال الرياض، جنوب الرياض، شرق الرياض، غرب الرياض، العليا، الياسمين، النرجس، الملقا، الصحافة، العقيق، قرطبة، الرمال، النسيم، الملز، السليمانية وغيرها.',
  },
  {
    q: 'ما أسباب انسداد المجاري المتكرر؟',
    a: 'أسباب الانسداد المتكرر تشمل: تراكم الدهون والزيوت، بقايا الطعام، الشعر، أوراق الأشجار، الترسبات المعدنية، وانسداد المجاري الرئيسية. نقدم نصائح وقائية بعد كل خدمة لتجنب تكرار المشكلة.',
  },
  {
    q: 'هل يمكن إزالة الدهون المتراكمة داخل المواسير؟',
    a: 'نعم، الكمبروسر الضغط العالي هو أفضل حل لإزالة الدهون المتراكمة. ضغط الماء العالي يفتت الدهون ويدفعها خارج الماسورة، مما يعيد التصريف إلى طبيعته.',
  },
  {
    q: 'هل يمكن إزالة الرمال والأتربة من خطوط الصرف؟',
    a: 'بالتأكيد. أجهزة الكمبروسر لدينا مجهزة بفوهات خاصة مصممة لإزالة الرمال والأتربة والرواسب الثقيلة من خطوط الصرف الرئيسية والفرعية.',
  },
  {
    q: 'ما الفرق بين التسليك العادي والتسليك بالكمبروسر؟',
    a: 'التسليك العادي يستخدم أدوات يدوية أو كهربائية بسيطة وقد لا يصل إلى الانسدادات العميقة. أما الكمبروسر فيستخدم ضغط ماء عالي يصل لجميع نقاط الماسورة ويفتت أصعب الانسدادات وينظف جدران الماسورة تماماً.',
  },
  {
    q: 'هل أحتاج إلى صيانة دورية؟',
    a: 'نعم، يُنصح بالصيانة الدورية كل 6-12 شهراً للمنازل وكل 3-6 أشهر للمطاعم والمنشآت التجارية. الصيانة الدورية تمنع الانسدادات المفاجئة وتطيل عمر المواسير.',
  },
  {
    q: 'هل يمكن حل الانسداد بالكامل من أول زيارة؟',
    a: 'في معظم الحالات نعم. نسبة نجاحنا في حل الانسداد من أول زيارة تتجاوز 95%. في الحالات النادرة التي تحتاج لزيارة إضافية (مثل وجود تلف في الماسورة) نُبلغ العميل مسبقاً.',
  },
  {
    q: 'هل تقدمون ضماناً على الخدمة؟',
    a: 'نعم، نقدم ضماناً يصل إلى 30 يوماً على جميع أعمال التسليك. إذا عادت المشكلة خلال فترة الضمان، نقدم زيارة مجانية لحلها.',
  },
  {
    q: 'هل يمكنكم الوصول للحالات الطارئة بسرعة؟',
    a: 'نعم، فريق الطوارئ لدينا متاح 24 ساعة ويصل في أقل من 30 دقيقة لجميع أحياء الرياض. نعطي الأولوية للحالات الطارئة مثل انسداد المجاري الرئيسية ورجوع المياه.',
  },
  {
    q: 'كيف أتواصل معكم مباشرة؟',
    a: 'يمكنك الاتصال بنا مباشرة على الرقم 0501401518 أو مراسلتنا على واتساب على نفس الرقم. نرد على جميع الاستفسارات فوراً على مدار 24 ساعة.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.05,
          scrollTrigger: { trigger: '.faq-list', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="faq-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            الأسئلة <span className="gradient-text">الشائعة</span>
          </h2>
          <p className="text-white/60 text-lg">إجابات على أكثر الأسئلة التي تهمك</p>
        </div>

        <div className="faq-list space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-right hover:bg-white/[0.02] transition-colors"
              >
                <span className={`font-semibold text-sm sm:text-base ${openIndex === idx ? 'text-[#00E5FF]' : 'text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#0055FF] flex-shrink-0 mr-4 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="h-px bg-white/5 mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
