
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import StrategyCard from '@/components/StrategyCard';
import { Card } from '@/components/ui/card';
import { BarChart2, Plus, Info } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Available strategies data
const availableStrategies = [
  {
    title: 'Liquidity Mining',
    description: 'Deposit in the USDC–APT pool on Liquidswap',
    apr: '7.3%',
    risk: 'Low',
    status: 'active'
  },
  {
    title: 'Staking',
    description: 'Stake APT tokens on PortoStake',
    apr: '9.5%',
    risk: 'Medium',
    status: 'available'
  },
  {
    title: 'Yield Farming',
    description: 'Farm CAKE-BNB LP on PancakeSwap',
    apr: '12.8%',
    risk: 'High',
    status: 'available'
  },
  {
    title: 'Lend & Borrow',
    description: 'Supply USDC on Compound',
    apr: '5.4%',
    risk: 'Low',
    status: 'available'
  }
];

const Strategies = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<null | typeof availableStrategies[0]>(null);

  const handleStrategyClick = (strategy: typeof availableStrategies[0]) => {
    setSelectedStrategy(strategy);
    setShowModal(true);
  };
  
  const handleDeployFunds = () => {
    if (selectedStrategy) {
      toast.success("Strategy deployed successfully", {
        description: `You are now using ${selectedStrategy.title} strategy`
      });
      
      // Update the active strategy in state
      const updatedStrategies = availableStrategies.map(strat => ({
        ...strat,
        status: strat.title === selectedStrategy.title ? 'active' : 
                strat.status === 'active' ? 'available' : strat.status
      }));
      
      // In a real app, we would update the availableStrategies state here
      
      setShowModal(false);
    }
  };

  return (
    <PageLayout title="DeFi Strategies" subtitle="Explore and deploy optimal yield strategies for your assets">
      {/* Current Strategy */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Your Active Strategy</h2>
        <StrategyCard />
      </div>
      
      {/* Available Strategies */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-white">Available Strategies</h2>
          <button className="flex items-center gap-2 text-sm text-defi-accent hover:text-defi-accent/80 transition">
            <Plus size={16} />
            <span>Custom Strategy</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {availableStrategies.map((strategy, index) => (
            <Card 
              key={index}
              className={`bg-[#151926] rounded-xl p-5 cursor-pointer hover:border-defi-accent/50 transition border ${
                strategy.status === 'active' ? 'border-defi-accent/80' : 'border-[#232946]'
              }`}
              onClick={() => handleStrategyClick(strategy)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart2 className="text-defi-accent w-5 h-5" />
                  <h3 className="font-semibold text-white">{strategy.title}</h3>
                </div>
                
                {strategy.status === 'active' && (
                  <span className="px-2 py-1 bg-defi-accent/20 text-defi-accent text-xs rounded-full">
                    Active
                  </span>
                )}
              </div>
              
              <p className="text-white/80 text-sm mb-4">{strategy.description}</p>
              
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-[#232946] text-xs rounded-md text-white/80">{strategy.apr} APR</span>
                <span 
                  className={`px-2 py-1 bg-[#232946] text-xs rounded-md text-white/80 flex items-center gap-1`}
                >
                  {strategy.risk} Risk
                  <Info size={12} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-[#151926] border-[#232946] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">{selectedStrategy?.title}</DialogTitle>
            <DialogDescription className="text-white/90">
              {selectedStrategy?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-3">
            <div className="flex gap-4">
              <div className="flex-1 p-4 bg-[#1a1e2e] rounded-lg">
                <div className="text-sm text-white/80 mb-1">Expected APR</div>
                <div className="text-xl font-bold text-white">{selectedStrategy?.apr}</div>
              </div>
              <div className="flex-1 p-4 bg-[#1a1e2e] rounded-lg">
                <div className="text-sm text-white/80 mb-1">Risk Level</div>
                <div className="text-xl font-bold text-white">{selectedStrategy?.risk}</div>
              </div>
            </div>
            
            <div className="p-4 bg-[#1a1e2e] rounded-lg">
              <div className="text-sm text-white/80 mb-2">Strategy Details</div>
              <ul className="text-sm text-white/90 list-disc pl-5 space-y-1">
                <li>Provides liquidity to facilitate token swaps</li>
                <li>Earns fees from trades in the pool</li>
                <li>Potential for additional token rewards</li>
                <li>Low impermanent loss risk for stable pairs</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-2">
            <DialogClose asChild>
              <Button variant="outline" className="text-white bg-transparent border-[#232946] hover:bg-[#232946]/50">
                Cancel
              </Button>
            </DialogClose>
            <Button 
              className="bg-defi-accent hover:bg-defi-accent/90 text-white"
              onClick={handleDeployFunds}
            >
              {selectedStrategy?.status === 'active' ? 'Switch Strategy' : 'Deploy Funds'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Strategies;
