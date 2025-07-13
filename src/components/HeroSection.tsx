import { useState } from 'react';
import heroImage from '../assets/hero-interview.jpg';
import DevelopmentModal from './DevelopmentModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="min-h-screen flex items-center bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-powered mock interview session"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boost Your Interview{' '}
              <span className="gradient-text">Confidence</span>{' '}
              with AI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Practice unlimited mock interviews powered by real-time AI feedback and behavioral analysis. 
              Whether you're a fresher or a pro, sharpen your skills with Plamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="btn-hero"
                onClick={() => setIsModalOpen(true)}
              >
                Start Practicing
              </button>
              <button 
                className="btn-ghost"
                onClick={() => setIsModalOpen(true)}
              >
                Watch Demo
              </button>
            </div>

            <DevelopmentModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;