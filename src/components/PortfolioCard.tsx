
import React from 'react';

const balances = [
  { asset: "USDC", amount: "8 500" },
  { asset: "APT", amount: "60 4" },
  { asset: "USDC", amount: "120" }
];

const PortfolioCard = () => {
  return (
    <div className="bg-[#151926] rounded-xl px-7 py-6 mb-5 shadow-lg border border-[#232946] min-w-[265px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Portfolio Value</h2>
      </div>
      <div className="text-[2.25rem] font-bold text-white mb-4 leading-tight">$12,340</div>
      <div className="text-sm text-white/40 mb-1">Balances</div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm text-white/80">
          <span>{balances[0].amount}</span>
          <span>{balances[0].asset}</span>
        </div>
        <div className="flex justify-between text-sm text-white/80">
          <span>{balances[1].amount}</span>
          <span>{balances[1].asset}</span>
        </div>
        <div className="flex justify-between text-sm text-white/80">
          <span>{balances[2].amount}</span>
          <span>{balances[2].asset}</span>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
