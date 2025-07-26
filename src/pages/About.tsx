import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import resumeChecker from '../assets/resumechecker.png';
import problem from '../assets/ai-collaboration.jpg';
import visionImage from '../assets/our-vision.png';
import {
  FileText,
  Search,
  BookOpen,
  Mic,
  LucideIcon,
} from 'lucide-react';

const About = () => {
  const tools: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: 'ATS Resume Checker',
      description:
        'Ensure your resume passes real-world ATS filters with proper keywords and format.',
      icon: FileText,
    },
    {
      title: 'Job Description Analyzer',
      description:
        'Upload a JD and instantly compare your resume against it with actionable insights.',
      icon: Search,
    },
    {
      title: 'Skill-Based Assessment',
      description:
        'Take AI-generated tests with questions tailored to your skills and job role - for targeted, real-world interview preparation.',
      icon: BookOpen,
    },
    {
      title: 'AI-Powered Mock Interview',
      description:
        'Practice with HR and technical questions. Get instant NLP-based feedback and confidence scoring.',
      icon: Mic,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />{' '}
      <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-4xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              About <span className="gradient-text">Plamento</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your smart AI-powered companion for cracking job interviews
            </p>
          </div>

          <div className="grid gap-16">
            <div className="hover:scale-108 hover:shadow-xlInfluence the Product flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-left text-2xl font-semibold">
                    <span className="gradient-text mx-auto block w-max">
                      The Problem
                    </span>
                  </h2>
                  <p className="text-base text-gray-300">
                    Every year, thousands of individuals struggle to crack
                    placement interviews-not because they lack knowledge, but
                    because they lack personalized, real-world preparation
                    tools.
                    <br />
                    <br />
                    Resumes get rejected by ATS systems. Job descriptions feel
                    overwhelming. Interviews feel unpredictable. And most
                    importantly, many candidates don't know what to prepare or
                    how close they are to being job-ready.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={problem}
                    alt="Resume analysis and improvement tool"
                    className="h-64 w-full rounded-xl object-cover shadow-medium"
                  />
                </div>
              </div>
            </div>
            <div className="hover:scale-108 flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:shadow-xl">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="relative order-2 lg:order-1">
                  <img
                    src={visionImage}
                    alt="Job description analyzer"
                    className="h-64 w-full rounded-xl object-cover shadow-medium"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="mb-4 text-2xl font-semibold">
                    <span className="gradient-text">Our Vision</span>
                  </h2>
                  <p className="text-base text-gray-300">
                    We are building a smart AI-powered companion for every
                    candidate preparing for placements.
                    <br />
                    <br />
                    Our vision is to bridge the gap between job seekers and job
                    roles using intelligent tools that simulate real-world
                    hiring challenges-making them not just eligible, but truly
                    employable.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-16 text-center">
              <h2 className="mb-8 text-3xl font-bold">
                <span className="gradient-text">Our Toolkit Includes</span>
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group relative flex transform flex-col rounded-xl border border-gray-700 bg-gray-800/80 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-700">
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-100">
                          {tool.title}
                        </h3>
                      </div>
                      <p className="text-base text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
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
