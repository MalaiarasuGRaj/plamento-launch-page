import { useState } from 'react';
import heroImage from '../assets/hero-interview.jpg';
import DevelopmentModal from './DevelopmentModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-powered mock interview session"
                className="h-auto w-full rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Boost Your Interview{' '}
              <span className="gradient-text">Confidence</span> with AI
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Practice unlimited mock interviews powered by real-time AI
              feedback and behavioral analysis. Whether you're a fresher or a
              pro, sharpen your skills with Plamento.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button className="btn-hero" onClick={() => setIsModalOpen(true)}>
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
              isWaitlistMessage={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
