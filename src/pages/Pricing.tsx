
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#000B1D] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
        <p className="text-xl text-white/80 mb-8">
          Choose the perfect plan for your investment needs.
        </p>
        <Button asChild>
          <Link to="/dashboard">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
