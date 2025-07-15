import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle, Mail, User, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface WaitlistForm {
  email: string;
  name?: string;
}

const WaitlistPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WaitlistForm>();

  const onSubmit = async (data: WaitlistForm) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          {
            email: data.email,
            name: data.name || null,
          }
        ]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already on our waitlist!');
        } else {
          setError('Something went wrong. Please try again.');
        }
        return;
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-gold-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="font-inter text-3xl font-bold text-gray-900 mb-4">
              You're on the list! 🎉
            </h1>
            
            <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
              Thank you for joining our waitlist. You'll be among the first to know when LearningSpaces launches.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-gold-50 rounded-2xl p-4 mb-6">
              <p className="font-opensans text-sm text-gray-700">
                <strong>What's next?</strong> We'll send you exclusive updates, early access, and special launch pricing.
              </p>
            </div>
            
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-inter font-semibold rounded-xl hover:from-purple-950 hover:to-purple-900 transition-all duration-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-gold-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="font-inter text-4xl font-bold text-gray-900 mb-4">
            Join the Waitlist
          </h1>
          
          <p className="font-opensans text-xl text-gray-600 leading-relaxed">
            Be the first to experience the future of AI-powered learning
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="font-opensans text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block font-inter font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl font-opensans focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 font-opensans text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="name" className="block font-inter font-semibold text-gray-900 mb-2">
                Name (Optional)
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl font-opensans focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-inter font-semibold rounded-xl hover:from-purple-950 hover:to-purple-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-900 rounded-full"></div>
                <span>Early access</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Special pricing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/"
            className="font-opensans text-gray-600 hover:text-purple-900 transition-colors duration-200"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;