
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { BookOpen, BarChart2, TrendingUp } from "lucide-react";

const resources = [
  {
    title: "Yield Aggregators",
    desc: "Compare yields across top DeFi protocols instantly.",
    icon: <BarChart2 className="text-defi-accent w-6 h-6 mb-2" />,
    link: "#"
  },
  {
    title: "DeFi Risk Analytics",
    desc: "Assess asset risk with AI-powered analytics and levels.",
    icon: <TrendingUp className="text-green-500 w-6 h-6 mb-2" />,
    link: "#"
  },
  {
    title: "Protocol Deep Dives",
    desc: "Research detailed data per protocol, returns and news.",
    icon: <BookOpen className="text-yellow-500 w-6 h-6 mb-2" />,
    link: "#"
  }
];

const Resources = () => (
  <PageLayout title="DeFi Resources" subtitle="Access tooling, analytics, protocol data, and more.">
    <Card className="bg-[#151926] rounded-xl p-6 mb-6 border border-[#232946]">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="text-defi-accent w-5 h-5" />
        <h2 className="text-lg font-semibold text-white">Key Resources</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {resources.map((item, i) => (
          <a key={i} href={item.link} className="flex flex-col items-center p-5 rounded-xl bg-[#232946]/30 hover:bg-[#232946]/50 transition text-center">
            {item.icon}
            <span className="font-semibold text-white mb-1">{item.title}</span>
            <span className="text-white/60 text-sm">{item.desc}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-xs text-white/50">
        Want more? Request custom research or analytics via Chat.
      </div>
    </Card>
  </PageLayout>
);

export default Resources;
