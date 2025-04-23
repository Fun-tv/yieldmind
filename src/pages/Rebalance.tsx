
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, PieChart, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const currentAllocation = [
  { asset: 'USDC-APT LP', platform: 'Liquidswap', percentage: 70, value: '$8,638' },
  { asset: 'APT Staking', platform: 'PortoStake', percentage: 30, value: '$3,702' },
];

const recommendedAllocation = [
  { asset: 'USDC-APT LP', platform: 'Liquidswap', percentage: 50, value: '$6,170' },
  { asset: 'APT Staking', platform: 'PortoStake', percentage: 30, value: '$3,702' },
  { asset: 'CAKE-BNB LP', platform: 'PancakeSwap', percentage: 20, value: '$2,468' },
];

const Rebalance = () => {
  const [isRebalancing, setIsRebalancing] = useState(false);

  const handleRebalance = () => {
    setIsRebalancing(true);
    toast.info('Starting rebalance process', {
      description: 'This may take a few moments to complete'
    });

    // Simulate rebalance process
    setTimeout(() => {
      setIsRebalancing(false);
      toast.success('Rebalance completed', {
        description: 'Your portfolio has been optimized for better yield'
      });
    }, 3000);
  };

  return (
    <PageLayout title="Rebalance Yields" subtitle="Optimize your portfolio allocation for maximum returns">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="bg-[#151926] rounded-xl p-6 border border-[#232946]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <PieChart className="text-white/80 w-5 h-5" />
              <h2 className="text-base font-semibold text-white">Current Allocation</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {currentAllocation.map((item, index) => (
              <div key={index} className="p-4 bg-[#1a1e2e] rounded-lg">
                <div className="flex justify-between mb-2">
                  <div>
                    <div className="font-medium text-white">{item.asset}</div>
                    <div className="text-sm text-white/60">{item.platform}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{item.value}</div>
                    <div className="text-sm text-white/60">{item.percentage}% of portfolio</div>
                  </div>
                </div>
                
                <div className="w-full bg-[#232946] rounded-full h-2 mt-2">
                  <div 
                    className="bg-white/40 h-2 rounded-full" 
                    style={{width: `${item.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="bg-[#151926] rounded-xl p-6 border border-[#232946]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="text-defi-accent w-5 h-5" />
              <h2 className="text-base font-semibold text-white">Recommended Allocation</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {recommendedAllocation.map((item, index) => (
              <div key={index} className="p-4 bg-[#1a1e2e] rounded-lg">
                <div className="flex justify-between mb-2">
                  <div>
                    <div className="font-medium text-white">{item.asset}</div>
                    <div className="text-sm text-white/60">{item.platform}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{item.value}</div>
                    <div className="text-sm text-white/60">{item.percentage}% of portfolio</div>
                  </div>
                </div>
                
                <div className="w-full bg-[#232946] rounded-full h-2 mt-2">
                  <div 
                    className="bg-defi-accent h-2 rounded-full" 
                    style={{width: `${item.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <Card className="bg-[#151926] rounded-xl p-6 border border-[#232946]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-white mb-1">Rebalance Summary</h2>
            <p className="text-sm text-white/60">Estimated impact on your portfolio performance</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-[#1a1e2e] rounded-lg">
            <div className="text-sm text-white/60 mb-1">Current APR</div>
            <div className="text-xl font-bold text-white">7.8%</div>
          </div>
          <div className="p-4 bg-[#1a1e2e] rounded-lg">
            <div className="text-sm text-white/60 mb-1">Projected APR</div>
            <div className="text-xl font-bold text-defi-accent">9.2%</div>
          </div>
          <div className="p-4 bg-[#1a1e2e] rounded-lg">
            <div className="text-sm text-white/60 mb-1">Yield Increase</div>
            <div className="text-xl font-bold text-green-500">+18%</div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleRebalance}
            disabled={isRebalancing}
            className="bg-defi-accent hover:bg-defi-accent/90 text-white flex items-center gap-2 px-8"
          >
            {isRebalancing && <RefreshCw className="w-4 h-4 animate-spin" />}
            <span>{isRebalancing ? 'Rebalancing...' : 'Rebalance Portfolio'}</span>
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Rebalance;
