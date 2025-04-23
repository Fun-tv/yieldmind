
import React from 'react';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import QuickActions from '@/components/QuickActions';
import PortfolioCard from '@/components/PortfolioCard';
import StrategyCard from '@/components/StrategyCard';
import YieldForecastChart from '@/components/YieldForecastChart';
import ActivityLog from '@/components/ActivityLog';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-defi-dark text-defi-text">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">What would you like to do today?</h1>
          <div className="flex items-center gap-3">
            <div className="text-sm text-defi-muted">Svv41/2235678</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
        
        <SearchBar />
        <QuickActions />
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-8/12 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Strategies</h2>
              <StrategyCard />
            </div>
            
            <ActivityLog />
          </div>
          
          <div className="w-full lg:w-4/12 space-y-6">
            <PortfolioCard />
            <YieldForecastChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
