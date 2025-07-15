import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import resumeChecker from '../assets/resumechecker.png';
import problem from '../assets/ai-collaboration.jpg';
import jobAnalyzer from '../assets/jobanalyzer.png';
import aiInterview from '../assets/aiinterview.png';

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
            <div className="feature-card bg-gray-800 text-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    <span className="gradient-text">The Problem</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every year, thousands of students struggle to crack placement interviews-not because they lack knowledge,
                    but because they lack personalized, real-world preparation tools.
                    <br /><br />
                    Resumes get rejected by ATS systems. Job descriptions feel overwhelming. Interviews feel unpredictable.
                    And most importantly, students don't know what to prepare or how close they are to being job-ready.
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
            </div> {/* Closing div for The Problem */}

            <div className="feature-card bg-gray-800 text-white rounded-2xl p-8 shadow-2xl">
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
                  <p className="text-muted-foreground leading-relaxed">
                    We are building a smart AI-powered companion for every student preparing for placements.
                    <br /><br />
                    Our vision is to bridge the gap between job seekers and job roles using intelligent tools
                    that simulate real-world hiring challenges-making students not just eligible, but truly employable.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card bg-gray-800 text-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    <span className="gradient-text">Our Toolkit Includes</span>
                  </h2>
                  <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                    <li><strong> ATS Resume Checker:</strong> Ensure your resume passes real-world ATS filters with proper keywords and format.</li>
                    <li><strong> Job Description Analyzer:</strong> Upload a JD and instantly compare your resume against it with actionable insights.</li>
                    <li><strong> AI-Powered Mock Interview:</strong> Practice with HR and technical questions. Get instant NLP-based feedback and confidence scoring.</li>
                    <li><strong> Domain-Specific Question Bank:</strong> Access MCQs and quizzes tailored to your job role for focused preparation.</li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src={aiInterview} 
                    alt="AI mock interview simulation"
                    className="w-full h-64 object-cover rounded-xl shadow-medium"
                  />
                </div>
              </div>
            </div>

            <div className="feature-card bg-gray-800 text-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    <span className="gradient-text">Our Mission</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  To empower every student with the tools and confidence they need to navigate the placement process,
                  land their dream job, and unlock their potential â€” no matter where they come from.
                </p>
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