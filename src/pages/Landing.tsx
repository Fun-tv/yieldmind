
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Info, BookOpen, ArrowRight, Star, StarHalf, ThumbsUp, LineChart, BarChart, Users, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  const handleGetStarted = () => {
    toast.success("Welcome to YieldMind!", {
      description: "Let's optimize your DeFi investments together."
    });
  };

  const handleNavigation = (path: string, label: string) => {
    toast.success(`Navigating to ${label}`, {
      description: "Loading content..."
    });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "DeFi Investor",
      comment: "YieldMind has transformed how I manage my DeFi investments. The AI recommendations are spot-on!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Chen",
      role: "Crypto Trader",
      comment: "The portfolio optimization features are incredible. I've seen a 25% increase in my yields.",
      rating: 4.5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Emma Davis",
      role: "Finance Analyst",
      comment: "Best DeFi management platform I've used. The interface is intuitive and the AI is powerful.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    }
  ];

  const businessMetrics = [
    {
      value: "$1.8B+",
      label: "Total Volume",
      icon: <BarChart className="h-6 w-6 text-defi-accent" />
    },
    {
      value: "50,000+",
      label: "Active Users",
      icon: <Users className="h-6 w-6 text-defi-accent" />
    },
    {
      value: "18.7%",
      label: "Avg. Returns",
      icon: <LineChart className="h-6 w-6 text-defi-accent" />
    },
    {
      value: "24/7",
      label: "AI Monitoring",
      icon: <Gauge className="h-6 w-6 text-defi-accent" />
    }
  ];

  const dashboardFeatures = [
    {
      title: "Portfolio Management",
      description: "Track and manage all your DeFi investments in one unified dashboard with real-time data.",
      image: "/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png"
    },
    {
      title: "Yield Optimization",
      description: "Our AI analyzes market conditions to recommend the highest-yielding strategies for your assets.",
      image: "/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png"
    },
    {
      title: "Risk Assessment",
      description: "Advanced analytics that help you understand exposure and mitigate potential risks.",
      image: "/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000B1D] text-white">
      <nav className="w-full px-6 py-4 lg:px-8 border-b border-white/5 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">YIELDMIND</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/product" 
              onClick={() => handleNavigation('/product', 'Product')}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
              <Package className="w-4 h-4" />
              Product
            </Link>
            <Link 
              to="/about"
              onClick={() => handleNavigation('/about', 'About')}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
              <Info className="w-4 h-4" />
              About
            </Link>
            <Link 
              to="/blog"
              onClick={() => handleNavigation('/blog', 'Blog')}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
            <Button 
              variant="secondary" 
              className="bg-[#001538] text-white hover:bg-[#001d4d] border border-white/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/dashboard">Sign in</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              AI-powered<br />
              DeFi agent
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed hover:text-white transition-colors">
              Optimize your decentralized finance strategies and maximize returns with intelligent investment recommendations.
            </p>
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-white text-[#000B1D] hover:bg-white/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
              asChild
            >
              <Link to="/dashboard">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative hidden lg:block animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-[#000B1D] to-transparent z-10 w-32 left-0" />
            <img 
              src="/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png" 
              alt="YieldMind Dashboard Preview" 
              className="rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Business Metrics Section */}
      <div className="relative py-16 bg-gradient-to-b from-[#000B1D] to-[#00142e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 lg:px-8">
            {businessMetrics.map((metric, index) => (
              <div 
                key={metric.label} 
                className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {metric.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-white/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Features Section */}
      <div className="py-24 bg-[#00142e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Powerful Dashboard Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the full potential of our AI-driven platform with these powerful tools
            </p>
          </div>

          <Carousel 
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {dashboardFeatures.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.03]">
                    <CardContent className="p-0">
                      <div className="overflow-hidden rounded-t-lg">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-48 object-cover object-top transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-white/70">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-0" />
            <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-0" />
          </Carousel>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-white/80">
            Join thousands of satisfied users optimizing their DeFi investments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl hover:shadow-white/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-white/20"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <StarHalf className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              <p className="text-white/80 leading-relaxed">{testimonial.comment}</p>
              <div className="mt-4 flex items-center gap-2 text-white/60">
                <ThumbsUp className="w-4 h-4" />
                <span>Verified User</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/5 bg-[#000B1D]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Features</Link></li>
                <li><Link to="/pricing" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Pricing</Link></li>
                <li><Link to="/updates" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Updates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">About</Link></li>
                <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Blog</Link></li>
                <li><Link to="/careers" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Help</Link></li>
                <li><Link to="/documentation" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Documentation</Link></li>
                <li><Link to="/status" className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Follow us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-white/60">
            © 2024 YieldMind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
