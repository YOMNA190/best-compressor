import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const areas = [
  'شمال الرياض', 'جنوب الرياض', 'شرق الرياض', 'غرب الرياض',
  'العليا', 'الياسمين', 'النرجس', 'الملقا',
  'الصحافة', 'العقيق', 'قرطبة', 'الرمال',
  'النسيم', 'الملز', 'السليمانية',
];

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [velocity, setVelocity] = useState(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScroll;
      velocityRef.current = delta;
      setVelocity(delta);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const decay = setInterval(() => {
      velocityRef.current *= 0.9;
      setVelocity(velocityRef.current);
    }, 50);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.areas-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.areas-grid',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.areas-grid', start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
      clearInterval(decay);
    };
  }, []);

  const maxBend = Math.PI / 6;
  const bend = (velocity * maxBend) / window.innerWidth;
  const transform = `skewX(${-bend}rad) scaleY(${Math.cos(bend)})`;

  return (
    <section ref={sectionRef} id="areas" className="relative py-24 md:py-32 bg-[#0B1A2E] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/riyadh-aerial.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="areas-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            مناطق <span className="gradient-text">الخدمة</span>
          </h2>
          <p className="text-white/60 text-lg">نغطي جميع أحياء مدينة الرياض</p>
        </div>

        <div className="areas-grid" style={{ transform, transition: 'transform 0.1s ease-out' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="group glass-card rounded-2xl p-5 text-center hover:border-[#0055FF]/40 transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0055FF]/20 to-[#00E5FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPinIcon />
                </div>
                <span className="text-white font-semibold text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { value: '15+', label: 'سنة خبرة' },
            { value: '5000+', label: 'عميل سعيد' },
            { value: '15', label: 'منطقة مغطاة' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center glass-card rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
