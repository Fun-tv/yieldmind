
import React from 'react';
import Sidebar from '@/components/Sidebar';
import UserProfile from '@/components/UserProfile';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#131726] text-white relative">
      <Sidebar />
      <main className="flex-1 flex flex-col p-12 pt-8 max-w-full transition-all overflow-x-auto bg-[#101222]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
            {subtitle && <p className="text-white/60 mt-1">{subtitle}</p>}
          </div>
          <UserProfile />
        </div>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
