
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-4 bg-[#151926] rounded-xl px-5 py-3 border border-[#232946] cursor-pointer hover:bg-[#1a1e2e] transition">
          <span className="text-sm text-white/35 font-mono">Svv41/2235678</span>
          <Avatar className="w-9 h-9 bg-[#222843]">
            <AvatarFallback className="text-white/50">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-[#151926] border border-[#232946] text-white">
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
