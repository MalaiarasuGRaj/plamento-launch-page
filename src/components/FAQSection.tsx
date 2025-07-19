import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is this platform all about?",
      answer: "Our platform is an AI-powered interview and career preparation tool that helps students and professionals become job-ready through smart resume checks, mock interviews, job description analyzers, and personalized domain-specific skill assessments - all in one place.",
    },
    {
      question: "What kind of questions does the AI ask?",
      answer: "The AI generates behavioral, technical, and situational questions tailored to your resume, selected job role, and job description. It adapts to your profile for a realistic mock interview experience.",
    },
    {
      question: "Can I target specific companies or roles?",
      answer: "Yes! You can upload a job description or specify a company/role, and the system will tailor your interview questions and resume comparison accordingly.",
    },
    {
      question: "What is an ATS Resume Checker?",
      answer: "It scans your resume the same way a recruiter’s Applicant Tracking System would — checking format, keywords, and relevance to improve your chances of being shortlisted.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-300">
            Find answers to the most common questions about Plamento.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;