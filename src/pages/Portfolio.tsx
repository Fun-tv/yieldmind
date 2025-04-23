
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import PortfolioCard from '@/components/PortfolioCard';
import { Wallet, BarChart2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import YieldForecastChart from '@/components/YieldForecastChart';

// Portfolio assets data
const assets = [
  { 
    name: 'USDC',
    amount: '8,620',
    value: '$8,620',
    change: '+2.4%',
    positive: true,
    allocation: '70%'
  },
  { 
    name: 'APT',
    amount: '60.4',
    value: '$3,624',
    change: '-1.2%',
    positive: false,
    allocation: '29%'
  },
  { 
    name: 'Other',
    amount: 'Various',
    value: '$96',
    change: '+0.8%',
    positive: true,
    allocation: '1%'
  }
];

// Recent transactions data
const recentTransactions = [
  {
    type: 'deposit',
    asset: 'USDC',
    amount: '250',
    date: 'Apr 22, 2025',
    timeAgo: '1 day ago'
  },
  {
    type: 'withdrawal',
    asset: 'APT',
    amount: '35.8',
    date: 'Apr 18, 2025',
    timeAgo: '5 days ago'
  }
];

const Portfolio = () => {
  return (
    <PageLayout title="Portfolio Overview" subtitle="Track your assets and performance across all strategies">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#151926] rounded-xl px-7 py-6 h-full border border-[#232946]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="text-defi-accent w-5 h-5" />
                <h2 className="text-base font-semibold text-white">Assets Overview</h2>
              </div>
              <button className="text-xs text-defi-accent hover:text-defi-accent/80 transition">
                Add Funds
              </button>
            </div>
            
            <div className="space-y-4">
              {assets.map((asset, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-[#1a1e2e] hover:bg-[#232946]/50 transition cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">{asset.name}</div>
                      <div className="text-sm text-white/60">{asset.amount} tokens</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-white">{asset.value}</div>
                      <div className={`text-sm ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 w-full bg-[#232946] rounded-full h-2">
                    <div 
                      className="bg-defi-accent h-2 rounded-full" 
                      style={{width: asset.allocation}}
                    ></div>
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    {asset.allocation} of portfolio
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <PortfolioCard />
          
          <Card className="bg-[#151926] rounded-xl px-6 py-5 mt-5 border border-[#232946]">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-white">Recent Activity</h2>
            </div>
            
            <div className="space-y-3">
              {recentTransactions.map((tx, index) => (
                <div key={index} className="flex items-center justify-between text-sm hover:bg-white/5 p-2 rounded transition">
                  <div className="flex items-center gap-2">
                    {tx.type === 'deposit' ? (
                      <ArrowDownRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-orange-500" />
                    )}
                    <span className="text-white/80">
                      {tx.type === 'deposit' ? 'Deposit' : 'Withdraw'} {tx.amount} {tx.asset}
                    </span>
                  </div>
                  <span className="text-white/50">{tx.timeAgo}</span>
                </div>
              ))}
              
              <button className="w-full text-center text-xs text-defi-accent hover:text-defi-accent/80 transition mt-2">
                View all transactions
              </button>
            </div>
          </Card>
        </div>
      </div>
      
      <YieldForecastChart />
    </PageLayout>
  );
};

export default Portfolio;
