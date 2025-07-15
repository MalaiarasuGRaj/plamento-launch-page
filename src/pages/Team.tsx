import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import team member photos
import mentorPhoto from '/src/assets/mentor.jpeg';
const malaiarasuPhoto = '/lovable-uploads/5c6496f4-6bda-4ac1-98ec-7635d763724a.png';
const rahulPhoto = '/lovable-uploads/9f3ce78d-1dcb-428a-b14d-66b6ca236c9a.png';
const rohanPhoto = '/lovable-uploads/36f2af4e-d789-46bb-b6ab-d5cc7baf4760.png';

const Team = () => {
  const coreTeam = [
    {
      name: "Malaiarasu G Raj",
      role: "Founder & Developer",
      photo: malaiarasuPhoto,
      linkedin: "https://www.linkedin.com/in/mgraj/",
      portfolio: "https://mgraj-portfolio.lovable.app/"
    },
    {
      name: "Rohan S",
      role: "UI/UX Designer",
      photo: rohanPhoto,
      linkedin: "https://www.linkedin.com/in/rohan-s-34a631285/"
    },
    {
      name: "Rahul Raja P",
      role: "Backend & AI Lead",
      photo: rahulPhoto,
      linkedin: "https://www.linkedin.com/in/rahul-raja-p-124639252/"
    }
  ];

  const mentor = {
    name: "Mr.A.Shenbagharaman",
    role: "Faculty Guide",
    affiliation: "Department of AI & DS, National Engineering College",
    vidwan: "https://vidwan.inflibnet.ac.in/profile/252862"
  };

  const advisors = [
    { name: "[Advisor 1]", support: "Career Readiness / Industry Mentorship" },
    { name: "[Advisor 2]", support: "AI / NLP" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Mission */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To democratize interview preparation with AI tools that are smart, personalized,
              and accessible to every individual — no matter their background or experience.
            </p>
          </div>

          {/* Core Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">💼 Our Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="flex justify-center gap-4 mt-2 w-full">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors underline"
                    >
                      LinkedIn
                    </a>
                    {member.name === "Malaiarasu G Raj" && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 underline"
                      >
                        Portfolio
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-700 w-full max-w-4xl mx-auto my-12"></div>

          {/* Mentor */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">🎓 Our Mentor</h2>
            <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex items-center justify-center space-x-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 mx-auto w-full md:w-2/3 lg:w-1/2">
              <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 md:mb-0 border-4 border-primary flex-shrink-0">
                <img src={mentorPhoto} alt="Mentor Photo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start text-left">
                <p className="text-xl font-medium mb-1">{mentor.name}</p>
                <p className="text-md text-muted-foreground mb-1">{mentor.role}</p>
                <p className="text-md text-muted-foreground mb-2">{mentor.affiliation}</p>
                <a
                  href={mentor.vidwan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Vidwan Profile
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-700 w-full max-w-4xl mx-auto my-12"></div>

          {/* Advisors */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">💡 Industry Advisors</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 w-64 h-72"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white">
                      No Photo
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">{advisor.name}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Area of Support:</span> {advisor.support}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> {/* Close Advisors section */}
        </div> {/* Close max-w-6xl div */}
      </div>
      <Footer /> {/* Footer is now outside the main content div */}
    </div>
  );
};

export default Team;