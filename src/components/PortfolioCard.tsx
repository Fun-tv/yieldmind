
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { RefreshCw } from 'lucide-react';

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
    </Card>
  );
};

export default PortfolioCard;
