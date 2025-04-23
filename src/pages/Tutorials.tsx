
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const tutorials = [
  {
    title: "How to Use Liquidity Pools",
    desc: "Step-by-step guide to LPs, APR, and impermanent loss.",
    link: "#"
  },
  {
    title: "Yield Farming Strategies 101",
    desc: "Boost your DeFi income with proven, safe methods.",
    link: "#"
  },
  {
    title: "Optimizing Portfolio Risk",
    desc: "Balance high yield with stability using DeFi analytics.",
    link: "#"
  },
  {
    title: "Automate Rebalancing in DeFi",
    desc: "How to rebalance your yield assets with one click.",
    link: "#"
  }
];

const Tutorials = () => (
  <PageLayout title="DeFi Tutorials" subtitle="Learn and grow—Master DeFi with top-notch tutorials.">
    <Card className="bg-[#151926] rounded-xl p-6 mb-6 border border-[#232946]">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="text-defi-accent w-5 h-5" />
        <h2 className="text-lg font-semibold text-white">Featured Tutorials</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tutorials.map((tut, i) => (
          <div key={i} className="p-4 bg-[#1a1e2e] rounded-lg flex flex-col gap-2">
            <h3 className="font-semibold text-white">{tut.title}</h3>
            <p className="text-sm text-white/60">{tut.desc}</p>
            <a href={tut.link} className="text-defi-accent hover:underline text-sm">Start learning</a>
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm text-white/60">
        More tutorials coming soon! Suggest a topic in Chat.
      </div>
    </Card>
  </PageLayout>
);

export default Tutorials;
