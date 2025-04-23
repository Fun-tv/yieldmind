
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { FileText, Search, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';

const documentationSections = [
  {
    title: 'Getting Started',
    subsections: [
      { id: 'intro', title: 'Introduction to YieldMind' },
      { id: 'setup', title: 'Setting Up Your Account' },
      { id: 'first-steps', title: 'Your First Strategy' },
    ]
  },
  {
    title: 'Core Concepts',
    subsections: [
      { id: 'defi-basics', title: 'DeFi Basics' },
      { id: 'liquidity-mining', title: 'Liquidity Mining' },
      { id: 'yield-farming', title: 'Yield Farming' },
      { id: 'staking', title: 'Staking' },
    ]
  },
  {
    title: 'Platform Guide',
    subsections: [
      { id: 'dashboard', title: 'Dashboard Overview' },
      { id: 'portfolio', title: 'Managing Your Portfolio' },
      { id: 'strategies', title: 'Working with Strategies' },
      { id: 'forecasts', title: 'Understanding Yield Forecasts' },
    ]
  },
  {
    title: 'Advanced Topics',
    subsections: [
      { id: 'risk', title: 'Risk Management' },
      { id: 'custom', title: 'Custom Strategies' },
      { id: 'testing', title: 'Strategy Testing' },
      { id: 'analytics', title: 'Performance Analytics' },
    ]
  },
];

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);
  const [selectedDoc, setSelectedDoc] = useState<{section: string, id: string, title: string} | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };
  
  const handleDocClick = (section: string, id: string, title: string) => {
    setSelectedDoc({ section, id, title });
  };

  return (
    <PageLayout title="Documentation" subtitle="Comprehensive guides and reference materials">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-72 shrink-0">
          <Card className="bg-[#151926] rounded-xl p-4 border border-[#232946] sticky top-4">
            <div className="flex items-center gap-2 bg-[#1a1e2e] rounded-lg px-3 py-2 mb-4">
              <Search className="w-4 h-4 text-white/60" />
              <input 
                type="text"
                className="bg-transparent border-none outline-none w-full text-sm text-white placeholder:text-white/40"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              {documentationSections.map((section) => (
                <div key={section.title}>
                  <button 
                    className="flex items-center justify-between w-full p-2 hover:bg-[#232946]/50 rounded-md transition text-left"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="font-medium text-white">{section.title}</span>
                    {expandedSections.includes(section.title) ? (
                      <ChevronDown className="w-4 h-4 text-white/60" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    )}
                  </button>
                  
                  {expandedSections.includes(section.title) && (
                    <div className="ml-2 pl-2 border-l border-[#232946] mt-1 space-y-1">
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          className={`w-full p-2 text-left text-sm rounded-md transition ${
                            selectedDoc?.id === subsection.id
                              ? 'bg-[#232946] text-white'
                              : 'text-white/70 hover:bg-[#232946]/30 hover:text-white'
                          }`}
                          onClick={() => handleDocClick(section.title, subsection.id, subsection.title)}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <Card className="bg-[#151926] rounded-xl p-6 border border-[#232946]">
            {selectedDoc ? (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <button 
                    className="p-1.5 rounded-md hover:bg-[#232946]/50 transition"
                    onClick={() => setSelectedDoc(null)}
                  >
                    <ArrowLeft className="w-4 h-4 text-white/60" />
                  </button>
                  <div>
                    <div className="text-sm text-white/60">{selectedDoc.section}</div>
                    <h2 className="text-xl font-bold text-white">{selectedDoc.title}</h2>
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  {selectedDoc.id === 'intro' ? (
                    <>
                      <p>
                        YieldMind is an AI-powered DeFi yield optimization platform that helps you maximize returns on your crypto assets while managing risk according to your preferences.
                      </p>
                      <p>
                        Our platform analyzes market conditions, protocol yields, and risk factors to recommend the best strategies for your portfolio. With YieldMind, you can deploy capital across multiple DeFi protocols, track performance, and adjust strategies with minimal effort.
                      </p>
                      <h3>Key Features</h3>
                      <ul>
                        <li>AI-driven strategy recommendations</li>
                        <li>Portfolio management and tracking</li>
                        <li>Automated yield optimization</li>
                        <li>Risk-adjusted returns</li>
                        <li>Strategy backtesting and simulation</li>
                      </ul>
                      <p>
                        This documentation will guide you through setting up your account, understanding the platform's features, and maximizing your DeFi yield potential.
                      </p>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-60 text-white/40">
                      <FileText className="w-16 h-16" />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="text-defi-accent w-5 h-5" />
                  <h2 className="text-lg font-semibold text-white">YieldMind Documentation</h2>
                </div>
                
                <p className="text-white/80 mb-6">
                  Welcome to YieldMind documentation. Select a topic from the sidebar to get started with our platform and learn about DeFi yield optimization.
                </p>
                
                <h3 className="font-medium text-white mb-3">Popular Topics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'intro', title: 'Introduction to YieldMind', section: 'Getting Started' },
                    { id: 'setup', title: 'Setting Up Your Account', section: 'Getting Started' },
                    { id: 'defi-basics', title: 'DeFi Basics', section: 'Core Concepts' },
                    { id: 'dashboard', title: 'Dashboard Overview', section: 'Platform Guide' },
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      className="p-4 bg-[#1a1e2e] rounded-lg text-left hover:bg-[#232946]/70 transition"
                      onClick={() => handleDocClick(doc.section, doc.id, doc.title)}
                    >
                      <h4 className="font-medium text-white">{doc.title}</h4>
                      <p className="text-sm text-white/60 mt-1">{doc.section}</p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documentation;
