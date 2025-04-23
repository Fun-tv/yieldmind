
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  LayoutDashboard, 
  MessageSquare, 
  History, 
  Wallet, 
  BarChart2, 
  TrendingUp, 
  ArrowUpRight, 
  TestTube, 
  BookOpen,
  File,
  FileText
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2 px-2 py-5">
    <div className="rounded-full bg-defi-accent/20 p-2">
      <Brain className="w-5 h-5 text-defi-accent" />
    </div>
    <span className="text-xl font-bold text-white">YieldMind</span>
  </div>
);

const SidebarLink = ({ 
  icon: Icon, 
  label, 
  to, 
  isActive = false 
}: { 
  icon: React.ElementType; 
  label: string; 
  to: string; 
  isActive?: boolean 
}) => (
  <Link to={to} className={`sidebar-link ${isActive ? 'active' : ''}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

const SidebarDivider = ({ label }: { label?: string }) => (
  <div className="mt-6 mb-2 px-3">
    {label && <h3 className="text-sm font-semibold text-defi-muted">{label}</h3>}
    {!label && <div className="h-px bg-white/10"></div>}
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar h-screen flex-shrink-0 overflow-y-auto border-r border-white/5">
      <div className="px-4">
        <Logo />
        
        <nav className="mt-8 flex flex-col gap-1">
          <SidebarLink icon={Brain} label="AI DeFi Agent" to="/agent" />
          <SidebarLink icon={LayoutDashboard} label="Dashboard" to="/" isActive={true} />
          <SidebarLink icon={MessageSquare} label="Chat" to="/chat" />
          <SidebarLink icon={History} label="History" to="/history" />
          <SidebarLink icon={Wallet} label="Portfolio" to="/portfolio" />
          
          <SidebarDivider label="Strategies" />
          <SidebarLink icon={BarChart2} label="Strategies" to="/strategies" />
          <SidebarLink icon={TrendingUp} label="Best yield strategy" to="/best-yield" />
          <SidebarLink icon={ArrowUpRight} label="Rebalance yields" to="/rebalance" />
          <SidebarLink icon={TestTube} label="Try test strategy" to="/test-strategy" />
          
          <SidebarDivider label="Resources" />
          <SidebarLink icon={BookOpen} label="Resources" to="/resources" />
          <SidebarLink icon={File} label="Tutorials" to="/tutorials" />
          <SidebarLink icon={FileText} label="Documentation" to="/documentation" />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
