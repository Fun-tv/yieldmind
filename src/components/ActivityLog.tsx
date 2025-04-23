
import React, { useState } from 'react';

const Activity = ({ description, apr, risk, time }: { description: string; apr: string; risk: string; time: string }) => (
  <div className="flex items-center justify-between px-2 py-4 bg-[#151926] border-b border-white/5 last:border-0 rounded-xl mb-1 hover:bg-[#1a1e2c] transition cursor-pointer">
    <div className="text-white/80 text-base">{description}</div>
    <div className="flex items-center gap-4 whitespace-nowrap">
      <span className="badge badge-blue px-2">{apr} APR</span>
      <span className="badge badge-green px-2">{risk} risk</span>
      <span className="text-xs text-white/40">{time}</span>
    </div>
  </div>
);

const ActivityLog = () => {
  const [activities] = useState([
    {
      description: "Deployed 250 USDC to USDC–APT pool on Liquidswap",
      apr: "7.9%",
      risk: "Low",
      time: "1 day ago"
    },
    {
      description: "Earned 12.4 APT from staking rewards",
      apr: "6.5%",
      risk: "Low",
      time: "3 days ago"
    },
    {
      description: "Swapped 500 USDC for ETH on Liquidswap",
      apr: "-",
      risk: "Low",
      time: "1 week ago"
    }
  ]);

  return (
    <div className="bg-transparent mt-1">
      <h2 className="text-lg font-semibold text-white mb-2">Activity</h2>
      {activities.map((activity, index) => (
        <Activity
          key={index}
          description={activity.description}
          apr={activity.apr}
          risk={activity.risk}
          time={activity.time}
        />
      ))}
    </div>
  );
};

export default ActivityLog;
