
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";

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

const Portfolio = () => (
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
        <button className="bg-defi-accent text-white px-5 py-2 rounded-lg hover:bg-defi-accent/90 transition">Rebalance</button>
        <button className="bg-[#232946] text-white px-5 py-2 rounded-lg hover:bg-[#232946]/80 transition">Withdraw</button>
      </div>
      <div className="mt-6 text-sm text-white/60">
        Portfolio is automatically optimized every 4 hours based on market signals.
      </div>
    </Card>
  </PageLayout>
);

export default Portfolio;
