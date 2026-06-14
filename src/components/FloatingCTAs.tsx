import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3 md:hidden">
      <a
        href="tel:+966501401518"
        className="flex items-center justify-center w-14 h-14 bg-[#0055FF] hover:bg-[#0044CC] text-white rounded-full shadow-lg transition-all duration-300 animate-glow-pulse"
        aria-label="اتصل الآن"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/966501401518"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-lg transition-all duration-300"
        aria-label="واتساب"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
