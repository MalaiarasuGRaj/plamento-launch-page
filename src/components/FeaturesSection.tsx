import { useEffect, useRef, useState } from 'react';
import { Users, Monitor, Mic, Image as ImageIcon, ArrowUp } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const topRowFeatures = [
    {
      icon: Users,
      title: 'Personalized Interview Questions',
      description: 'Get tailored questions based on your role, experience level, and industry.',
      delay: 'stagger-1'
    },
    {
      icon: Monitor,
      title: 'Real-Time Feedback & Scoring',
      description: 'Instant analysis of your responses with detailed performance metrics.',
      delay: 'stagger-2'
    },
    {
      icon: Mic,
      title: 'Performance Tracking',
      description: 'Track your progress over time and identify areas for improvement.',
      delay: 'stagger-3'
    }
  ];

  const bottomRowFeatures = [
    {
      icon: Mic,
      title: 'Voice + Text Mode Support',
      description: 'Practice with both voice and text responses for maximum flexibility.',
      delay: 'stagger-4'
    },
    {
      icon: ImageIcon,
      title: 'Available Worldwide',
      description: 'Access your AI interview coach from anywhere, anytime, on any device.',
      delay: 'stagger-5'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-muted/20"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 fade-in-up ${isVisible ? 'animate' : ''}`}>
            Why Choose{' '}
            <span className="gradient-text">Plamento</span>?
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up ${isVisible ? 'animate' : ''} stagger-1`}>
            Our AI-powered platform provides comprehensive interview preparation with cutting-edge technology 
            and personalized feedback to help you succeed.
          </p>
        </div>

        {/* Features Grid - 3 cards in top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {topRowFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 fade-in-up ${isVisible ? 'animate' : ''} ${feature.delay} w-full h-[280px] max-w-[320px] mx-auto`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Grid - 2 cards in bottom row, centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {bottomRowFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 fade-in-up ${isVisible ? 'animate' : ''} ${feature.delay} w-full h-[280px] max-w-[320px] mx-auto`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;