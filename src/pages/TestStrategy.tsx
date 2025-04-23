
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { TestTube, ChevronDown, Play, BarChart2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import YieldForecastChart from '@/components/YieldForecastChart';

const TestStrategy = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    toast.info('Running DeFi simulation...', {
      description: 'Backtesting your strategy on historical on-chain yield data. Please wait...'
    });

    setTimeout(() => {
      setIsSimulating(false);
      setShowResults(true);
      toast.success('Simulation completed', {
        description: 'Performance and risk analysis are ready.'
      });
    }, 2750);
  };

  return (
    <PageLayout title="Try/Test Your Strategy" subtitle="Backtest your DeFi portfolio and optimize yield before deploying capital.">
      <Card className="bg-[#151926] rounded-xl p-6 mb-6 border border-[#232946]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TestTube className="text-defi-accent w-5 h-5" />
            <h2 className="text-base font-semibold text-white">AI-Powered Strategy Simulator</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm text-white/60 mb-2">Asset Allocation</label>
            <div className="space-y-3">
              <div className="p-3 bg-[#1a1e2e] rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-defi-accent"></span>
                  <span>USDC-APT LP (Liquidswap)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-16 bg-[#232946] text-white text-right px-2 py-1 rounded"
                    defaultValue="50"
                  />
                  <span>%</span>
                </div>
              </div>

              <div className="p-3 bg-[#1a1e2e] rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span>APT Staking (PortoStake)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-16 bg-[#232946] text-white text-right px-2 py-1 rounded"
                    defaultValue="30"
                  />
                  <span>%</span>
                </div>
              </div>

              <div className="p-3 bg-[#1a1e2e] rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span>CAKE-BNB LP (PancakeSwap)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-16 bg-[#232946] text-white text-right px-2 py-1 rounded"
                    defaultValue="20"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">Simulation Parameters</label>
            <div className="space-y-3">
              <div className="p-3 bg-[#1a1e2e] rounded-lg flex justify-between items-center">
                <span>Time Horizon</span>
                <div className="flex items-center px-3 py-1.5 bg-[#232946] rounded text-sm gap-1">
                  <span>30 days</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="p-3 bg-[#1a1e2e] rounded-lg flex justify-between items-center">
                <span>Market Conditions</span>
                <div className="flex items-center px-3 py-1.5 bg-[#232946] rounded text-sm gap-1">
                  <span>Moderate Volatility</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="p-3 bg-[#1a1e2e] rounded-lg flex justify-between items-center">
                <span>Initial Investment</span>
                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input
                    type="text"
                    className="w-24 bg-[#232946] text-white text-right px-2 py-1 rounded"
                    defaultValue="10,000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="bg-defi-accent hover:bg-defi-accent/90 text-white flex items-center gap-2 px-8"
          >
            {isSimulating ? (
              <>
                <TestTube className="w-4 h-4 animate-pulse" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Run Simulation</span>
              </>
            )}
          </Button>
        </div>
      </Card>
      {showResults && (
        <>
          <h2 className="text-lg font-semibold text-white mb-3">Simulation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-[#151926] rounded-xl p-5 border border-[#232946]">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="text-defi-accent w-4 h-4" />
                <h3 className="text-sm font-medium text-white">Expected APR</h3>
              </div>
              <div className="text-2xl font-bold text-white">9.2%</div>
              <div className="text-xs text-white/60 mt-1">+1.4% vs. current strategy</div>
            </Card>
            <Card className="bg-[#151926] rounded-xl p-5 border border-[#232946]">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="text-green-500 w-4 h-4" />
                <h3 className="text-sm font-medium text-white">Projected Yield</h3>
              </div>
              <div className="text-2xl font-bold text-white">$2,760</div>
              <div className="text-xs text-white/60 mt-1">over 1 year period</div>
            </Card>
            <Card className="bg-[#151926] rounded-xl p-5 border border-[#232946]">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="text-yellow-500 w-4 h-4" />
                <h3 className="text-sm font-medium text-white">Risk Score</h3>
              </div>
              <div className="text-2xl font-bold text-white">6.4/10</div>
              <div className="text-xs text-white/60 mt-1">Medium risk level</div>
            </Card>
          </div>
          <YieldForecastChart />
          <div className="flex justify-center mt-6">
            <Button className="bg-defi-accent hover:bg-defi-accent/90 text-white px-8">
              Deploy This Strategy
            </Button>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default TestStrategy;
