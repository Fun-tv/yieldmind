
import React from 'react';
import { TrendingUp, ArrowUpRight, LineChart } from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const QuickAction = ({ icon, label, onClick }: QuickActionProps) => {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center gap-2 bg-defi-card hover:bg-white/5 border border-white/10 rounded-xl p-3 transition-colors flex-1"
    >
      <div className="rounded-lg bg-white/5 p-2">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
};

const QuickActions = () => {
  const scrollToForecast = () => {
    const forecastElement = document.getElementById('yield-forecast');
    if (forecastElement) {
      forecastElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-4 mb-10">
      <QuickAction 
        icon={<TrendingUp className="h-5 w-5 text-defi-accent" />} 
        label="Best yield strategy" 
      />
      <QuickAction 
        icon={<ArrowUpRight className="h-5 w-5 text-defi-success" />} 
        label="Rebalance yields" 
      />
      <QuickAction 
        icon={<LineChart className="h-5 w-5 text-defi-accent" />} 
        label="View forecast" 
        onClick={scrollToForecast}
      />
    </div>
  );
};

export default QuickActions;
