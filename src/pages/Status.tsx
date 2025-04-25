
import React from 'react';

const Status = () => {
  return (
    <div className="min-h-screen bg-[#000B1D] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">System Status</h1>
        <p className="text-xl text-white/80 mb-8">
          Check the current status of our services.
        </p>
        <div className="border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-white">All systems operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
