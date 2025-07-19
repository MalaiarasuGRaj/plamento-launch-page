import resumeChecker from '../assets/resumechecker.png';
import problem from '../assets/ai-collaboration.jpg';
import jobAnalyzer from '../assets/jobanalyzer.png';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />{' '}
      <div className="min-h-screen pt-20">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              About <span className="gradient-text">Plamento</span>
@@ -65,7 +99,7 @@ const About = () => {
                  </h2>
                  <p className="text-base text-gray-300">
                    We are building a smart AI-powered companion for every
                    candidates preparing for placements.
                    <br />
                    <br />
                    Our vision is to bridge the gap between job seekers and job
@@ -77,49 +111,32 @@ const About = () => {
              </div>
            </div>

            <div className="mb-12 text-center">
              <h2 className="mb-8 text-2xl font-semibold">
                <span className="gradient-text">Our Toolkit Includes</span>
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Tool 1 */}
                <div className="flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="mb-2 text-lg font-bold">ATS Resume Checker</h3>
                  <p className="text-sm text-gray-300">
                    Ensure your resume passes real-world ATS filters with proper
                    keywords and format.
                  </p>
                </div>
                {/* Tool 2 */}
                <div className="flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="mb-2 text-lg font-bold">
                    Job Description Analyzer
                  </h3>
                  <p className="text-sm text-gray-300">
                    Upload a JD and instantly compare your resume against it
                    with actionable insights.
                  </p>
                </div>
                {/* Tool 3 */}
                <div className="flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="mb-2 text-lg font-bold">
                    Domain-Specific Question Bank
                  </h3>
                  <p className="text-sm text-gray-300">
                    Access MCQs and quizzes tailored to your job role for
                    focused preparation.
                  </p>
                </div>
                {/* Tool 4 */}
                <div className="flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="mb-2 text-lg font-bold">
                    AI-Powered Mock Interview
                  </h3>
                  <p className="text-sm text-gray-300">
                    Practice with HR and technical questions. Get instant
                    NLP-based feedback and confidence scoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
