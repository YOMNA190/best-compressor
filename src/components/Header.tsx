import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

/**
 * Header Component - Luxury Minimalist
 * Design: Clean navigation with gold accents, sticky positioning
 * RTL: Full right-to-left support for Arabic
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'الخدمات', href: '#services' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'التقييمات', href: '#reviews' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 text-background"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="50" cy="50" r="35" />
                <path d="M 30 50 Q 50 35 70 50" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Best Compressor</h1>
              <p className="text-xs text-muted-foreground">خدمة تسليك مجاري فاخرة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+966501401518"
              className="hidden sm:flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-sm"
            >
              <Phone size={16} />
              <span>اتصل الآن</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-accent" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-accent/20">
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+966501401518"
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all mt-2"
              >
                اتصل الآن
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
