
import React from 'react';
import { TrendingUp, ArrowUpRight, BarChart2 } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const QuickAction = ({ icon, label, onClick }: QuickActionProps) => (
  <button
    onClick={onClick}
    className="w-full max-w-xs min-w-[170px] flex items-center gap-2 px-0 py-4 md:px-8 justify-center bg-[#151926] rounded-xl border border-[#232946] hover:border-defi-accent transition shadow-sm font-semibold text-white/80 hover:text-white group"
    style={{ minHeight: 48 }}
  >
    <span className="rounded-lg bg-[#222843] p-2 mr-2 group-hover:bg-defi-accent/20 transition">{icon}</span>
    <span>{label}</span>
  </button>
);

const QuickActions = () => {
  const [bestYieldOpen, setBestYieldOpen] = React.useState(false);
  const [rebalanceOpen, setRebalanceOpen] = React.useState(false);
  
  // Scroll to forecast
  const scrollToForecast = () => {
    const el = document.getElementById('yield-forecast');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBestYieldClick = () => {
    setBestYieldOpen(true);
  };

  const handleRebalanceClick = () => {
    setRebalanceOpen(true);
  };

  return (
    <>
      <div className="flex flex-row gap-4 w-full mb-8">
        <QuickAction
          icon={<TrendingUp className="w-5 h-5 text-defi-accent" />}
          label="Best yield strategy"
          onClick={handleBestYieldClick}
        />
        <QuickAction
          icon={<ArrowUpRight className="w-5 h-5 text-defi-success" />}
          label="Rebalance yields"
          onClick={handleRebalanceClick}
        />
        <QuickAction
          icon={<BarChart2 className="w-5 h-5 text-white" />}
          label="View forecast"
          onClick={scrollToForecast}
        />
      </div>

      {/* Best Yield Strategy Dialog */}
      <Dialog open={bestYieldOpen} onOpenChange={setBestYieldOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Best Yield Strategy</DialogTitle>
            <DialogDescription className="text-defi-muted">
              Our AI recommends the following optimal yield strategy for your assets
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-[#222843] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">USDC-ETH Liquidity Pool</h3>
              <p className="text-white/60 text-sm mb-3">Liquidswap DEX</p>
              <div className="flex justify-between items-center">
                <span className="badge badge-blue px-2">8.2% APR</span>
                <span className="badge badge-green px-2">Medium risk</span>
              </div>
              <div className="mt-4 text-sm text-white/70">
                <p>Providing liquidity to the USDC-ETH pool on Liquidswap will earn you trading fees and additional incentive rewards in the platform's native token.</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rebalance Dialog */}
      <Dialog open={rebalanceOpen} onOpenChange={setRebalanceOpen}>
        <DialogContent className="bg-defi-card border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Rebalance Yields</DialogTitle>
            <DialogDescription className="text-defi-muted">
              Optimize your positions to maximize returns
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="border border-white/10 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-white">Current Portfolio</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="text-sm text-white/70">USDC-APT Pool</div>
                <div className="text-sm text-right text-white/70">7.3% APR</div>
              </div>
            </div>
            
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="font-medium text-white">Recommended Rebalance</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="text-sm text-white/70">USDC-ETH Pool</div>
                <div className="text-sm text-right text-white/70">8.2% APR (+0.9%)</div>
              </div>
            </div>
            
            <div className="bg-[#222843]/50 rounded-lg p-3 text-sm text-white/60">
              Rebalancing would result in an estimated +$42 monthly yield increase
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickActions;
