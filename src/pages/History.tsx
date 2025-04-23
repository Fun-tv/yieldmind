
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { History as HistoryIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const historyItems = [
  { 
    type: 'deposit',
    asset: 'USDC',
    amount: '250',
    destination: 'USDC–APT pool on Liquidswap',
    date: 'Apr 22, 2025',
    apr: '7.9%',
    risk: 'Low',
    timeAgo: '1 day ago'
  },
  { 
    type: 'withdrawal',
    asset: 'APT',
    amount: '35.8',
    destination: 'Wallet',
    date: 'Apr 18, 2025',
    apr: null,
    risk: null,
    timeAgo: '5 days ago'
  },
  { 
    type: 'deposit',
    asset: 'USDC',
    amount: '8,500',
    destination: 'USDC–APT pool on Liquidswap',
    date: 'Apr 15, 2025',
    apr: '7.2%',
    risk: 'Low',
    timeAgo: '8 days ago'
  },
  { 
    type: 'deposit',
    asset: 'APT',
    amount: '24.6',
    destination: 'Stake on PortoStake',
    date: 'Apr 10, 2025',
    apr: '9.5%',
    risk: 'Medium',
    timeAgo: '13 days ago'
  },
];

const History = () => {
  return (
    <PageLayout title="Transaction History" subtitle="View all your DeFi transactions and strategy changes">
      <Card className="bg-[#151926] rounded-xl p-6 border border-[#232946]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <HistoryIcon className="text-defi-accent w-5 h-5" />
            <h2 className="text-base font-semibold text-white">Recent Activity</h2>
          </div>
          <button className="text-xs text-defi-accent hover:text-defi-accent/80 transition">
            Export CSV
          </button>
        </div>
        
        <div className="space-y-4">
          {historyItems.map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-[#1a1e2e] hover:bg-[#232946]/50 transition cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {item.type === 'deposit' ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ArrowDownRight className="w-4 h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-orange-500" />
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-white">{item.type === 'deposit' ? 'Deployed' : 'Withdrawn'} {item.amount} {item.asset}</div>
                    <div className="text-sm text-white/60">to {item.destination}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/80">{item.date}</div>
                  <div className="text-xs text-white/40">{item.timeAgo}</div>
                </div>
              </div>
              
              {item.apr && (
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-[#232946] text-xs rounded-md text-white/80">{item.apr} APR</span>
                  <span className="px-2 py-1 bg-[#232946] text-xs rounded-md text-white/80">{item.risk} Risk</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </PageLayout>
  );
};

export default History;
