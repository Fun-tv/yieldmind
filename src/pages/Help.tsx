
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="min-h-screen bg-[#000B1D] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Help Center</h1>
        <p className="text-xl text-white/80 mb-8">
          Get support and answers to your questions.
        </p>
        <div className="grid gap-4">
          <Button asChild variant="outline">
            <Link to="/documentation">View Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Help;
