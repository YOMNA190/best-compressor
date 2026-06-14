import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'أعمالنا', href: '#gallery' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-white/10 shadow-card-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1512px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`font-display text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-deep-navy' : 'text-white'
            }`}
          >
            مؤسسة المهندس
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                scrolled ? 'text-text-navy' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="tel:+966501401518"
          onClick={() => (window as any).gtag_report_conversion_call?.('tel:+966501401518')}
          className="flex items-center gap-2 bg-clean-blue text-white px-6 py-2.5 rounded-pill text-sm font-medium hover:bg-clean-blue/90 transition-all duration-300 hover:scale-[0.98] active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>اتصل الآن</span>
        </a>
      </div>
    </nav>
  );
}
