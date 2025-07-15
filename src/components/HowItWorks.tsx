import React from 'react';
import { ClipboardCheck, Users, BookOpen, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Take a 5-min assessment',
      description: 'We analyze your learning style, strengths, and areas for improvement'
    },
    {
      icon: Users,
      title: 'Meet your AI tutor & human facilitator',
      description: 'Get matched with the perfect combination of AI and human expertise'
    },
    {
      icon: BookOpen,
      title: 'Learn in your personalized space',
      description: 'Access tailored lessons and practice in your own digital classroom'
    },
    {
      icon: BarChart3,
      title: 'Track progress with smart analytics',
      description: 'Monitor your growth with detailed insights and adaptive recommendations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with your personalized learning journey in just four simple steps
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-900 via-gold-500 to-purple-900 transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div key={index} className="relative group">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full flex items-center justify-center text-white font-inter font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className="mb-6 mt-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300">
                          <Icon className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-inter text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="font-opensans text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-900 rounded-full shadow-lg z-10"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;