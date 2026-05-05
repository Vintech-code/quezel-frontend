import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import MenuSection from '@/components/landing/MenuSection';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--warm-beige)' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
