
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0E1014] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] mb-6">
              AI-Powered DeFi Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Make smarter DeFi decisions with AI-driven insights, real-time tracking, and automated portfolio management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8"
                asChild
              >
                <Link to="/login">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/documentation">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-[#131726]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for DeFi Success</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to maximize your DeFi returns with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A1F2C] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Portfolio Tracking</h3>
              <p className="text-white/70">Real-time analytics and insights for your DeFi investments</p>
            </div>

            <div className="bg-[#1A1F2C] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-white/70">Get personalized recommendations from our advanced AI agent</p>
            </div>

            <div className="bg-[#1A1F2C] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Operations</h3>
              <p className="text-white/70">Enterprise-grade security for your DeFi transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by DeFi Enthusiasts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "DeFi Trader",
                quote: "The AI insights have completely transformed how I approach yield farming.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Portfolio Manager",
                quote: "Best portfolio tracking solution I've used. The real-time updates are invaluable.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80"
              },
              {
                name: "Marcus Williams",
                role: "Crypto Investor",
                quote: "Security features give me peace of mind when interacting with smart contracts.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1A1F2C] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-[#131726]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your DeFi Strategy?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join thousands of users making smarter DeFi decisions with AI-powered insights
          </p>
          <Button 
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8"
            asChild
          >
            <Link to="/login">
              Get Started Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
