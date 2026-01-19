import React from 'react';
import { Heart, Clock, Music } from 'lucide-react';

const Meditation = () => {
  return (
    <div className="flex flex-col bg-[var(--bg-body)] min-h-screen">
      <section className="relative py-20 bg-[var(--bg-card)] border-b border-[var(--border-color)] overflow-hidden text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[var(--text-main)] uppercase tracking-tight">Bible <span className="text-brand-red">Meditation</span></h1>
        <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto font-medium">Be still and know that I am God. Weekly contemplative resources.</p>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          <div className="p-10 rounded-[3rem] bg-[var(--bg-card)] border border-brand-green/30 relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <span className="bg-brand-green text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">Today's Focus</span>
                <Clock className="text-brand-red" size={20} />
              </div>
              <h2 className="text-3xl font-black text-[var(--text-main)] uppercase tracking-tight leading-none italic">"Thou wilt keep him in perfect peace, whose mind is stayed on thee."</h2>
              <p className="text-brand-red font-black text-xs uppercase tracking-widest">— Isaiah 26:3</p>
              <div className="pt-6 border-t border-[var(--border-color)]">
                <p className="text-[var(--text-muted)] leading-relaxed font-medium">As you go through your day, fix your spiritual eyes on the Prince of Peace. Let the noise of the world fade into the background of His presence.</p>
              </div>
              <button className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] py-4 rounded-2xl text-[var(--text-main)] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-[var(--bg-body)] transition-all">
                <Music size={16} /> Play Audio Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meditation;
