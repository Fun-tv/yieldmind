
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { TrendingUp, Wallet, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const bestYieldOptions = [
  {
    platform: 'Liquidswap',
    pair: 'USDC-APT',
    apr: '7.3%',
    risk: 'Low',
    recommended: true
  },
  {
    platform: 'PortoStake',
    pair: 'APT Staking',
    apr: '9.5%',
    risk: 'Medium',
    recommended: false
  },
  {
    platform: 'PancakeSwap',
    pair: 'CAKE-BNB',
    apr: '12.8%',
    risk: 'High',
    recommended: false
  },
];

const BestYield = () => {
  const handleDeployFunds = () => {
    toast.success('Starting deployment process', {
      description: 'Preparing to allocate funds to USDC-APT on Liquidswap'
    });
  };

  return (
    <PageLayout title="Best Yield Strategy" subtitle="AI-optimized yield strategy based on your risk profile">
      <Card className="bg-[#151926] rounded-xl p-6 mb-6 border border-[#232946]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-defi-accent w-5 h-5" />
            <h2 className="text-base font-semibold text-white">Recommended Strategies</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Risk tolerance:</span>
            <select className="bg-[#232946] text-white border-none rounded-md px-3 py-1 text-sm">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          {bestYieldOptions.map((option, index) => (
            <div 
              key={index}
              className={`p-5 rounded-lg ${
                option.recommended 
                  ? 'bg-[#1a1e2e] border border-defi-accent/30' 
                  : 'bg-[#1a1e2e] hover:bg-[#232946]/50'
              } transition cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium text-white flex items-center gap-2">
                    {option.platform}
                    {option.recommended && (
                      <span className="px-2 py-0.5 bg-defi-accent/20 text-defi-accent text-xs rounded-full">
                        Recommended
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-white/60">{option.pair}</p>
                </div>
                <div className="text-right">
                  <div className="font-medium text-white">{option.apr} APR</div>
                  <div className="text-sm text-white/60">{option.risk} Risk</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <Wallet size={16} className="text-white/60" />
                  <span className="text-sm text-white/60">Estimated monthly yield: $75</span>
                </div>
                
                <button 
                  className="flex items-center gap-1 text-defi-accent hover:text-defi-accent/80 transition text-sm"
                  onClick={handleDeployFunds}
                >
                  <span>Deploy Funds</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </PageLayout>
  );
};

export default BestYield;
