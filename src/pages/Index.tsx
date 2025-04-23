
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
    <div className="flex min-h-screen bg-[#131726] text-white relative">
      <Sidebar />
      <main className="flex-1 flex flex-col p-12 pt-8 max-w-full transition-all overflow-x-auto bg-[#101222]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">What would you like to do today?</h1>
          <div className="flex items-center gap-4 bg-[#151926] rounded-xl px-5 py-3 border border-[#232946]">
            <span className="text-sm text-white/35 font-mono">Svv41/2235678</span>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#222843]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/50">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              </svg>
            </div>
          </div>
        </div>
        <SearchBar />

        <QuickActions />

        <div className="flex flex-col lg:flex-row w-full gap-6">
          {/* Left content */}
          <div className="flex flex-col gap-5 w-full lg:w-[calc(100%-360px)] min-w-0">
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Strategies</h2>
              <StrategyCard />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Activity</h2>
              <ActivityLog />
            </div>
          </div>
          {/* Right cards */}
          <div className="flex flex-col w-full lg:w-[340px] gap-5 shrink-0">
            <PortfolioCard />
            <YieldForecastChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
