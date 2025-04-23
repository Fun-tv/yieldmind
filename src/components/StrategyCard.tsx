
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'yellow' | 'gray';
}

const Badge = ({ children, variant = 'blue' }: BadgeProps) => {
  const variantClass = {
    blue: 'badge-blue',
    green: 'badge-green',
    yellow: 'badge-yellow',
    gray: 'badge-gray',
  };
  
  return (
    <span className={`badge ${variantClass[variant]}`}>
      {children}
    </span>
  );
};

const StrategyCard = () => {
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [switchStrategyOpen, setSwitchStrategyOpen] = useState(false);

  return (
    <div className="card">
      <h2 className="text-xl font-medium mb-2">Liquidity Mining</h2>
      <p className="text-defi-muted mb-4">
        Deposit in the USDC–APT pool on Liquidswap
      </p>
      
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-defi-muted">Yield</span>
          <Badge variant="blue">7.3% APR</Badge>
        </div>
        <Badge variant="green">Low Risk</Badge>
      </div>
      
      <div className="border-t border-white/10 pt-4">
        <div className="text-sm text-defi-muted mb-1">Current Strategy</div>
        <div className="flex justify-between items-center">
          <div>Farming USDC–APT LP</div>
          <div className="flex items-center gap-2">
            <span className="text-sm">120 tokens</span>
            <Badge variant="blue">72% APR</Badge>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-6">
        <Button
          onClick={() => setWithdrawOpen(true)}
          variant="outline"
          className="bg-white/5 border border-white/10 hover:bg-white/10"
        >
          Withdraw
        </Button>
        <Button
          onClick={() => setSwitchStrategyOpen(true)}
          variant="default"
          className="bg-defi-accent hover:bg-defi-accent/90"
        >
          Switch Strategy
        </Button>
      </div>
      
      {/* Withdraw Dialog */}
      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Withdraw Funds</DialogTitle>
            <DialogDescription className="text-defi-muted">
              Withdraw your funds from USDC–APT Liquidity Pool
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm text-defi-muted">Amount to withdraw</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-defi-dark border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-defi-accent/50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-defi-accent">
                  MAX
                </button>
              </div>
              <div className="text-sm text-right text-defi-muted">
                Available: 120 USDC-APT LP
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setWithdrawOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-defi-accent hover:bg-defi-accent/90">
              Confirm Withdrawal
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Switch Strategy Dialog */}
      <Dialog open={switchStrategyOpen} onOpenChange={setSwitchStrategyOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white max-w-xl">
          <DialogHeader>
            <DialogTitle>Switch Strategy</DialogTitle>
            <DialogDescription className="text-defi-muted">
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
                  className="flex justify-between items-center p-3 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{strategy.name}</div>
                    <div className="text-sm text-defi-muted">{strategy.platform}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={strategy.risk === "Low" ? "green" : strategy.risk === "Medium" ? "yellow" : "blue"}>
                      {strategy.risk} Risk
                    </Badge>
                    <Badge variant="blue">{strategy.apr} APR</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setSwitchStrategyOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-defi-accent hover:bg-defi-accent/90">
              Select Strategy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StrategyCard;
