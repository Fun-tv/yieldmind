
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="min-h-screen bg-[#000B1D] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Product</h1>
        <p className="text-xl text-white/80 mb-8">
          Discover how our AI-powered DeFi agent can revolutionize your investment strategy.
        </p>
        <Button asChild>
          <Link to="/dashboard">Try Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Product;
