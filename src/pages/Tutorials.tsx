
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { File, Play, BookOpen, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const tutorials = [
  {
    title: 'Getting Started with YieldMind',
    description: 'Learn how to set up your portfolio and deploy your first strategy',
    type: 'video',
    duration: '5:23',
    difficulty: 'Beginner'
  },
  {
    title: 'Understanding Liquidity Mining',
    description: 'Deep dive into how liquidity mining works and how to maximize returns',
    type: 'article',
    duration: '8 min read',
    difficulty: 'Intermediate'
  },
  {
    title: 'Advanced Risk Management',
    description: 'Learn techniques to assess and mitigate risks in your DeFi strategies',
    type: 'video',
    duration: '12:07',
    difficulty: 'Advanced'
  },
  {
    title: 'Setting Up Alerts and Notifications',
    description: 'Configure custom alerts to stay on top of your portfolio performance',
    type: 'article',
    duration: '5 min read',
    difficulty: 'Beginner'
  },
  {
    title: 'Analyzing Yield Forecasts',
    description: 'How to interpret yield forecasts and make data-driven decisions',
    type: 'video',
    duration: '8:42',
    difficulty: 'Intermediate'
  },
  {
    title: 'Creating Custom Strategies',
    description: 'Learn how to build and test your own custom yield strategies',
    type: 'article',
    duration: '15 min read',
    difficulty: 'Advanced'
  },
];

const Tutorials = () => {
  const handleTutorialClick = (tutorial: any) => {
    toast.info(`Opening ${tutorial.title}`, {
      description: `This ${tutorial.type} will open in a new tab`
    });
  };

  return (
    <PageLayout title="Tutorials" subtitle="Step-by-step guides to master DeFi strategies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card
            key={index}
            className="bg-[#151926] rounded-xl p-0 overflow-hidden border border-[#232946] hover:border-defi-accent/30 transition cursor-pointer"
            onClick={() => handleTutorialClick(tutorial)}
          >
            <div className="bg-[#1a1e2e] h-36 flex items-center justify-center relative">
              {tutorial.type === 'video' ? (
                <>
                  <Play className="w-12 h-12 text-white/80" />
                  <div className="absolute bottom-3 right-3 bg-black/50 px-2 py-0.5 rounded text-xs text-white">
                    {tutorial.duration}
                  </div>
                </>
              ) : (
                <BookOpen className="w-12 h-12 text-white/80" />
              )}
            </div>
            
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="px-2 py-0.5 bg-[#232946] text-xs rounded-md text-white/80">
                  {tutorial.type === 'video' ? 'Video' : 'Article'}
                </div>
                <div className="px-2 py-0.5 bg-[#232946] text-xs rounded-md text-white/80">
                  {tutorial.difficulty}
                </div>
              </div>
              
              <h3 className="font-medium text-white mb-2">{tutorial.title}</h3>
              <p className="text-sm text-white/60 mb-4">{tutorial.description}</p>
              
              <button className="flex items-center gap-1 text-defi-accent hover:text-defi-accent/80 transition text-sm">
                <span>Start Learning</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

export default Tutorials;
