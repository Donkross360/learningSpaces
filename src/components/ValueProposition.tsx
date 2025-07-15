import React from 'react';
import { Brain, Heart, Home } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Adaptivity',
      description: 'Tutors adjust to your learning style in real-time.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Human Guidance',
      description: 'Expert mentors for motivation and complex topics.',
      color: 'gold'
    },
    {
      icon: Home,
      title: 'Your Space, Your Rules',
      description: 'Learn anytime, anywhere, at your pace.',
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-gray-900 mb-4">
              Why Choose LearningSpaces?
            </h2>
            <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of cutting-edge AI technology and human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isGold = feature.color === 'gold';
              
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isGold ? 'bg-gradient-to-br from-gold-50 to-gold-100' : 'bg-gradient-to-br from-purple-50 to-purple-100'
                  }`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      isGold ? 'bg-gold-500 group-hover:bg-gold-600' : 'bg-gradient-to-br from-purple-900 to-purple-800 group-hover:from-purple-950 group-hover:to-purple-900'
                    } transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-inter text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="font-opensans text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                    isGold ? 'bg-gold-500' : 'bg-purple-900'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;