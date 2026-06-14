import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.beforeafter-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.beforeafter-container',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.beforeafter-container', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, []);

  return (
    <section ref={sectionRef} id="beforeafter" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="beforeafter-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            قبل <span className="gradient-text">وبعد</span>
          </h2>
          <p className="text-white/60 text-lg">اسحب لمشاهدة الفرق الذي نحدثه</p>
        </div>

        <div
          ref={sliderRef}
          className="beforeafter-container relative w-full aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white/5"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After Image (Full) */}
          <img
            src="/images/after-clean.jpg"
            alt="بعد التنظيف"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/images/before-clogged.jpg"
              alt="قبل التنظيف"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${100 / (sliderPos / 100 || 0.01)}%` }}
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1A2E" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 right-6 bg-[#DC143C]/90 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
            قبل
          </div>
          <div className="absolute top-6 left-6 bg-[#0055FF]/90 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
            بعد
          </div>
        </div>
      </div>
    </section>
  );
}
