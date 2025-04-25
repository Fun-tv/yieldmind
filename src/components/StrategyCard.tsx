
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Badge = ({ children, variant = 'blue' }: { children: React.ReactNode, variant?: 'blue' | 'green' | 'yellow' | 'gray' | 'red' }) => {
  const variantClass = {
    blue: 'bg-blue-900/30 text-blue-400',
    green: 'bg-green-900/30 text-green-400',
    yellow: 'bg-yellow-900/30 text-yellow-400',
    red: 'bg-red-900/30 text-red-400',
    gray: 'bg-gray-900/30 text-gray-400',
  };
  return <span className={`${variantClass[variant]} text-xs px-2 py-0.5 rounded-md font-medium`}>{children}</span>;
};

const StrategyCard = () => {
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [switchStrategyOpen, setSwitchStrategyOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState('50');
  const [maxLP, setMaxLP] = useState(120);
  const [currentStrategy, setCurrentStrategy] = useState({
    name: "Liquidity Mining",
    description: "Deposit in the USDC–APT pool on Liquidswap",
    yield: "7.3% APR",
    risk: "Low risk",
    farming: "Farming USDC–APT LP",
    tokens: "120 tokens",
    apr: "72% APR"
  });
  
  const handleWithdrawConfirm = () => {
    const amount = parseFloat(withdrawAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    if (amount > maxLP) {
      toast.error("Insufficient balance");
      return;
    }
    
    toast.success("Withdrawal initiated", {
      description: `${withdrawAmount} USDC-APT LP will be available in your wallet shortly`
    });
    
    // Update the LP amount
    setMaxLP(prevMax => prevMax - amount);
    setWithdrawAmount('');
    setWithdrawOpen(false);
  };
  
  const handleStrategySwitch = () => {
    if (selectedStrategy !== null) {
      const strategies = [
        {
          name: "USDC-ETH Pool",
          description: "Deposit in the USDC-ETH pool on Liquidswap",
          platform: "Liquidswap",
          yield: "8.2% APR",
          risk: "Medium risk",
          farming: "Farming USDC-ETH LP",
          tokens: `${maxLP} tokens`,
          apr: "82% APR"
        },
        {
          name: "USDC Lending",
          description: "Supply USDC to the Compound protocol",
          platform: "Compound",
          yield: "5.1% APR",
          risk: "Low risk",
          farming: "Lending USDC",
          tokens: `${maxLP} tokens`,
          apr: "51% APR"
        },
        {
          name: "APT Staking",
          description: "Stake APT tokens on Aptos Network",
          platform: "Aptos Network",
          yield: "6.5% APR",
          risk: "Low risk",
          farming: "Staking APT",
          tokens: `${maxLP} tokens`,
          apr: "65% APR"
        },
        {
          name: "USDC-SOL Pool",
          description: "Deposit in the USDC-SOL pool on Raydium",
          platform: "Raydium",
          yield: "10.3% APR",
          risk: "High risk",
          farming: "Farming USDC-SOL LP",
          tokens: `${maxLP} tokens`,
          apr: "103% APR"
        }
      ];
      
      setCurrentStrategy(strategies[selectedStrategy]);
      
      toast.success("Strategy switched successfully", {
        description: `Now using ${strategies[selectedStrategy].name} strategy`
      });
      setSwitchStrategyOpen(false);
      setSelectedStrategy(null);
    } else {
      toast.error("Please select a strategy first");
    }
  };
  
  const handleMaxClick = () => {
    setWithdrawAmount(maxLP.toString());
  };

  const getRiskBadgeVariant = (risk: string) => {
    if (risk.includes("Low")) return "green";
    if (risk.includes("Medium")) return "yellow";
    if (risk.includes("High")) return "red";
    return "blue";
  };

  return (
    <div className="bg-[#151926] rounded-xl px-7 py-6 shadow-lg border border-[#232946]">
      <h2 className="text-lg font-semibold text-white mb-1">{currentStrategy.name}</h2>
      <p className="text-white/70 mb-3">{currentStrategy.description}</p>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/70">Yield</span>
          <Badge variant="blue">{currentStrategy.yield}</Badge>
        </div>
        <Badge variant={getRiskBadgeVariant(currentStrategy.risk)}>{currentStrategy.risk}</Badge>
      </div>
      <div className="bg-[#222843] rounded-lg px-5 py-3 mb-5">
        <div className="text-xs text-white/70 mb-0.5">Current Strategy</div>
        <div className="flex justify-between items-center">
          <div className="text-white/90 font-medium">{currentStrategy.farming}</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/90">{maxLP} tokens</span>
            <Badge variant="blue">{currentStrategy.apr}</Badge>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <Button
          onClick={() => setWithdrawOpen(true)}
          variant="outline"
          className="rounded-lg border-[#222843] bg-[#222843] text-white hover:bg-[#2E3656] hover:border-defi-accent"
        >
          Withdraw
        </Button>
        <Button
          onClick={() => setSwitchStrategyOpen(true)}
          variant="outline"
          className="rounded-lg border-[#222843] bg-[#222843] text-white hover:bg-[#2E3656] hover:border-defi-accent"
        >
          Switch Strategy
        </Button>
      </div>

      {/* Withdraw Dialog */}
      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Withdraw Funds</DialogTitle>
            <DialogDescription className="text-white/90">
              Withdraw your funds from {currentStrategy.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm text-white/90">Amount to withdraw</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="0"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full bg-defi-dark border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-defi-accent/50 text-white"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-defi-accent"
                  onClick={handleMaxClick}
                >
                  MAX
                </button>
              </div>
              <div className="text-sm text-right text-white/80">
                Available: {maxLP} tokens
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setWithdrawOpen(false)} className="text-white hover:bg-white/10">
              Cancel
            </Button>
            <Button onClick={handleWithdrawConfirm} className="bg-defi-accent hover:bg-defi-accent/90">
              Confirm Withdrawal
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Switch Strategy Dialog */}
      <Dialog open={switchStrategyOpen} onOpenChange={setSwitchStrategyOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-white">Switch Strategy</DialogTitle>
            <DialogDescription className="text-white/90">
              Choose a new yield strategy for your assets
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-3">
              {[
                { name: "USDC-ETH Pool", platform: "Liquidswap", apr: "8.2%", risk: "Medium" },
                { name: "USDC Lending", platform: "Compound", apr: "5.1%", risk: "Low" },
                { name: "APT Staking", platform: "Aptos Network", apr: "6.5%", risk: "Low" },
                { name: "USDC-SOL Pool", platform: "Raydium", apr: "10.3%", risk: "High" }
              ].map((strategy, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-3 border ${selectedStrategy === idx ? 'border-defi-accent' : 'border-white/10'} rounded-lg hover:bg-white/5 cursor-pointer transition`}
                  onClick={() => setSelectedStrategy(idx)}
                >
                  <div className="space-y-1">
                    <div className="font-medium text-white">{strategy.name}</div>
                    <div className="text-sm text-white/80">{strategy.platform}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={strategy.risk === "Low" ? "green" : strategy.risk === "Medium" ? "yellow" : "red"}>
                      {strategy.risk} Risk
                    </Badge>
                    <Badge variant="blue">{strategy.apr} APR</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setSwitchStrategyOpen(false)} className="text-white hover:bg-white/10">
              Cancel
            </Button>
            <Button onClick={handleStrategySwitch} className="bg-defi-accent hover:bg-defi-accent/90">
              Select Strategy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StrategyCard;
