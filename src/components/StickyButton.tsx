import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a
        href="/waitlist"
        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-inter font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 border-2 border-white/20"
      >
        Join Waitlist
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyButton;