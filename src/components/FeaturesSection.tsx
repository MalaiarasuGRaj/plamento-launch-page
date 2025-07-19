import { useEffect, useRef, useState } from 'react';
import { Users, Monitor, Mic, Image as ImageIcon, ArrowUp } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const topRowFeatures = [
    {
      icon: Users,
      title: 'Personalized Interview Questions',
      description:
        'Get tailored questions based on your role, experience level, and industry.',
      delay: 'stagger-1',
    },
    {
      icon: Monitor,
      title: 'Real-Time Feedback & Scoring',
      description:
        'Instant analysis of your responses with detailed performance metrics.',
      delay: 'stagger-2',
    },
    {
      icon: Mic,
      title: 'Performance Tracking',
      description:
        'Track your progress over time and identify areas for improvement.',
      delay: 'stagger-3',
    },
  ];

  const bottomRowFeatures = [
    {
      icon: Mic,
      title: 'Voice + Text Mode Support',
      description:
        'Practice with both voice and text responses for maximum flexibility.',
      delay: 'stagger-4',
    },
    {
      icon: ImageIcon,
      title: 'Available Worldwide',
      description:
        'Access your AI interview coach from anywhere, anytime, on any device.',
      delay: 'stagger-5',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className={`fade-in-up mb-4 text-3xl font-bold md:text-4xl ${isVisible ? 'animate' : ''}`}
          >
            Why Choose <span className="gradient-text">Plamento</span>?
          </h2>
          <p
            className={`fade-in-up mx-auto max-w-3xl text-lg text-muted-foreground dark:text-gray-400 ${isVisible ? 'animate' : ''} stagger-1`}
          >
            Our AI-powered platform provides comprehensive interview preparation
            with cutting-edge technology and personalized feedback to help you
            succeed.
          </p>
        </div>

        {/* Features Grid - 3 cards in top row */}
        <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {topRowFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`fade-in-up flex flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${isVisible ? 'animate' : ''} ${feature.delay} mx-auto h-[280px] w-full max-w-[320px]`}
              >
                <div className="mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="gradient-text mb-4 text-xl font-bold">
                  {feature.title}{' '}
                  {/* Consider making this white as well if needed */}
                </h3>
                <p className="text-sm text-gray-300">
                  {feature.description}{' '}
                  {/* Consider making this a lighter grey as well if needed */}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Grid - 2 cards in bottom row, centered */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-start-1 col-end-4 mx-auto grid grid-cols-1 gap-8 md:max-w-[calc(320px*2+32px)] md:grid-cols-2">
            {bottomRowFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`fade-in-up flex flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${isVisible ? 'animate' : ''} ${feature.delay} mx-auto h-[280px] w-full max-w-[320px]`}
                >
                  <div className="mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    <span className="gradient-text">{feature.title}</span>{' '}
                    {/* Consider making this white as well if needed */}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {feature.description}{' '}
                    {/* Consider making this a lighter grey as well if needed */}
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
