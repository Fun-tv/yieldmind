
import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#000B1D] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-white/80 mb-8">
          Stay updated with the latest insights and news in DeFi and AI technology.
        </p>
        <div className="grid gap-8">
          <article className="border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-white/80">Our blog content is being prepared. Check back soon!</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
