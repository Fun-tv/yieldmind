
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Wallet } from 'lucide-react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ethers } from 'ethers';

const UserProfile = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };
    
    checkConnection();
  }, []);

  // Connect wallet function
  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask not detected! Please install MetaMask.");
      return;
    }

    setIsConnecting(true);
    
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      toast.success("Wallet connected successfully!");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet.");
    } finally {
      setIsConnecting(false);
    }
  };

  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-4 bg-[#151926] rounded-xl px-5 py-3 border border-[#232946] cursor-pointer hover:bg-[#1a1e2e] transition">
          <span className="text-sm text-white/35 font-mono">
            {walletAddress ? formatAddress(walletAddress) : "Not Connected"}
          </span>
          <Avatar className="w-9 h-9 bg-[#222843]">
            <AvatarFallback className="text-white/50">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-[#151926] border border-[#232946] text-white">
        {!walletAddress && (
          <DropdownMenuItem 
            className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1e2e]"
            onClick={connectWallet}
            disabled={isConnecting}
          >
            <Wallet className="w-4 h-4 text-white/50" />
            <span>{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
          </DropdownMenuItem>
        )}
        
        {walletAddress && (
          <DropdownMenuItem className="flex flex-col items-start gap-1 hover:bg-transparent cursor-default">
            <span className="text-xs text-white/50">Connected Wallet</span>
            <span className="font-mono text-sm">{formatAddress(walletAddress)}</span>
          </DropdownMenuItem>
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
