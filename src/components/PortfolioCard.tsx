
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { RefreshCw } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const initialBalances = [
  { asset: "USDC", amount: "8 500" },
  { asset: "APT", amount: "60.4" },
  { asset: "CAKE", amount: "120" }
];

const PortfolioCard = () => {
  const [balances, setBalances] = useState(initialBalances);
  const [portfolioValue, setPortfolioValue] = useState("$12,340");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');
  const [showSwitchDialog, setShowSwitchDialog] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  
  const strategies = [
    { id: "low", name: "Conservative", risk: "Low", apr: "5.2%" },
    { id: "medium", name: "Balanced", risk: "Medium", apr: "8.7%" },
    { id: "high", name: "Aggressive", risk: "High", apr: "12.5%" },
  ];
  
  const handleRefresh = () => {
    if (isRefreshing) return;
    
    setIsRefreshing(true);
    
    // Simulate updating portfolio data
    setTimeout(() => {
      const newValue = "$" + (12340 + Math.floor(Math.random() * 500) - 250).toLocaleString();
      setPortfolioValue(newValue);
      
      const updatedBalances = balances.map(balance => {
        const currentAmount = parseFloat(balance.amount.replace(/\s/g, ''));
        const newAmount = (currentAmount + (Math.random() * 2 - 1)).toFixed(1);
        return { ...balance, amount: newAmount };
      });
      
      setBalances(updatedBalances);
      setIsRefreshing(false);
      setLastUpdated('Just now');
      
      toast.success("Portfolio data refreshed", {
        description: "Latest market prices and balances updated"
      });
    }, 1200);
  };

  const handleAssetClick = (asset: string) => {
    toast.info(`${asset} details`, {
      description: `Click for more details about your ${asset} holdings`
    });
  };
  
  const handleStrategySwitch = () => {
    if (selectedStrategy) {
      const strategy = strategies.find(s => s.id === selectedStrategy);
      if (strategy) {
        toast.success(`Strategy switched to ${strategy.name}`, {
          description: `Your portfolio is now using a ${strategy.risk} risk strategy with ${strategy.apr} APR`
        });
        setShowSwitchDialog(false);
        setSelectedStrategy(null);
      }
    } else {
      toast.error("Please select a strategy first");
    }
  };

  return (
    <Card className="bg-[#151926] rounded-xl px-7 py-6 mb-5 shadow-lg border border-[#232946] min-w-[265px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Portfolio Value</h2>
        <button 
          className="text-xs text-defi-accent hover:text-defi-accent/80 transition flex items-center gap-1"
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          {isRefreshing ? (
            <>
              <RefreshCw className="w-3 h-3 animate-spin" />
              <span>Refreshing...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-3 h-3" />
              <span>Refresh</span>
            </>
          )}
        </button>
      </div>
      <div className="text-[2.25rem] font-bold text-white mb-4 leading-tight">{portfolioValue}</div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-white/70">Balances</span>
        <span className="text-xs text-white/50">Updated: {lastUpdated}</span>
      </div>
      <CardContent className="space-y-1 p-0">
        {balances.map((balance, index) => (
          <div 
            key={index} 
            className="flex justify-between text-sm text-white/90 hover:bg-white/5 p-1 rounded transition cursor-pointer"
            onClick={() => handleAssetClick(balance.asset)}
          >
            <span>{balance.amount}</span>
            <span>{balance.asset}</span>
          </div>
        ))}
      </CardContent>
      
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex justify-between items-center">
          <span className="text-sm text-white/70">Strategy</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-defi-accent hover:text-defi-accent/80 p-0 h-auto font-normal text-xs"
            onClick={() => setShowSwitchDialog(true)}
          >
            Switch Strategy
          </Button>
        </div>
        <div className="text-sm text-white/90 mt-1">Conservative (Low Risk)</div>
      </div>
      
      {/* Strategy Switch Dialog */}
      <Dialog open={showSwitchDialog} onOpenChange={setShowSwitchDialog}>
        <DialogContent className="bg-[#151926] border-[#232946] text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-white">Switch Portfolio Strategy</DialogTitle>
            <DialogDescription className="text-white/80">
              Choose a different risk level for your portfolio allocation
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <RadioGroup value={selectedStrategy || ""} onValueChange={setSelectedStrategy}>
              {strategies.map((strategy) => (
                <div
                  key={strategy.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition ${
                    selectedStrategy === strategy.id ? 'bg-[#232946]/70' : 'hover:bg-[#232946]/30'
                  }`}
                  onClick={() => setSelectedStrategy(strategy.id)}
                >
                  <RadioGroupItem value={strategy.id} id={strategy.id} className="border-defi-accent text-defi-accent" />
                  <div className="flex-1">
                    <label htmlFor={strategy.id} className="flex justify-between cursor-pointer">
                      <span className="font-medium text-white">{strategy.name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        strategy.risk === 'Low' ? 'bg-green-900/30 text-green-400' : 
                        strategy.risk === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' : 
                        'bg-red-900/30 text-red-400'
                      }`}>{strategy.risk} Risk</span>
                    </label>
                    <p className="text-sm text-white/70 mt-0.5">Expected APR: {strategy.apr}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="flex justify-end gap-3 mt-2">
            <Button
              variant="outline"
              onClick={() => setShowSwitchDialog(false)}
              className="border-[#232946] bg-[#232946] text-white hover:bg-[#2E3656]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleStrategySwitch}
              className="bg-defi-accent text-white hover:bg-defi-accent/90"
              disabled={!selectedStrategy}
            >
              Confirm Strategy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PortfolioCard;
