import { useState } from 'react';

/**
 * Before/After Section - Luxury Minimalist
 * Design: Split-screen image comparison with slider
 * Features: Interactive before/after toggle
 */
export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="luxury-section bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="luxury-title mb-4">النتائج الفعلية</h2>
          <div className="luxury-divider mb-6" />
          <p className="luxury-subtitle">
            شاهد الفرق الواضح بين الأنابيب المسدودة والنظيفة
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full overflow-hidden rounded-lg luxury-border luxury-glow cursor-col-resize"
            onMouseMove={handleMouseMove}
            style={{ aspectRatio: '16/9' }}
          >
            {/* After Image (Background) */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663594372769/RXekFWzqRZqREtUzHxtuDw/before-after-pipes-2fV5E37xD2DkN6fBLYpwZd.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Before Image (Overlay) */}
            <div
              className="absolute inset-0"
              style={{
                width: `${sliderPosition}%`,
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663594372769/RXekFWzqRZqREtUzHxtuDw/before-after-pipes-2fV5E37xD2DkN6fBLYpwZd.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              }}
            />

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full p-3 shadow-lg">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-background rounded-full" />
                  <div className="w-1 h-4 bg-background rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-background/80 backdrop-blur rounded-lg">
              <p className="text-accent font-bold text-sm">قبل التنظيف</p>
            </div>
            <div className="absolute top-4 left-4 px-4 py-2 bg-background/80 backdrop-blur rounded-lg">
              <p className="text-accent font-bold text-sm">بعد التنظيف</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card rounded-lg luxury-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">المشكلة</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-foreground/80">تراكم الأوساخ والرواسب</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-foreground/80">انسداد كامل للمجاري</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-foreground/80">رائحة كريهة وتسرب مياه</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-foreground/80">أضرار محتملة للأنابيب</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-lg luxury-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">الحل</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground/80">تنظيف شامل وفعال</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground/80">استعادة تدفق المياه الطبيعي</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground/80">القضاء على الروائح الكريهة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground/80">حماية الأنابيب من الأضرار</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
