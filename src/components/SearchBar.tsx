
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full bg-[#151926] rounded-xl px-6 py-2 flex items-center gap-4 mb-6 border border-white/6">
      <span className="mr-2 text-white/50 text-lg font-semibold select-none">?</span>
      <input
        type="text"
        className="bg-transparent border-none outline-none flex-1 text-white text-lg font-medium placeholder:text-white/50"
        placeholder="Earn on my USDC"
        defaultValue="Earn on my USDC"
      />
      <button className="bg-[#232946] hover:bg-[#242e6d]/90 transition p-2 rounded-lg flex items-center">
        <ArrowRight className="text-white w-5 h-5" />
      </button>
    </div>
  )
};
export default SearchBar;
