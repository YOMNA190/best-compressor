import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1A2E]/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0055FF] to-[#00E5FF] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight">كمبروسر الرياض</span>
            <span className="text-[#00E5FF] text-xs font-medium">Kompressor Riyadh</span>
          </div>
        </div>

        {/* Center Badge */}
        <div className="hidden md:flex items-center gap-2 glass-card rounded-full px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC143C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DC143C]"></span>
          </span>
          <span className="text-white text-sm font-semibold">فني متاح الآن</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+966501401518"
            className="hidden sm:flex items-center gap-2 bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 text-sm"
          >
            <Phone size={16} />
            <span>اتصل الآن</span>
          </a>
          <a
            href="https://wa.me/966501401518"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 text-sm"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">واتساب</span>
          </a>
        </div>
      </div>
    </header>
  );
}
