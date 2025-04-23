
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const SearchBar = () => {
  const [query, setQuery] = useState("Earn on my USDC");

  const handleSearch = () => {
    toast.success('Processing your query', {
      description: `Finding best ways to earn on your USDC`,
    });
    // In a real app, this would trigger a search or AI processing
  };

  return (
    <div className="w-full bg-[#151926] rounded-xl px-6 py-2 flex items-center gap-4 mb-6 border border-white/6">
      <span className="mr-2 text-white/50 text-lg font-semibold select-none">?</span>
      <input
        type="text"
        className="bg-transparent border-none outline-none flex-1 text-white text-lg font-medium placeholder:text-white/50"
        placeholder="Earn on my USDC"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button 
        onClick={handleSearch}
        className="bg-[#232946] hover:bg-[#242e6d]/90 transition p-2 rounded-lg flex items-center">
        <ArrowRight className="text-white w-5 h-5" />
      </button>
    </div>
  )
};
export default SearchBar;
