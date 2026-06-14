import { Star } from 'lucide-react';

/**
 * Reviews Section - Luxury Minimalist
 * Design: Elegant testimonial cards with star ratings
 * Features: Customer reviews with premium styling
 */
export default function Reviews() {
  const reviews = [
    {
      name: 'محمد الدعيع',
      location: 'الرياض',
      rating: 5,
      text: 'خدمة ممتازة وسريعة جداً. الفريق احترافي جداً والنتيجة رائعة. أنصح بهم بشدة.',
      avatar: '👨‍💼',
    },
    {
      name: 'فاطمة السويلم',
      location: 'الدمام',
      rating: 5,
      text: 'أفضل خدمة تسليك مجاري استخدمتها. الفريق ملتزم والعمل احترافي جداً وبسعر عادل.',
      avatar: '👩‍💼',
    },
    {
      name: 'سلطان العتيبي',
      location: 'الرياض',
      rating: 5,
      text: 'خدمة 24 ساعة حقيقية وفريق متجاوب جداً. حل مشكلتي في أقل من ساعة. شكراً لكم.',
      avatar: '👨‍💼',
    },
    {
      name: 'نور الزهراني',
      location: 'الدمام',
      rating: 5,
      text: 'تقنية متقدمة وآمنة على الأنابيب. النتائج فوق التوقعات والضمان على العمل مريح جداً.',
      avatar: '👩‍💼',
    },
  ];

  return (
    <section id="reviews" className="luxury-section bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="luxury-title mb-4">آراء عملائنا</h2>
          <div className="luxury-divider mb-6" />
          <p className="luxury-subtitle">
            آلاف العملاء الراضين عن خدماتنا المتميزة
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="luxury-card hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-accent/20">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-foreground/60 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">10K+</p>
            <p className="text-foreground/70">عميل راضي</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">4.9/5</p>
            <p className="text-foreground/70">متوسط التقييم</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">100%</p>
            <p className="text-foreground/70">ضمان الرضا</p>
          </div>
        </div>
      </div>
    </section>
  );
}
