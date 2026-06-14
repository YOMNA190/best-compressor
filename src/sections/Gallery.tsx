import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gallery-residential.jpg', caption: 'تسليك مجاري فيلا سكنية' },
  { src: '/images/gallery-commercial.jpg', caption: 'خدمة المطاعم التجارية' },
  { src: '/images/gallery-equipment.jpg', caption: 'أحدث معدات التسليك' },
  { src: '/images/process-inspection.jpg', caption: 'فحص المجاري بالكاميرا' },
  { src: '/images/process-cleaning.jpg', caption: 'تسليك بالضغط العالي' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const polaroidInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const beforeAfter = beforeAfterRef.current;
    if (!section) return;

    // Before/After reveal animation
    if (beforeAfter) {
      const beforeImg = beforeAfter.querySelector('.before-image');
      const afterImg = beforeAfter.querySelector('.after-image');

      if (beforeImg && afterImg) {
        gsap.fromTo(
          beforeImg,
          { clipPath: 'inset(0 0% 0 0)' },
          {
            clipPath: 'inset(0 50% 0 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: beforeAfter,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: true,
            },
          }
        );
      }
    }

    // Polaroid horizontal scroll
    const polaroid = polaroidRef.current;
    const polaroidInner = polaroidInnerRef.current;
    if (polaroid && polaroidInner) {
      gsap.to(polaroidInner, {
        x: () => -(polaroidInner.scrollWidth - polaroid.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: polaroid,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    }

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
      id="gallery"
      className="relative z-10 bg-white py-24 md:py-32"
    >
      <div className="max-w-[1512px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-deep-navy tracking-tight mb-4">
            من أعمالنا الميدانية
          </h2>
          <p className="text-lg text-muted-navy max-w-2xl mx-auto">
            نفخر بأعمالنا ونتميز بتقديم خدمة احترافية تلبي أعلى معايير الجودة
          </p>
        </div>

        {/* Before & After comparison */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-medium text-deep-navy mb-8 text-center">
            قبل وبعد
          </h3>
          <div
            ref={beforeAfterRef}
            className="relative max-w-4xl mx-auto aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none"
          >
            {/* After image (bottom layer) */}
            <img
              src="/images/after-drain.jpg"
              alt="بعد التسليك"
              loading="lazy"
              className="after-image absolute inset-0 w-full h-full object-cover"
            />
            {/* Before image (top layer, clipped) */}
            <img
              src="/images/before-drain.jpg"
              alt="قبل التسليك"
              loading="lazy"
              className="before-image absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: 'inset(0 0% 0 0)' }}
            />
            {/* Divider line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white -translate-x-1/2 z-10 shadow-lg">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center">
                <span className="text-xs font-bold text-deep-navy">قبل</span>
                <span className="text-xs font-bold text-clean-blue mx-1">|</span>
                <span className="text-xs font-bold text-clean-blue">بعد</span>
              </div>
            </div>
            {/* Labels */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              قبل
            </div>
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              بعد
            </div>
          </div>
        </div>

        {/* Polaroid horizontal scrolling gallery */}
        <div>
          <h3 className="font-display text-2xl font-medium text-deep-navy mb-8 text-center">
            صور أعمالنا
          </h3>
          <div
            ref={polaroidRef}
            className="overflow-hidden"
          >
            <div
              ref={polaroidInnerRef}
              className="flex gap-6 py-4"
              style={{ width: 'max-content' }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 w-72 md:w-80 bg-white p-3 pb-8 rounded-lg shadow-card-subtle hover:shadow-card transition-all duration-500 hover:-translate-y-2 hover:rotate-1"
                  style={{
                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + i * 0.3)}deg)`,
                  }}
                >
                  <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                    <img
                      src={img.src}
                      alt={img.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-navy font-medium">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
