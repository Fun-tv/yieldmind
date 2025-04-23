
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { BookOpen, ExternalLink, File, FileText, Play } from 'lucide-react';
import { toast } from 'sonner';

const resourceCategories = [
  {
    title: 'Getting Started',
    items: [
      { title: 'DeFi Fundamentals', type: 'doc', time: '10 min read' },
      { title: 'Understanding Yield Farming', type: 'doc', time: '15 min read' },
      { title: 'Liquidity Mining Guide', type: 'video', time: '8:24' }
    ]
  },
  {
    title: 'Strategy Guides',
    items: [
      { title: 'Optimizing APR in Liquidity Pools', type: 'doc', time: '12 min read' },
      { title: 'Staking vs. Yield Farming', type: 'video', time: '11:52' },
      { title: 'Risk Management in DeFi', type: 'doc', time: '20 min read' }
    ]
  },
  {
    title: 'Platform Tutorials',
    items: [
      { title: 'How to Use Liquidswap', type: 'video', time: '7:15' },
      { title: 'Setting Up PortoStake', type: 'doc', time: '8 min read' },
      { title: 'PancakeSwap Trading Guide', type: 'doc', time: '14 min read' }
    ]
  }
];

const Resources = () => {
  const handleResourceClick = (resource: any) => {
    toast.info(`Opening ${resource.title}`, {
      description: `This ${resource.type === 'doc' ? 'article' : 'video'} will open in a new tab`
    });
  };

  return (
    <PageLayout title="Resources" subtitle="Learn about DeFi strategies, platforms, and best practices">
      {resourceCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">{category.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.items.map((resource, resIndex) => (
              <Card
                key={resIndex}
                className="bg-[#151926] rounded-xl p-5 cursor-pointer hover:border-defi-accent/30 transition border border-[#232946]"
                onClick={() => handleResourceClick(resource)}
              >
                <div className="flex justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {resource.type === 'doc' ? (
                      <FileText className="text-defi-accent w-5 h-5" />
                    ) : (
                      <Play className="text-defi-accent w-5 h-5" />
                    )}
                    <div className="px-2 py-0.5 bg-[#232946] text-xs rounded-md text-white/80">
                      {resource.type === 'doc' ? 'Article' : 'Video'}
                    </div>
                  </div>
                  <div className="text-xs text-white/40">{resource.time}</div>
                </div>
                
                <h3 className="text-base font-medium text-white mb-3">{resource.title}</h3>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xs text-white/60">
                    Last updated: Apr 15, 2025
                  </div>
                  
                  <button className="flex items-center gap-1 text-defi-accent hover:text-defi-accent/80 transition text-xs">
                    <span>View</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </PageLayout>
  );
};

export default Resources;
