import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;