import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'أحمد السالم',
    location: 'حي النرجس، شمال الرياض',
    rating: 5,
    text: 'خدمة ممتازة وسرعة في الاستجابة. وصل الفني خلال 20 دقيقة وحل المشكلة بدون أي تكسير. أنصح بهم بشدة!',
  },
  {
    name: 'محمد العتيبي',
    location: 'حي الروضة، شرق الرياض',
    rating: 5,
    text: 'أفضل مؤسسة تسليك مجاري في الرياض. تعاملهم احترافي والأسعار مناسبة جداً. شكراً لفريق العمل الرائع.',
  },
  {
    name: 'فهد الدوسري',
    location: 'حي الياسمين، غرب الرياض',
    rating: 5,
    text: 'مجاري المطبخ انسدت فجأة في منتصف الليل. اتصلتهم والفني وصل سريعاً وحل المشكلة بكفاءة. خدمة 24 ساعة فعلاً!',
  },
  {
    name: 'عبدالله القحطاني',
    location: 'حي الملقا، شمال الرياض',
    rating: 5,
    text: 'استخدموا أجهزة حديثة وكاميرا لفحص المجاري. شفنا المشكلة على الشاشة وحلوها بسرعة. عمل نظيف ومنظم.',
  },
  {
    name: 'سعد المطيري',
    location: 'حي الشفا، جنوب الرياض',
    rating: 5,
    text: 'سعر معقول مقابل الخدمة الممتازة. الفني كان محترف وشرح لنا المشكلة بالتفصيل. راح نتعامل معهم دائماً.',
  },
  {
    name: 'خالد الحربي',
    location: 'حي الورود، شرق الرياض',
    rating: 5,
    text: 'مجاري الحمام كانت مسدودة منذ يومين. فريق المهندس حلها في أقل من ساعة. شكراً للسرعة والاحترافية.',
  },
  {
    name: 'ناصر الشمري',
    location: 'حي الصحافة، شمال الرياض',
    rating: 5,
    text: 'خدمة ممتازة ومواعيد دقيقة. الفنيون محترفون ويلبسون زي موحد ونظيف. أفضل تجربة مع تسليك المجاري.',
  },
  {
    name: 'بندر السبيعي',
    location: 'حي ظهرة لبن، غرب الرياض',
    rating: 5,
    text: 'انقذونا في عطلة نهاية الأسبوع! المجاري الرئيسية انسدت والفريق وصل بسرعة وعمل ممتاز. شكراً لكم.',
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[360px] bg-white rounded-2xl p-6 shadow-card-subtle mx-3">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-text-navy text-sm leading-relaxed mb-4">{review.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-clean-blue/10 flex items-center justify-center">
          <span className="text-clean-blue font-medium text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-deep-navy font-medium text-sm">{review.name}</p>
          <p className="text-muted-navy text-xs">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="relative z-10 bg-soft-gray py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1512px] mx-auto px-6 md:px-12 mb-12">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-deep-navy tracking-tight mb-4">
            آراء العملاء
          </h2>
          <p className="text-lg text-muted-navy max-w-2xl mx-auto">
            نفخر بثقة آلاف العملاء في الرياض
          </p>
        </div>
      </div>

      {/* Marquee row - scrolling right to left (RTL) */}
      <div className="relative mb-6">
        <div className="flex animate-marquee" style={{ animationDirection: 'reverse' }}>
          {doubled.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Marquee row - scrolling left to right */}
      <div className="relative">
        <div className="flex animate-marquee" style={{ animationDuration: '35s' }}>
          {doubled.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Google rating badge */}
      <div className="max-w-[1512px] mx-auto px-6 md:px-12 mt-12">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-card-subtle">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-deep-navy font-bold">4.9</span>
            <span className="text-muted-navy text-sm">تقييم Google</span>
          </div>
          <div className="bg-white rounded-full px-6 py-3 shadow-card-subtle">
            <span className="text-deep-navy font-bold text-lg">+5000</span>
            <span className="text-muted-navy text-sm mr-2">عميل سعيد</span>
          </div>
        </div>
      </div>
    </section>
  );
}
