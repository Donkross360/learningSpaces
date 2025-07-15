import React, { useState } from 'react';
import { Check, Brain, Users, Star } from 'lucide-react';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Basic',
      price: isMonthly ? 9.99 : 99.99,
      period: isMonthly ? 'month' : 'year',
      description: 'AI tutor only',
      features: [
        'Unlimited AI tutoring sessions',
        'Personalized learning paths',
        'Progress tracking & analytics',
        'Study materials & resources',
        'Mobile app access',
        'Email support'
      ],
      icon: Brain,
      popular: false,
      color: 'purple'
    },
    {
      name: 'Premium',
      price: isMonthly ? 29.99 : 299.99,
      period: isMonthly ? 'month' : 'year',
      description: 'AI + weekly human sessions',
      features: [
        'Everything in Basic',
        'Weekly 1-on-1 human mentor sessions',
        'Priority support',
        'Advanced analytics & insights',
        'Custom learning goals',
        'Parent/guardian progress reports',
        'Exam preparation assistance'
      ],
      icon: Users,
      popular: true,
      color: 'gold'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-white mb-4">
              Choose Your Learning Plan
            </h2>
            <p className="font-opensans text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Start with AI-powered tutoring and upgrade to include human mentorship
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-800 rounded-xl p-1 border border-gray-700">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                  isMonthly
                    ? 'bg-gradient-to-r from-purple-900 to-purple-800 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                  !isMonthly
                    ? 'bg-gradient-to-r from-purple-900 to-purple-800 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-gold-500 text-black text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isGold = plan.color === 'gold';
              
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-gold-500 shadow-xl scale-105'
                      : 'border-gray-200 shadow-lg hover:border-purple-900'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full font-inter font-semibold text-sm flex items-center space-x-1 shadow-lg">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      isGold ? 'bg-gold-500' : 'bg-gradient-to-br from-purple-900 to-purple-800'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-inter text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="font-opensans text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="font-inter text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="font-opensans text-gray-600">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          isGold ? 'bg-gold-100' : 'bg-purple-100'
                        }`}>
                          <Check className={`w-3 h-3 ${isGold ? 'text-gold-600' : 'text-purple-900'}`} />
                        </div>
                        <span className="font-opensans text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-inter font-semibold transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-purple-900 to-purple-800 text-white hover:from-purple-950 hover:to-purple-900 shadow-lg hover:shadow-xl'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="font-opensans text-gray-400">
              All plans include a 7-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;