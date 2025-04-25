
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const mockAssets = [
  {
    name: "USDC-APT LP",
    protocol: "Liquidswap",
    allocation: "50%",
    value: "$5,500",
    returns: "+8.1% APR"
  },
  {
    name: "APT Staking",
    protocol: "PortoStake",
    allocation: "30%",
    value: "$3,300",
    returns: "+10.3% APR"
  },
  {
    name: "CAKE-BNB LP",
    protocol: "PancakeSwap",
    allocation: "20%",
    value: "$2,200",
    returns: "+7.9% APR"
  }
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("1,000");
  const [selectedAsset, setSelectedAsset] = useState("all");
  
  const handleRebalance = () => {
    navigate("/rebalance");
    toast.info("Navigating to Rebalance", {
      description: "Preparing your portfolio optimization options"
    });
  };
  
  const handleWithdraw = () => {
    if (!withdrawAmount.trim()) {
      toast.error("Please enter a withdrawal amount");
      return;
    }
    
    let selectedAssetName = "All Assets (proportional)";
    if (selectedAsset === "usdc-apt") selectedAssetName = "USDC-APT LP";
    if (selectedAsset === "apt") selectedAssetName = "APT Staking";
    if (selectedAsset === "cake-bnb") selectedAssetName = "CAKE-BNB LP";
    
    toast.success(`Withdrawal Successful!`, {
      description: `$${withdrawAmount} has been withdrawn from ${selectedAssetName}`
    });
    
    setWithdrawOpen(false);
  };

  return (
    <PageLayout title="Portfolio Overview" subtitle="Track your DeFi assets, strategies, and performance.">
      <Card className="bg-[#151926] rounded-xl p-6 mb-6 border border-[#232946]">
        <div className="flex items-center gap-2 mb-6">
          <Wallet className="text-defi-accent w-5 h-5" />
          <h2 className="text-lg font-semibold text-white">Asset Allocation</h2>
        </div>
        <table className="w-full text-left mb-4">
          <thead>
            <tr className="text-white/60 text-xs">
              <th className="py-2">Asset</th>
              <th className="py-2">Protocol</th>
              <th className="py-2">Allocation</th>
              <th className="py-2">Current Value</th>
              <th className="py-2">Returns</th>
            </tr>
          </thead>
          <tbody>
            {mockAssets.map((row, i) => (
              <tr key={i} className="border-t border-[#232946] text-white/80 text-sm hover:bg-[#101222] transition">
                <td className="py-2">{row.name}</td>
                <td className="py-2">{row.protocol}</td>
                <td className="py-2">{row.allocation}</td>
                <td className="py-2">{row.value}</td>
                <td className="py-2">{row.returns}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4">
          <Button 
            onClick={handleRebalance}
            className="bg-defi-accent text-white px-5 py-2 rounded-lg hover:bg-defi-accent/90 transition"
          >
            Rebalance
          </Button>
          <Button 
            onClick={() => setWithdrawOpen(true)}
            className="bg-[#232946] text-white px-5 py-2 rounded-lg hover:bg-[#232946]/80 transition"
          >
            Withdraw
          </Button>
        </div>
        <div className="mt-6 text-sm text-white/70">
          Portfolio is automatically optimized every 4 hours based on market signals.
        </div>
      </Card>
      
      {/* Withdraw Dialog */}
      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Withdraw Funds</DialogTitle>
            <DialogDescription className="text-white/90">
              Withdraw your funds from your portfolio
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
                  onClick={() => setWithdrawAmount("11,000")}
                >
                  MAX
                </button>
              </div>
              <div className="text-sm text-right text-white/80">
                Available: $11,000 across all assets
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/90">Select asset</label>
              <select 
                className="w-full bg-defi-dark border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-defi-accent/50 text-white"
                value={selectedAsset}
                onChange={(e) => setSelectedAsset(e.target.value)}
              >
                <option value="all">All Assets (proportional)</option>
                <option value="usdc-apt">USDC-APT LP</option>
                <option value="apt">APT Staking</option>
                <option value="cake-bnb">CAKE-BNB LP</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setWithdrawOpen(false)} className="text-white hover:bg-white/10">
              Cancel
            </Button>
            <Button onClick={handleWithdraw} className="bg-defi-accent hover:bg-defi-accent/90">
              Confirm Withdrawal
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Portfolio;
