import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/service-action.jpg', alt: 'فني يقوم بتسليك المجاري', category: 'خدمة' },
  { src: '/images/equipment-truck.jpg', alt: 'شاحنة الكمبروسر', category: 'معدات' },
  { src: '/images/equipment-nozzle.jpg', alt: 'فوهة الكمبروسر', category: 'معدات' },
  { src: '/images/team-photo.jpg', alt: 'فريق العمل', category: 'فريق' },
  { src: '/images/inspection-camera.jpg', alt: 'كاميرا الفحص', category: 'فحص' },
  { src: '/images/cleaning-action.jpg', alt: 'تنظيف المجاري', category: 'خدمة' },
  { src: '/images/gallery-result.jpg', alt: 'نتيجة التنظيف', category: 'نتيجة' },
  { src: '/images/gallery-equipment.jpg', alt: 'معدات العمل', category: 'معدات' },
  { src: '/images/compressor-hero.jpg', alt: 'معدات الكمبروسر', category: 'معدات' },
  { src: '/images/gallery-technician.jpg', alt: 'فني متخصص', category: 'فريق' },
  { src: '/images/riyadh-aerial.jpg', alt: 'الرياض', category: 'موقع' },
  { src: '/images/before-clogged.jpg', alt: 'قبل التنظيف', category: 'قبل' },
];

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [filter, setFilter] = useState('الكل');

  const categories = ['الكل', ...Array.from(new Set(galleryImages.map((img) => img.category)))];

  const filteredImages = filter === 'الكل'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [filteredImages]);

  return (
    <section ref={sectionRef} id="gallery" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="gallery-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            معرض <span className="gradient-text">الأعمال</span>
          </h2>
          <p className="text-white/60 text-lg">صور من خدماتنا وأعمالنا في الرياض</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#0055FF] text-white'
                  : 'glass-card text-white/70 hover:text-white hover:border-[#0055FF]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            onClick={() => setLightbox(null)}
          >
            <X size={24} className="text-white" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
