import React from 'react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* The Problem */}
          <div className="md:border-r md:border-gray-700 md:pr-6">
            <h2 className="mb-6 text-3xl font-bold">
              The <span className="gradient-text">Problem</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Traditional interview preparation often lacks personalization and
              real-time feedback. Candidates struggle with generic practice
              questions, don't get specific guidance on their weaknesses, and
              find it hard to simulate real interview pressure. This leaves them
              feeling unprepared and anxious, often leading to missed
              opportunities.
            </p>
          </div>

          {/* Our Solution */}
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Our <span className="gradient-text">Solution</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Plamento leverages cutting-edge AI to provide a revolutionary
              approach. Our platform offers personalized mock interviews
              tailored to specific roles and industries. You get instant,
              data-driven feedback on your communication, body language, and
              technical responses, helping you identify and improve your weak
              areas effectively. Practice anytime, anywhere, and build the
              confidence to ace your next interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
