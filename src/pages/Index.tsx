
import React from 'react';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import QuickActions from '@/components/QuickActions';
import PortfolioCard from '@/components/PortfolioCard';
import StrategyCard from '@/components/StrategyCard';
import YieldForecastChart from '@/components/YieldForecastChart';
import ActivityLog from '@/components/ActivityLog';
import UserProfile from '@/components/UserProfile';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-[#131726] text-white relative">
      <Sidebar />
      <main className="flex-1 flex flex-col p-12 pt-8 max-w-full transition-all overflow-x-auto bg-[#101222]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">What would you like to do today?</h1>
          <UserProfile />
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
