
import React from 'react';
import { TrendingUp, ArrowUpRight, BarChart2 } from 'lucide-react';

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
  // Scroll to forecast
  const scrollToForecast = () => {
    const el = document.getElementById('yield-forecast');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex flex-row gap-4 w-full mb-8">
      <QuickAction
        icon={<TrendingUp className="w-5 h-5 text-defi-accent" />}
        label="Best yield strategy"
        onClick={() => alert("Best yield strategy clicked")}
      />
      <QuickAction
        icon={<ArrowUpRight className="w-5 h-5 text-defi-success" />}
        label="Rebalance yields"
        onClick={() => alert("Rebalance yields clicked")}
      />
      <QuickAction
        icon={<BarChart2 className="w-5 h-5 text-white" />}
        label="View forecast"
        onClick={scrollToForecast}
      />
    </div>
  );
};
export default QuickActions;
