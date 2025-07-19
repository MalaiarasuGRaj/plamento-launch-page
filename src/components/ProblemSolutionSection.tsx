import React from 'react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* The Problem */}
          <div className="md:border-r md:border-gray-700 md:pr-6">
            <h2 className="text-3xl font-bold mb-6">
              The <span className="gradient-text">Problem</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Traditional interview preparation often lacks personalization and real-time feedback. Candidates
              struggle with generic practice questions, don't get specific guidance on their weaknesses,
              and find it hard to simulate real interview pressure. This leaves them feeling unprepared and
              anxious, often leading to missed opportunities.
            </p>
          </div>

          {/* Our Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="gradient-text">Solution</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Plamento leverages cutting-edge AI to provide a revolutionary approach. Our platform offers
              personalized mock interviews tailored to specific roles and industries. You get instant,
              data-driven feedback on your communication, body language, and technical responses,
              helping you identify and improve your weak areas effectively. Practice anytime, anywhere,
              and build the confidence to ace your next interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
