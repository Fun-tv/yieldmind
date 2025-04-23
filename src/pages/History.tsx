
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

const mockHistory = [
  {
    date: "2025-04-20",
    action: "Strategy deployed",
    detail: "USDC-APT LP, 50% allocation",
    result: "+8.1% APR"
  },
  {
    date: "2025-04-17",
    action: "Yield harvested",
    detail: "APT staking, PortoStake",
    result: "+$42 USDC"
  },
  {
    date: "2025-04-10",
    action: "Strategy backtest",
    detail: "CAKE-BNB LP, PancakeSwap",
    result: "Backtest APR: 7.9%"
  },
  {
    date: "2025-04-02",
    action: "Position rebalanced",
    detail: "Shifted 10% to USDT-LP",
    result: "+0.4% projected APR"
  },
];

const History = () => (
  <PageLayout title="Activity History" subtitle="See your strategic actions, events, and results across DeFi.">
    <Card className="bg-[#151926] rounded-xl p-6 mb-6 border border-[#232946]">
      <div className="flex items-center gap-2 mb-5">
        <BarChart2 className="text-defi-accent w-5 h-5" />
        <h2 className="text-lg font-semibold text-white">Recent Actions</h2>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-white/60 text-xs">
            <th className="py-2">Date</th>
            <th className="py-2">Action</th>
            <th className="py-2">Details</th>
            <th className="py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {mockHistory.map((item, i) => (
            <tr key={i} className="border-t border-[#232946] text-white/80 text-sm hover:bg-[#101222] transition">
              <td className="py-2">{item.date}</td>
              <td className="py-2">{item.action}</td>
              <td className="py-2">{item.detail}</td>
              <td className="py-2">{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-sm text-white/60">
        Want to see more? Enable advanced analytics in your Profile.
      </div>
    </Card>
  </PageLayout>
);

export default History;
