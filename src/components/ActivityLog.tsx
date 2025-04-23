
import React from 'react';

interface ActivityProps {
  description: string;
  apr: string;
  risk: string;
  time: string;
}

const Activity = ({ description, apr, risk, time }: ActivityProps) => (
  <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
    <div className="text-sm">{description}</div>
    <div className="flex items-center gap-2">
      <span className="badge badge-blue">{apr} APR</span>
      <span className="badge badge-green">{risk} Risk</span>
      <span className="text-xs text-defi-muted">{time}</span>
    </div>
  </div>
);

const ActivityLog = () => {
  return (
    <div className="card">
      <h2 className="text-lg font-medium mb-4">Activity</h2>
      
      <Activity 
        description="Deployed 250 USDC to USDC–APT pool on Liquidswap" 
        apr="7.9%" 
        risk="Low" 
        time="1 day ago" 
      />
      <Activity 
        description="Withdrew 180 USDC from lending pool" 
        apr="4.2%" 
        risk="Low" 
        time="3 days ago" 
      />
      <Activity 
        description="Claimed 12.5 APT rewards from staking" 
        apr="6.7%" 
        risk="Low" 
        time="5 days ago" 
      />
    </div>
  );
};

export default ActivityLog;
