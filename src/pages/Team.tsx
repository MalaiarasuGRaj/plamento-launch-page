import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import team member photos
const malaiarasuPhoto = '/lovable-uploads/5c6496f4-6bda-4ac1-98ec-7635d763724a.png';
const rahulPhoto = '/lovable-uploads/36f2af4e-d789-46bb-b6ab-d5cc7baf4760.png';
const rohanPhoto = '/lovable-uploads/9f3ce78d-1dcb-428a-b14d-66b6ca236c9a.png';

const Team = () => {
  const coreTeam = [
    {
      name: "Malaiarasu G Raj",
      role: "Founder & Developer",
      photo: malaiarasuPhoto,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Rahul Raja P",
      role: "UI/UX Designer",
      photo: rahulPhoto,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Rohan S",
      role: "Backend & AI Lead",
      photo: rohanPhoto,
      linkedin: "#",
      github: "#"
    }
  ];

  const mentor = {
    name: "[Mentor Name]",
    role: "Faculty Guide / Technical Advisor",
    affiliation: "[Institution or Department]",
    linkedin: "#"
  };

  const advisors = [
    { name: "[Advisor 1]", support: "AI / NLP" },
    { name: "[Advisor 2]", support: "Career Readiness / Industry Mentorship" }
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
              To democratize placement preparation with AI tools that are smart, personalized, 
              and accessible to every student — no matter their background or experience.
            </p>
          </div>

          {/* Core Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">💼 Our Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {coreTeam.map((member, index) => (

                <div key={index} className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <div className="flex justify-center">
                      <a href={member.linkedin} target='_blank' rel='noopener noreferrer' className="text-blue-500 hover:text-blue-600 transition-colors underline">
                        LinkedIn
                      </a>
                    </div>
                    <div className="flex justify-center">
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">GitHub</a>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentor */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">🎓 Our Mentor</h2>
            <p className="text-lg font-medium">{mentor.name}</p>
            <p className="text-muted-foreground">{mentor.role}</p>
            <p className="text-muted-foreground">{mentor.affiliation}</p>
            <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              LinkedIn
            </a>
          </div>

          {/* Advisors */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">💡 Advisors</h2>
            <div className="space-y-4">
              {advisors.map((advisor, index) => (
                <div key={index}>
                  <p className="text-lg font-medium">{advisor.name}</p>
                  <p className="text-muted-foreground">Area of Support: {advisor.support}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
