'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Check,
  Star,
  Twitter,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';
import { useState } from 'react';

const cryptoData = [
  { name: 'BTC', price: '$64,234', change: '+5.2%', positive: true },
  { name: 'ETH', price: '$3,456', change: '+3.8%', positive: true },
  { name: 'SOL', price: '$142', change: '-1.2%', positive: false },
  { name: 'ADA', price: '$0.58', change: '+7.4%', positive: true },
];

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Predictions',
    description: 'Advanced machine learning algorithms analyze market patterns to predict potential price movements with 87% accuracy.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Trading Signals',
    description: 'Get instant notifications for high-probability trading opportunities based on technical indicators and sentiment analysis.',
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Comprehensive risk analysis tools help you make informed decisions and protect your investments from volatile market conditions.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Analysis',
    description: 'Process thousands of data points in milliseconds to give you the edge in fast-moving cryptocurrency markets.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    features: [
      'Basic AI insights',
      'Real-time market data',
      '10 trading signals/day',
      'Email support',
      'Mobile app access',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    features: [
      'Advanced AI predictions',
      'Unlimited trading signals',
      'Risk assessment tools',
      'Priority support',
      'Portfolio tracking',
      'API access',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    features: [
      'Everything in Pro',
      'Custom AI models',
      'Dedicated account manager',
      'White-label solutions',
      'Advanced analytics',
      'Team collaboration',
    ],
    highlighted: false,
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Day Trader',
    content: 'CryptoAI has transformed my trading strategy. The AI predictions are incredibly accurate and have helped me increase my portfolio by 43% in just 3 months.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Crypto Investor',
    content: 'The risk assessment tools are a game-changer. I feel much more confident in my investment decisions knowing I have data-backed insights.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Portfolio Manager',
    content: 'Best crypto analysis platform I\'ve used. The real-time signals and comprehensive data visualization make it essential for professional trading.',
    rating: 5,
  },
];

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for signing up with ${email}!`);
    setEmail('');
  };

  return (
    <main className="min-h-screen bg-dark-300">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-dark-400/80 backdrop-blur-lg z-50 border-b border-primary/20"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">CryptoAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Crypto Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {cryptoData.map((crypto, idx) => (
            <motion.div
              key={crypto.name}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="absolute animate-float"
              style={{
                top: `${20 + idx * 15}%`,
                left: `${10 + idx * 20}%`,
                animationDelay: `${idx * 0.5}s`,
              }}
            >
              <div className="bg-dark-200/80 backdrop-blur-sm border border-primary/30 rounded-xl p-4 w-48">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{crypto.name}</span>
                  <span className={crypto.positive ? 'text-secondary' : 'text-red-500'}>
                    {crypto.change}
                  </span>
                </div>
                <div className="text-2xl font-bold mt-2 glow-primary">{crypto.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Trade Smarter with AI
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Unlock the power of artificial intelligence to make data-driven cryptocurrency trading decisions with confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 animate-glow">
                Start Trading Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors">
                Watch Demo
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span>14-day free trial</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-gradient">AI-Driven Insights</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Harness cutting-edge artificial intelligence to gain an unfair advantage in the cryptocurrency markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-dark-200 border border-primary/30 rounded-2xl p-8 hover:border-primary transition-all cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Chart Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-dark-200 border border-primary/30 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6">Real-Time Market Analysis</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {cryptoData.map((crypto) => (
                <div key={crypto.name} className="bg-dark-300 rounded-lg p-4 border border-primary/20">
                  <div className="text-sm text-gray-400 mb-1">{crypto.name}/USD</div>
                  <div className="text-2xl font-bold mb-2">{crypto.price}</div>
                  <div className={`text-sm font-semibold ${crypto.positive ? 'text-secondary' : 'text-red-500'}`}>
                    {crypto.change}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-64 bg-dark-300 rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 0 200 Q 100 150, 200 180 T 400 120 T 600 140 T 800 80"
                  stroke="#00d4ff"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 0 200 Q 100 150, 200 180 T 400 120 T 600 140 T 800 80 L 800 300 L 0 300 Z"
                  fill="url(#gradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-dark-400/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-gradient">Trusted by Traders Worldwide</h2>
            <p className="text-xl text-gray-400">Join thousands of successful traders using CryptoAI</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-200 border border-primary/30 rounded-2xl p-8 hover:border-primary transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-gradient">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your trading style</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-dark-200 rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'border-2 border-primary scale-105 shadow-2xl shadow-primary/20'
                    : 'border border-primary/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-secondary hover:scale-105'
                      : 'border-2 border-primary hover:bg-primary/10'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">Ready to Transform Your Trading?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join over 50,000 traders using AI-powered insights to maximize their profits.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-lg bg-dark-200 border border-primary/30 focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:scale-105 transition-transform whitespace-nowrap"
              >
                Start Free Trial
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">No credit card required • 14-day free trial</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-400 border-t border-primary/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-gradient">CryptoAI</span>
              </div>
              <p className="text-gray-400">
                AI-powered cryptocurrency analysis and trading platform.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CryptoAI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Email" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
