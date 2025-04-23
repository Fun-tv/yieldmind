
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const balances = [
  { asset: "USDC", amount: "8 500" },
  { asset: "APT", amount: "60.4" },
  { asset: "USDC", amount: "120" }
];

const PortfolioCard = () => {
  return (
    <Card className="bg-[#151926] rounded-xl px-7 py-6 mb-5 shadow-lg border border-[#232946] min-w-[265px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Portfolio Value</h2>
        <button className="text-xs text-defi-accent hover:text-defi-accent/80 transition">
          Refresh
        </button>
      </div>
      <div className="text-[2.25rem] font-bold text-white mb-4 leading-tight">$12,340</div>
      <div className="text-sm text-white/40 mb-1">Balances</div>
      <CardContent className="space-y-1 p-0">
        {balances.map((balance, index) => (
          <div key={index} className="flex justify-between text-sm text-white/80 hover:bg-white/5 p-1 rounded transition cursor-pointer">
            <span>{balance.amount}</span>
            <span>{balance.asset}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
