
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import WelcomeModal from './WelcomeModal';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const { user, isLoading, connectWallet } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);
  const [checkingMetaMask, setCheckingMetaMask] = useState(true);
  
  // Check for MetaMask on load
  useEffect(() => {
    const checkMetaMask = async () => {
      if (!window.ethereum) {
        console.warn("MetaMask not detected");
        // Only log to console, don't show toast yet as this is just a check
      }
      setCheckingMetaMask(false);
    };
    
    checkMetaMask();
  }, []);
  
  // Check if it's the user's first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited && !isLoading && !user && !checkingMetaMask) {
      // Only show welcome modal after we've confirmed there's no active session
      setShowWelcome(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, [isLoading, user, checkingMetaMask]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#131726] z-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-[#4361EE] animate-spin" />
          <p className="text-white/80 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {children}
      <WelcomeModal 
        open={showWelcome} 
        onOpenChange={setShowWelcome} 
        onConnectWallet={connectWallet} 
      />
    </>
  );
};

export default DashboardWrapper;
