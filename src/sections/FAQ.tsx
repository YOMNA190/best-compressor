import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
 * FAQ Section - Luxury Minimalist
 * Design: Accordion with smooth animations
 * Features: Common questions with detailed answers
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'كم تستغرق عملية التسليك؟',
      answer: 'معظم عمليات التسليك تستغرق من 30 دقيقة إلى ساعة واحدة حسب درجة الانسداد. نحن نعمل بسرعة واحترافية عالية.',
    },
    {
      question: 'هل الكمبروسر آمن على الأنابيب؟',
      answer: 'نعم تماماً. نستخدم أحدث تقنيات الكمبروسر الآمنة والمتطورة التي لا تسبب أي ضرر للأنابيب.',
    },
    {
      question: 'هل هناك ضمان على الخدمة؟',
      answer: 'نعم، نوفر ضمان كامل على جميع خدماتنا. إذا عادت المشكلة خلال 30 يوم، نعيد الخدمة مجاناً.',
    },
    {
      question: 'ما هي أسعاركم؟',
      answer: 'الأسعار تختلف حسب درجة الانسداد والموقع. نقدم استشارة مجانية وتقدير سعر دقيق قبل البدء بالعمل.',
    },
    {
      question: 'هل تعملون في الليل والعطل الأسبوعية؟',
      answer: 'نعم، خدمتنا متاحة 24 ساعة يومياً طوال أيام الأسبوع بما فيها الجمعة والعطل الرسمية.',
    },
    {
      question: 'كيف أحجز الخدمة؟',
      answer: 'يمكنك التواصل معنا عبر الهاتف أو واتساب. فريقنا سيرد عليك فوراً ويحدد موعد الخدمة.',
    },
  ];

  return (
    <section id="faq" className="luxury-section bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="luxury-title mb-4">الأسئلة الشائعة</h2>
          <div className="luxury-divider mb-6" />
          <p className="luxury-subtitle">
            إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="luxury-card cursor-pointer transition-all duration-300 hover:border-accent/50"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Answer */}
              {openIndex === idx && (
                <div className="mt-4 pt-4 border-t border-accent/20 animate-fadeInDown">
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            هل لديك سؤال آخر؟ تواصل معنا مباشرة
          </p>
          <a
            href="tel:+966501401518"
            onClick={() => gtag_report_conversion('tel:+966501401518')}
            className="inline-block luxury-button"
          >
            اتصل بنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
