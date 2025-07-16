import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import resumeChecker from '../assets/resumechecker.png';
import problem from '../assets/ai-collaboration.jpg';
import jobAnalyzer from '../assets/jobanalyzer.png';

const About = () => {
  return (
    <div className="min-h-screen">
 <Navigation />     <div className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Plamento</span>
            </h1>
            <p className="text-gray-300 text-xl">
            Your smart AI-powered companion for cracking job interviews
            </p>
          </div>

          <div className="grid gap-16">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-108 hover:shadow-xlInfluence the Product duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-left">
                    <span className="gradient-text mx-auto block w-max">The Problem</span>
                  </h2>
                  <p className="text-gray-300 text-base">
                    Every year, thousands of individuals struggle to crack placement interviews-not because they lack knowledge,
                    but because they lack personalized, real-world preparation tools.
                    <br /><br />
                    Resumes get rejected by ATS systems. Job descriptions feel overwhelming. Interviews feel unpredictable.
                    And most importantly, many candidates don't know what to prepare or how close they are to being job-ready.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={problem}
                    alt="Resume analysis and improvement tool"
                    className="w-full h-64 object-cover rounded-xl shadow-medium"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-108 hover:shadow-xl duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative">
                  <img 
                    src={jobAnalyzer} 
                    alt="Job description analyzer"
                    className="w-full h-64 object-cover rounded-xl shadow-medium"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl font-semibold mb-4">
                    <span className="gradient-text">Our Vision</span>
                  </h2>
                  <p className="text-gray-300 text-base">
                    We are building a smart AI-powered companion for every student preparing for placements.
                    <br /><br />
                    Our vision is to bridge the gap between job seekers and job roles using intelligent tools
                    that simulate real-world hiring challenges-making students not just eligible, but truly employable.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-8">
                <span className="gradient-text">Our Toolkit Includes</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Tool 1 */}
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <h3 className="text-lg font-bold mb-2">ATS Resume Checker</h3>
                  <p className="text-gray-300 text-sm">
                    Ensure your resume passes real-world ATS filters with proper keywords and format.
                  </p>
                </div>
                {/* Tool 2 */}
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <h3 className="text-lg font-bold mb-2">Job Description Analyzer</h3>
                  <p className="text-gray-300 text-sm">
                    Upload a JD and instantly compare your resume against it with actionable insights.
                  </p>
                </div>
                {/* Tool 3 */}
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <h3 className="text-lg font-bold mb-2">Domain-Specific Question Bank</h3>
                  <p className="text-gray-300 text-sm">
                    Access MCQs and quizzes tailored to your job role for focused preparation.
                  </p>
                </div>
                {/* Tool 4 */}
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <h3 className="text-lg font-bold mb-2">AI-Powered Mock Interview</h3>
                  <p className="text-gray-300 text-sm">
                    Practice with HR and technical questions. Get instant NLP-based feedback and confidence scoring.                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </div>
  );
};

export default About;
