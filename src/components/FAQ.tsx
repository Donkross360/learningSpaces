import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is AI different from a human tutor?',
      answer: 'Our AI tutors provide 24/7 availability, instant feedback, and personalized learning paths that adapt in real-time to your progress. They excel at identifying patterns in your learning and adjusting content difficulty accordingly. Human tutors bring emotional intelligence, motivation, complex problem-solving guidance, and the ability to explain abstract concepts in creative ways. Together, they create a comprehensive learning experience.'
    },
    {
      question: 'Can I switch facilitators?',
      answer: 'Absolutely! We understand that finding the right learning match is crucial. You can request a different human facilitator at any time through your dashboard. We\'ll match you with someone who better fits your learning style, schedule, and subject expertise. There are no additional fees for switching facilitators.'
    },
    {
      question: 'What subjects do you cover?',
      answer: 'You can bring your own learning materials from any subject! Our AI curates your content into structured learning modules with different difficulty levels based on your abilities. Whether it\'s textbooks, online courses, or study guides, we transform them into personalized curricula. You can also join classroom setups created by facilitators for collaborative learning experiences with other students studying similar topics.'
    },
    {
      question: 'When will LearningSpaces launch?',
      answer: 'We\'re currently in development and plan to launch in early 2025. By joining our waiting list, you\'ll be among the first to know when we go live and will receive exclusive early access to the platform before the general public.'
    },
    {
      question: 'What will be included at launch?',
      answer: 'At launch, you\'ll have access to AI tutors for core subjects (Math, Science, English), personalized learning paths, progress tracking, and human mentor sessions. We\'re also developing advanced features like parent dashboards and exam preparation tools.'
    },
    {
      question: 'Will there be early access pricing?',
      answer: 'Yes! Waiting list members will receive exclusive early bird pricing and special launch offers. You\'ll also get priority access to beta testing opportunities and can help shape the platform before the official launch.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-opensans text-xl text-gray-600">
              Everything you need to know about LearningSpaces
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-900 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="font-inter text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-900" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-opensans text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;