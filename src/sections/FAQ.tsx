import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';

// Google Ads Conversion Tracking for Phone Calls
function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18237596537/ehTyCJnpzL4cEPnGrvhD',
      'value': 1.0,
      'currency': 'EGP',
      'event_callback': callback
    });
  }
  return false;
}

/**
 * FAQ Section - Eco-Friendly
 * Design: Clean accordion layout with green eco styling
 * RTL: Full right-to-left support for Arabic
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'ما هي تقنية الكمبروسر التي تستخدمونها؟',
      answer: 'نستخدم أحدث أجهزة الكمبروسر الألمانية التي تعمل بضغط الهواء والماء الصديق للبيئة، مما يضمن تسليك الأنابيب دون الحاجة لاستخدام مواد كيميائية ضارة قد تؤثر على سلامة المواسير أو البيئة.',
    },
    {
      question: 'هل توفرون ضماناً على خدمة التسليك؟',
      answer: 'نعم، نقدم ضماناً كاملاً على جميع أعمالنا. نحن نثق في جودة عملنا ونحرص على رضا عملائنا التام، وفي حال تكرار المشكلة خلال فترة الضمان، نقوم بالمعالجة مجاناً.',
    },
    {
      question: 'ما هي المناطق التي تغطيها خدمتكم؟',
      answer: 'نغطي حالياً جميع أحياء مدينة الرياض ومدينة الدمام والمناطق المحيطة بهما، مع توفر فرق طوارئ جاهزة للتحرك السريع في أي وقت.',
    },
    {
      question: 'كم يستغرق وصول الفريق إلي؟',
      answer: 'نحرص على الاستجابة السريعة، حيث يصل فريقنا عادة خلال 30 إلى 60 دقيقة من وقت طلب الخدمة، خاصة في حالات الطوارئ.',
    },
    {
      question: 'هل المواد المستخدمة آمنة على مواسير المنزل؟',
      answer: 'بالتأكيد، تقنياتنا تعتمد على الضغط الميكانيكي والهواء، وهي الطريقة الأكثر أماناً للمواسير مقارنة بالمواد الكيميائية الحارقة التي قد تسبب تآكلاً مع الوقت.',
    },
    {
      question: 'كيف يمكنني حجز موعد؟',
      answer: 'يمكنك الحجز مباشرة عبر الاتصال الهاتفي أو عبر الواتساب. نحن متاحون على مدار الساعة طوال أيام الأسبوع لخدمتكم.',
    },
  ];

  return (
    <section id="faq" className="luxury-section bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="luxury-title mb-4">الأسئلة الشائعة</h2>
            <div className="luxury-divider mx-auto w-24 mb-6" />
            <p className="luxury-subtitle">كل ما تحتاج معرفته عن خدماتنا البيئية المتميزة</p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="luxury-card !p-0 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-right hover:bg-accent/5 transition-colors"
                >
                  <span className="text-xl font-bold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`text-accent transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-accent/10">
                    <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-8">لديك سؤال آخر؟ لا تتردد في التواصل معنا</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+966501401518"
                onClick={() => gtag_report_conversion('tel:+966501401518')}
                className="flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-lg transition-all"
              >
                <Phone size={20} />
                <span>اتصل بنا</span>
              </a>
              <a
                href="https://wa.me/966501401518"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all"
              >
                <MessageCircle size={20} />
                <span>واتساب مباشر</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
