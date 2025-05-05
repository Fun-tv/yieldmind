
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Wallet, Plus } from 'lucide-react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ProfileSetup from './ProfileSetup';
import { useAuth } from '@/contexts/AuthContext';

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, isLoading, connectWallet, disconnectWallet } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleConnectWallet = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      toast.error("MetaMask not detected. Please install MetaMask extension to connect your wallet.");
      // Redirect to MetaMask download page after short delay
      setTimeout(() => {
        window.open('https://metamask.io/download/', '_blank');
      }, 2000);
      return;
    }
    
    try {
      await connectWallet();
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-4 bg-[#151926] rounded-xl px-5 py-3 border border-[#232946] cursor-pointer hover:bg-[#1a1e2e] transition">
            {user ? (
              <>
                <span className="text-sm text-white/35 font-mono">
                  {formatAddress(user.address)}
                </span>
                <Avatar className="w-9 h-9 bg-[#222843]">
                  <AvatarFallback className="text-white/50">
                    {user.username ? user.username[0].toUpperCase() : <User className="w-5 h-5" />}
                  </AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <span className="text-sm text-white/35">
                  Not Connected
                </span>
                <Avatar className="w-9 h-9 bg-[#222843]">
                  <AvatarFallback className="text-white/50">
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              </>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-[#151926] border border-[#232946] text-white">
          {!user && (
            <DropdownMenuItem 
              className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1e2e]"
              onClick={handleConnectWallet}
              disabled={isLoading}
            >
              <Wallet className="w-4 h-4 text-white/50" />
              <span>{isLoading ? "Connecting..." : "Connect Wallet"}</span>
            </DropdownMenuItem>
          )}
          
          {user && (
            <>
              <DropdownMenuItem className="flex flex-col items-start gap-1 hover:bg-transparent cursor-default">
                <span className="text-xs text-white/50">Connected Wallet</span>
                <span className="font-mono text-sm">{formatAddress(user.address)}</span>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1e2e]"
                onClick={() => setIsProfileOpen(true)}
              >
                <Plus className="w-4 h-4 text-white/50" />
                <span>{user.username ? "Edit Profile" : "Complete Profile"}</span>
              </DropdownMenuItem>
            </>
          )}
          
          <DropdownMenuItem 
            className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1e2e]"
            onClick={() => {
              toast.info("Settings page coming soon");
              // navigate("/settings"); // Uncomment when settings page is created
            }}
          >
            <Settings className="w-4 h-4 text-white/50" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-white/10" />
          {user ? (
            <DropdownMenuItem 
              className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1e2e] text-red-400"
              onClick={() => {
                disconnectWallet();
                toast.success("Logged out successfully");
              }}
            >
              <LogOut className="w-4 h-4" />
              <span>Disconnect</span>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem 
              className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1e2e] text-red-400"
              onClick={() => {
                toast.success("Logged out successfully");
                navigate("/");
              }}
            >
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Profile Setup Dialog */}
      <ProfileSetup open={isProfileOpen} onOpenChange={setIsProfileOpen} />
    </>
  );
};

export default UserProfile;
