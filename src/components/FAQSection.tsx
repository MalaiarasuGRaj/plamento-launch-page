import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What kind of questions does the AI ask?",
      answer: "Our AI is trained on a vast dataset of interview questions across various roles and industries, including behavioral, technical, and situational questions. Questions are tailored to your profile.",
    },
    {
      question: "How accurate is the AI feedback?",
      answer: "The AI uses natural language processing (NLP) and machine learning to analyze your responses, tone, and pace. It provides detailed feedback on content, clarity, confidence, and areas for improvement.",
    },
    {
      question: "Can I practice for specific companies or roles?",
      answer: "Yes, you can customize your mock interviews to focus on specific companies or job roles by providing relevant keywords and job descriptions.",
    },
    {
      question: "Is my data private and secure?",
      answer: "We take data privacy seriously. All your practice sessions and personal information are securely stored and kept confidential.",
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