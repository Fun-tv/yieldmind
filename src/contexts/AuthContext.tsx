
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import { toast } from 'sonner';

type User = {
  address: string;
  username: string | null;
  isAuthenticated: boolean;
};

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  updateUsername: (username: string) => void;
}

const initialState: AuthContextType = {
  user: null,
  isLoading: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  updateUsername: () => {},
};

const AuthContext = createContext<AuthContextType>(initialState);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // Check if wallet was connected previously
        const savedAddress = localStorage.getItem('walletAddress');
        const savedUsername = localStorage.getItem('username');
        
        if (savedAddress) {
          // Verify if the wallet is still connected
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();
            if (accounts.length > 0 && accounts[0].toLowerCase() === savedAddress.toLowerCase()) {
              // Wallet is still connected
              setUser({
                address: accounts[0],
                username: savedUsername,
                isAuthenticated: true
              });
            } else {
              // Wallet is no longer connected, clear storage
              localStorage.removeItem('walletAddress');
              localStorage.removeItem('username');
            }
          } else {
            // No ethereum object, clear storage
            localStorage.removeItem('walletAddress');
            localStorage.removeItem('username');
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkSession();
    
    // Set up event listeners for account changes
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected wallet
          disconnectWallet();
        } else if (user && accounts[0] !== user.address) {
          // User switched account
          setUser({
            address: accounts[0],
            username: user.username,
            isAuthenticated: true
          });
          localStorage.setItem('walletAddress', accounts[0]);
          toast.info("Wallet account changed");
        }
      };
      
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask not detected! Please install MetaMask extension and refresh the page.");
      return;
    }

    setIsLoading(true);
    
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      
      // Generate a nonce for the user to sign
      const nonce = Math.floor(Math.random() * 1000000).toString();
      const message = `Welcome to YieldMind! Sign this message to authenticate. Nonce: ${nonce}`;
      
      // Request signature from user
      const signature = await signer.signMessage(message);
      
      // Verify signature on client side
      const recoveredAddress = ethers.utils.verifyMessage(message, signature);
      
      if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
        // Authentication successful
        const newUser = {
          address,
          username: localStorage.getItem('username'),
          isAuthenticated: true
        };
        
        setUser(newUser);
        localStorage.setItem('walletAddress', address);
        
        toast.success("Wallet connected successfully!");
      } else {
        toast.error("Authentication failed: Signature verification failed");
      }
    } catch (error: any) {
      console.error("Error connecting wallet:", error);
      
      // Provide more specific error messages based on common errors
      if (error.code === 4001) {
        toast.error("Connection rejected. Please approve the connection request in MetaMask.");
      } else if (error.message && error.message.includes("already processing")) {
        toast.error("A MetaMask request is already in progress. Please check your MetaMask extension.");
      } else {
        toast.error("Failed to connect wallet. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setUser(null);
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('username');
    toast.success("Disconnected wallet");
  };
  
  const updateUsername = (username: string) => {
    if (user) {
      const updatedUser = { ...user, username };
      setUser(updatedUser);
      localStorage.setItem('username', username);
      toast.success("Username updated successfully");
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      connectWallet, 
      disconnectWallet,
      updateUsername
    }}>
      {children}
    </AuthContext.Provider>
  );
};
