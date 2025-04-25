
import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { toast } from 'sonner';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const examples = [
    "Earn on my USDC",
    "Best strategy for low risk",
    "How to stake APT tokens",
    "Compare yield farming options"
  ];

  const handleSearch = () => {
    if (!query.trim()) {
      toast.error('Please enter a query');
      return;
    }
    
    setIsProcessing(true);
    
    toast.success('Processing your query', {
      description: `Finding best ways to ${query.toLowerCase()}`,
    });
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      toast.info('Results ready', {
        description: 'Check the strategies section for personalized recommendations',
      });
    }, 1500);
  };
  
  const setExampleQuery = (example: string) => {
    setQuery(example);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full bg-[#151926] rounded-xl px-6 py-2 flex items-center gap-4 mb-1 border border-white/6">
        <Search className="text-white/50 w-5 h-5" />
        <input
          type="text"
          className="bg-transparent border-none outline-none flex-1 text-white text-lg font-medium placeholder:text-white/50"
          placeholder="Ask anything about DeFi strategies..."
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
          disabled={isProcessing}
          className="bg-[#232946] hover:bg-[#242e6d]/90 transition p-2 rounded-lg flex items-center disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-defi-accent/50">
          {isProcessing ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <ArrowRight className="text-white w-5 h-5" />
          )}
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2 px-1 mb-3">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setExampleQuery(example)}
            className="text-xs text-white/70 hover:text-white/90 bg-[#232946]/50 hover:bg-[#232946]/80 px-3 py-1 rounded-full transition"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  )
};

export default SearchBar;
