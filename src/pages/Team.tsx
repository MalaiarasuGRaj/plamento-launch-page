import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import team member photos
import mentorPhoto from '/src/assets/mentor.jpeg';
import malaiarasuPhoto from '/src/assets/malaiarasu.png';
import rahulPhoto from '/src/assets/rahul.png';
import rohanPhoto from '/src/assets/rohan.png';
import muraliSirPhoto from '/src/assets/murali-sir.jpeg';

const Team = () => {
  const coreTeam = [
    {
      name: 'Malaiarasu G Raj',
      role: 'Founder & Developer',
      photo: malaiarasuPhoto,
      linkedin: 'https://www.linkedin.com/in/mgraj/',
      portfolio: 'https://mgraj-portfolio.lovable.app/',
    },
    {
      name: 'Rohan S',
      role: 'UI/UX Designer',
      photo: rohanPhoto,
      linkedin: 'https://www.linkedin.com/in/rohan-s-34a631285/',
    },
    {
      name: 'Rahul Raja P',
      role: 'Backend & AI Lead',
      photo: rahulPhoto,
      linkedin: 'https://www.linkedin.com/in/rahul-raja-p-124639252/',
    },
  ];

  const mentor = {
    name: 'Mr.A.Shenbagharaman',
    role: 'Faculty Guide',
    affiliation: 'Department of AI & DS, National Engineering College',
    vidwan: 'https://vidwan.inflibnet.ac.in/profile/252862',
  };

  const advisors = [
    {
      name: 'Mr. Murali Dharan Rajasekar',
      designation: 'Director - CONNECT Training Solutions (P) Ltd.',
      support: 'Career Readiness',
      photo: muraliSirPhoto,
      linkedin: 'https://www.linkedin.com/in/connectmurali/',
    },
    {
      name: 'Future Advisor',
      designation: 'Expert in AI/NLP',
      support: 'AI / NLP',
      photo: '',
      linkedin: '',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              To democratize interview preparation with AI tools that are smart,
              personalized, and accessible to every individual — no matter their
              background or experience.
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-semibold">Our Core Team</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-primary">
                    <img
                      src={member.photo}
                      alt={`${member.name}'s photo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="mt-2 flex w-full justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline transition-colors hover:text-blue-600"
                    >
                      LinkedIn
                    </a>
                    {member.name === 'Malaiarasu G Raj' && (
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
          <div className="mx-auto my-12 w-full max-w-4xl border-b border-gray-700"></div>

          {/* Mentor */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-semibold">Our Mentor</h2>
            <div className="mx-auto flex w-full transform flex-col items-center justify-center space-y-4 rounded-lg bg-gray-800 p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl md:w-2/3 md:flex-row md:space-x-8 md:space-y-0 lg:w-1/2">
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border-4 border-primary">
                <img
                  src={mentorPhoto}
                  alt="Mr.A.Shenbagharaman's photo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <p className="mb-1 text-xl font-medium">{mentor.name}</p>
                <p className="text-md mb-1 text-muted-foreground">
                  {mentor.role}
                </p>
                <p className="text-md mb-2 text-muted-foreground">
                  {mentor.affiliation}
                </p>
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
          <div className="mx-auto my-12 w-full max-w-4xl border-b border-gray-700"></div>

          {/* Advisors */}
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-semibold">Industry Advisors</h2>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="flex h-80 w-80 transform flex-col items-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-primary">
                    {advisor.photo ? (
                      <img
                        src={advisor.photo}
                        alt={`${advisor.name}'s photo`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-600 text-white">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2 text-lg font-semibold">
                      {advisor.name}
                    </h3>
                    <p className="mb-2 text-sm text-gray-400">
                      {advisor.designation}
                    </p>
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">Area of Support:</span>{' '}
                      {advisor.support}
                    </p>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline transition-colors hover:text-blue-600"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
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
