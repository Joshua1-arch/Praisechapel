import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    { title: "The Power of Persistent Prayer", author: "Reverend Debo Adeyemo", date: "Jan 10, 2026", category: "Prayer" },
    { title: "Walking in Divine Purpose", author: "Sarah Solomon", date: "Jan 05, 2026", category: "Lifestyle" },
    { title: "Understanding the Apostolic Doctrine", author: "Pastor Samuel Adebayo", date: "Dec 28, 2025", category: "Teaching" },
  ];

  return (
    <div className="flex flex-col bg-zinc-950 min-h-screen">
      <section className="relative py-20 bg-zinc-900 border-b border-zinc-800 overflow-hidden text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">Prophetic <span className="text-brand-red">Blog</span></h1>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto font-medium">Wisdom and insights for your spiritual journey.</p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-brand-red/50 transition-all group">
              <div className="h-48 bg-zinc-800 relative">
                <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} className="text-brand-red" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} className="text-brand-red" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-brand-green transition-colors">{post.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">Discover deep spiritual truths and revelations in this latest exaltation from our leadership.</p>
                <button className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-xs hover:gap-3 transition-all pt-4">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
