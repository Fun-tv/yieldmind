
import React from 'react';
import Sidebar from '@/components/Sidebar';

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
          <div 
            className="flex items-center gap-4 bg-[#151926] rounded-xl px-5 py-3 border border-[#232946] cursor-pointer hover:bg-[#1a1e2e] transition"
          >
            <span className="text-sm text-white/35 font-mono">Svv41/2235678</span>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#222843]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/50">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              </svg>
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
