
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 relative mt-6 mb-10">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-5 w-5 text-defi-muted" />
        <input
          type="text"
          placeholder="Earn on my USDC"
          className="w-full bg-defi-card border border-white/10 rounded-xl py-3 pl-10 pr-12 focus:outline-none focus:ring-1 focus:ring-defi-accent/50"
          defaultValue="Earn on my USDC"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-defi-accent text-white hover:bg-defi-accent/90 transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
