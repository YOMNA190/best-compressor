import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import BeforeAfter from '@/sections/BeforeAfter';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Reviews from '@/sections/Reviews';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';
import Footer from '@/sections/Footer';

/**
 * Main App Component - Luxury Minimalist Landing Page
 * Design: Premium industrial service website for Saudi market
 * Language: 100% Arabic with RTL support
 * Theme: Dark luxury with gold accents
 */
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Before/After Comparison */}
        <BeforeAfter />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Reviews & Testimonials */}
        <Reviews />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
