import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.video-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.video-container',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.video-container', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section ref={sectionRef} id="video" className="relative py-24 md:py-32 bg-[#0B1A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="video-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            شاهد <span className="gradient-text">الخدمة</span> بالعمل
          </h2>
          <p className="text-white/60 text-lg">عملية تسليك المجاري بالكمبروسر من البداية للنهاية</p>
        </div>

        <div className="video-container relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            src="/videos/service-demo.mp4"
            loop
            playsInline
            muted
            onClick={togglePlay}
          />

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-[#0055FF]/90 hover:bg-[#0055FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? <Pause size={32} className="text-white" /> : <Play size={32} className="text-white ml-1" />}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
            >
              {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
            </button>
            <div className="flex items-center gap-2 glass-card rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">خدمة تسليك المجاري بالكمبروسر</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { step: '01', title: 'الوصول', desc: 'وصول الفني في أقل من 30 دقيقة' },
            { step: '02', title: 'الفحص', desc: 'كشف دقيق بكاميرات التفتيش' },
            { step: '03', title: 'التسليك', desc: 'تنظيف بالكمبروسر الضغط العالي' },
            { step: '04', title: 'النتيجة', desc: 'تصريف سريع ومجاري نظيفة' },
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 text-center">
              <span className="text-3xl font-bold gradient-text">{item.step}</span>
              <h4 className="text-white font-bold mt-2 mb-1">{item.title}</h4>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
