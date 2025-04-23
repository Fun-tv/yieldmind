
import React from 'react';

interface PortfolioBalanceProps {
  asset: string;
  amount: string;
}

const PortfolioBalance = ({ asset, amount }: PortfolioBalanceProps) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-defi-text">{amount}</span>
    <span className="text-defi-muted">{asset}</span>
  </div>
);

const PortfolioCard = () => {
  return (
    <div className="card">
      <h2 className="text-lg font-medium mb-3">Portfolio Value</h2>
      <div className="text-3xl font-bold text-white mb-5">$12,340</div>
      
      <h3 className="text-sm text-defi-muted mb-2">Balances</h3>
      <PortfolioBalance asset="USDC" amount="8,500" />
      <PortfolioBalance asset="APT" amount="60.4" />
      <PortfolioBalance asset="USDC" amount="120" />
    </div>
  );
};

export default PortfolioCard;
