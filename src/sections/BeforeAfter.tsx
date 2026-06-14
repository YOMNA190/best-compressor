import { useState, useRef } from 'react';

/**
 * Before/After Section - Eco-Friendly
 * Design: Interactive slider to compare pipe cleaning results
 * Features: Visual proof of service effectiveness with green eco accents
 */
export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="luxury-section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-title mb-6">نتائجنا تتحدث عن نفسها</h2>
          <div className="luxury-divider mx-auto w-24 mb-8" />
          <p className="luxury-subtitle max-w-2xl mx-auto">
            شاهد الفرق قبل وبعد استخدام تقنية الكمبروسر البيئية لتنظيف الأنابيب وإزالة الانسدادات المستعصية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Slider Side */}
          <div 
            ref={containerRef}
            className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden luxury-border luxury-glow cursor-col-resize select-none"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image (Clean) */}
            <div className="absolute inset-0">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594372769/U6xYV-u0S3u3Y-n-u2L7A/after-clean-pipe-eAkCszTww7RtDaBFMHRkiY.webp" 
                alt="بعد التنظيف"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                بعد التنظيف
              </div>
            </div>

            {/* Before Image (Dirty) */}
            <div 
              className="absolute inset-0 border-l-4 border-accent"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594372769/68qE87t_SBeF-y8n-u2L7A/before-dirty-pipe-eAkCszTww7RtDaBFMHRkiY.webp" 
                alt="قبل التنظيف"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                قبل التنظيف
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-accent pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-xl border-4 border-background">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-background rounded-full" />
                  <div className="w-1 h-4 bg-background rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="luxury-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">المشكلة: انسداد وتراكم دهون</h3>
              <p className="text-foreground/70 leading-relaxed">
                تتراكم الدهون والترسبات الصلبة داخل الأنابيب مع مرور الوقت، مما يؤدي إلى بطء التصريف وانبعاث روائح كريهة قد تسبب مشاكل صحية.
              </p>
            </div>
            <div className="luxury-card border-accent/50 bg-accent/5">
              <h3 className="text-2xl font-bold text-accent mb-4">الحل: تقنية الكمبروسر البيئية</h3>
              <p className="text-foreground/70 leading-relaxed">
                تقوم تقنيتنا بتفتيت كافة الرواسب والدهون باستخدام قوة ضغط الهواء والماء، مما يعيد الأنابيب لحالتها الأصلية دون أي ضرر أو استخدام كيماويات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
