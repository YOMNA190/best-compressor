import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#081526] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0055FF] to-[#00E5FF] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">كمبروسر الرياض</h3>
                <p className="text-[#00E5FF] text-xs">Kompressor Riyadh</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              خدمة تسليك المجاري بالكمبروسر الضغط العالي في الرياض. خبرة أكثر من 15 سنة، خدمة 24 ساعة، ضمان على العمل.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: 'الرئيسية', href: '#hero' },
                { label: 'المشاكل والحلول', href: '#problems' },
                { label: 'معرض الأعمال', href: '#gallery' },
                { label: 'كيف نعمل', href: '#howitworks' },
                { label: 'الأسئلة الشائعة', href: '#faq' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#00E5FF] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+966501401518"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#0055FF]" />
                  <span dir="ltr">+966 50 140 1518</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966501401518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  <span>واتساب</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-[#0055FF]" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-[#0055FF]" />
                <span>خدمة 24 ساعة - 7 أيام في الأسبوع</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-white/5 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>جميع الحقوق محفوظة © 2025 كمبروسر الرياض</p>
          <p>تسليك المجاري بالكمبروسر الضغط العالي - الرياض</p>
        </div>
      </div>
    </footer>
  );
}
