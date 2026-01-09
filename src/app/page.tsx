import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import FeaturedProjectsSection from '@/components/sections/featured-projects-section';
import CtaSection from '@/components/sections/cta-section';
import AboutSection from '@/components/sections/about-section';
import FullProjectsSection from '@/components/sections/full-projects-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProjectsSection />
        <CtaSection />
        <AboutSection />
        <FullProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
