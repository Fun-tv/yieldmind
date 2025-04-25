
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, MessageSquare, Shield, Wallet, BarChart3, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0C16] to-[#131726] text-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xl">D</span>
            </div>
            <h1 className="ml-3 text-xl font-bold">DeFi AI Agent</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-white/70 hover:text-white transition-colors">Dashboard</Link>
            <Link to="/documentation" className="text-white/70 hover:text-white transition-colors">Docs</Link>
            <Link to="/resources" className="text-white/70 hover:text-white transition-colors">Resources</Link>
            <Button variant="ghost" className="hover:bg-white/10">Login</Button>
            <Button className="bg-[#9b87f5] hover:bg-[#8670e3] text-white">Sign Up</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background gradient mesh */}
          <div className="absolute top-0 left-[10%] w-[40rem] h-[40rem] bg-[#9b87f5]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-[10%] w-[30rem] h-[30rem] bg-[#7E69AB]/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-24 lg:pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">
                  AI-Powered
                </span>
                <br /> DeFi Intelligence Platform
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Make smarter DeFi investment decisions with AI-driven insights, real-time tracking, and automated portfolio management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 text-white px-8 shadow-lg"
                  asChild
                >
                  <Link to="/dashboard">
                    Go to Dashboard <ArrowRight className="ml-2" />
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
            <div className="hidden lg:flex justify-end relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="DeFi Dashboard Preview" 
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#9b87f5] rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">AI Analysis Active</span>
                </div>
                <p className="text-sm text-white/80 mt-1">Optimizing yield strategies based on market conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#1A1F2C]/50 py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9b87f5]">$1.2B+</p>
              <p className="text-white/70 mt-1">Total Volume</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9b87f5]">85K+</p>
              <p className="text-white/70 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9b87f5]">12%</p>
              <p className="text-white/70 mt-1">Avg. Returns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#9b87f5]">24/7</p>
              <p className="text-white/70 mt-1">AI Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful DeFi Features</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to maximize your DeFi returns with AI intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946] hover:border-[#9b87f5]/50 transition-all hover:shadow-lg hover:shadow-[#9b87f5]/10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Tracking</h3>
              <p className="text-white/70">Real-time analytics and insights for your DeFi investments across multiple chains and protocols</p>
            </div>

            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946] hover:border-[#9b87f5]/50 transition-all hover:shadow-lg hover:shadow-[#9b87f5]/10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-white/70">Get personalized investment recommendations and risk assessments from our advanced AI agent</p>
            </div>

            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946] hover:border-[#9b87f5]/50 transition-all hover:shadow-lg hover:shadow-[#9b87f5]/10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Operations</h3>
              <p className="text-white/70">Enterprise-grade security for your DeFi transactions with smart contract audits and risk analysis</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946] hover:border-[#9b87f5]/50 transition-all hover:shadow-lg hover:shadow-[#9b87f5]/10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wallet Integration</h3>
              <p className="text-white/70">Connect multiple wallets and track all your assets in one unified dashboard</p>
            </div>

            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946] hover:border-[#9b87f5]/50 transition-all hover:shadow-lg hover:shadow-[#9b87f5]/10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy Testing</h3>
              <p className="text-white/70">Backtest your investment strategies with historical data before deploying real capital</p>
            </div>

            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946] hover:border-[#9b87f5]/50 transition-all hover:shadow-lg hover:shadow-[#9b87f5]/10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Yield Optimization</h3>
              <p className="text-white/70">Automatically find and deploy to the highest yield opportunities across DeFi protocols</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-[#131726]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by DeFi Leaders</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "DeFi Portfolio Manager",
                quote: "The AI insights have transformed my yield farming strategy. I'm now seeing 28% better returns with lower risk.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Crypto Fund Analyst",
                quote: "Best portfolio tracking solution I've used. The real-time market alerts have saved me from multiple liquidation events.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80"
              },
              {
                name: "Marcus Williams",
                role: "Blockchain Developer",
                quote: "The security features give me peace of mind when interacting with new protocols. The smart contract analysis is outstanding.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1A1F2C] p-8 rounded-xl border border-[#232946]">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#9b87f5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-[#0A0C16]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A1F2C] to-[#232946] p-10 md:p-16 rounded-2xl border border-[#9b87f5]/20 shadow-xl shadow-[#9b87f5]/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your DeFi Strategy?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of users making smarter DeFi decisions with our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 text-white px-8 shadow-lg"
                asChild
              >
                <Link to="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/documentation">
                  Read Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#0A0C16] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-xl">D</span>
                </div>
                <h1 className="ml-3 text-xl font-bold">DeFi AI Agent</h1>
              </div>
              <p className="mt-4 text-white/60 text-sm">
                Advanced AI-powered platform for DeFi investments, portfolio tracking, and yield optimization.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/strategies" className="hover:text-white transition-colors">Strategies</Link></li>
                <li><Link to="/chat" className="hover:text-white transition-colors">AI Assistant</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Learning Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 DeFi AI Agent. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Github
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

