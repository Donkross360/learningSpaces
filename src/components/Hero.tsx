import React from 'react';
import { Brain, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-gold-50 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-900/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gold-500/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-900/20 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="font-inter text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Tutors. <span className="text-purple-900">Human Mentors.</span>
                <span className="text-gold-500 block">Perfect Learning.</span>
              </h1>
              
              <p className="font-opensans text-xl text-gray-600 mb-8 leading-relaxed">
                Get personalized 1:1 tutoring in your own digital learning space with AI-powered adaptivity and expert human guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="/waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-inter font-semibold rounded-xl hover:from-purple-950 hover:to-purple-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Join Waiting List
                  <Sparkles className="ml-2 w-5 h-5" />
                </a>
                
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-900 text-purple-900 font-inter font-semibold rounded-xl hover:bg-purple-900 hover:text-white transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              {/* Domain Badge */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 font-opensans">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Proudly hosted at LearningSpaces.im
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* AI Tutor Interface Mockup */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-inter font-semibold text-gray-900">AI Tutor Jaz</p>
                        <p className="font-opensans text-sm text-gray-500">Math & Physics</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gold-500" />
                      <span className="font-opensans text-sm text-gray-600">+ Human Mentor</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-2xl p-4">
                      <p className="font-opensans text-sm text-purple-900">
                        "I've analyzed your learning pattern. Let's focus on quadratic equations today with a visual approach that matches your style."
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-4 text-right">
                      <p className="font-opensans text-sm text-gray-700">
                        "That sounds great! I learn better with examples."
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-4">
                      <p className="font-opensans text-sm text-gold-800">
                        <span className="font-semibold">Progress Update:</span> 89% improvement in problem-solving speed this week! 🎉
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center animate-bounce-slow">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-900 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;