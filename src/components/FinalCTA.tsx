import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gold-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-gold-500" />
            </div>
            
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Be among the first to experience the future of learning
            </h2>
            
            <p className="font-opensans text-xl text-purple-100 mb-8 leading-relaxed">
              Join our exclusive waiting list and get early access to LearningSpaces when we launch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/waitlist"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-gray-900 font-inter font-bold rounded-xl hover:bg-gold-400 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
            >
              Join Waiting List
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-inter font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200">
              Get Notified
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-white mb-2">500+</div>
                <div className="font-opensans text-sm text-purple-100">Early Adopters</div>
              </div>
              <div className="text-center">
                <div className="font-inter text-3xl font-bold text-white mb-2">Coming Soon</div>
                <div className="font-opensans text-sm text-purple-100">Launch Date</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="font-opensans text-purple-100 text-sm">
              No spam, ever • Early access guaranteed • Be the first to know
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;