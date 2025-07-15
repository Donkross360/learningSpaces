import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-3xl p-12 border border-gray-100 shadow-xl">
            {/* Quote Icon */}
            <div className="mb-8">
              <svg className="w-16 h-16 text-purple-900 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Text */}
            <blockquote className="font-opensans text-2xl text-gray-800 mb-8 leading-relaxed italic">
              "LearningSpaces helped me improve my math grade from a C to an A in 3 months! The AI tutor understood exactly how I learn best, and my human mentor kept me motivated through the tough concepts."
            </blockquote>

            {/* Student Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full flex items-center justify-center text-white font-inter font-bold text-xl">
                SK
              </div>
              
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="font-inter font-semibold text-gray-900">Sarah K.</p>
                  <div className="flex items-center space-x-1 text-green-600">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-opensans text-sm">Verified Student</span>
                  </div>
                </div>
                <p className="font-opensans text-gray-600">10th Grade</p>
                
                {/* Star Rating */}
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-purple-900 mb-2">C → A</div>
                <div className="font-opensans text-sm text-gray-600">Grade Improvement</div>
              </div>
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-gold-500 mb-2">3</div>
                <div className="font-opensans text-sm text-gray-600">Months</div>
              </div>
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-purple-900 mb-2">95%</div>
                <div className="font-opensans text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;