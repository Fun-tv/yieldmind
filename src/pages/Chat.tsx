
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { ArrowRight, Bot } from 'lucide-react';
import { toast } from 'sonner';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hello! How can I help you with your DeFi strategy today?' }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { role: 'user', content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'I\'m analyzing your request about "' + message + '". Based on current market conditions, I recommend exploring liquidity pools on Liquidswap with USDC-APT pairs for stable returns of approximately 7.3% APR with relatively low risk.' 
        }
      ]);
      
      toast.success('AI response generated', {
        description: 'New strategy insights available'
      });
    }, 1000);
    
    setMessage('');
  };

  return (
    <PageLayout title="Chat with AI DeFi Agent" subtitle="Ask me anything about DeFi strategies and yield optimization">
      <Card className="bg-[#151926] rounded-xl p-6 mb-6 flex-1 flex flex-col border border-[#232946]">
        <div className="flex-1 overflow-auto mb-4 space-y-4">
          {chatHistory.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-xl ${
                  msg.role === 'user' 
                    ? 'bg-[#232946] text-white' 
                    : 'bg-[#1a1e2e] text-white/80'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center mb-2 text-defi-accent">
                    <Bot size={16} className="mr-2" />
                    <span className="font-semibold">YieldMind AI</span>
                  </div>
                )}
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          <input
            type="text"
            className="bg-[#1a1e2e] border-none outline-none flex-1 text-white text-base py-3 px-4 rounded-xl placeholder:text-white/50"
            placeholder="Ask about yield strategies..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-[#232946] hover:bg-[#242e6d]/90 transition p-3 rounded-lg flex items-center">
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Chat;
