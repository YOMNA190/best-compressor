import { useRef, useState } from 'react';

/**
 * Hero Video Background
 * 
 * لإضافة فيديو حقيقي:
 * 1. حملي فيديو مناسب من pexels.com (ابحثي عن "plumber" أو "drain cleaning")
 * 2. ضعي الملف في مجلد /public/videos/hero.mp4
 * 3. غيري videoSrc أدناه
 * 
 * أو استخدمي رابط مباشر:
 * const videoSrc = "https://cdn.pexels.com/video/xxxx/free.mp4";
 */
const videoSrc = '/videos/hero.mp4'; // ← ضعي مسار الفيديو هنا
const fallbackImage = '/images/hero-technician.jpg';

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(2,132,199,0.25) 50%, rgba(15,23,42,0.90) 100%)',
          zIndex: 1,
        }}
      />

      {/* Video */}
      {!videoFailed ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        /* Fallback: hero image with subtle zoom animation */
        <img
          src={fallbackImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            animation: 'heroZoom 20s ease-in-out infinite alternate',
          }}
        />
      )}

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
