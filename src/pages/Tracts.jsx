import React from 'react';
import { FileText, Share2, Printer } from 'lucide-react';

const Tracts = () => {
  return (
    <div className="flex flex-col bg-zinc-950 min-h-screen">
      <section className="relative py-20 bg-zinc-900 border-b border-zinc-800 overflow-hidden text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">Evangelism <span className="text-brand-red">Tracts</span></h1>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto font-medium">Tools for the Great Commission. Digital tracts for sharing the Good News.</p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Is there Hope?", "Escape for your Life", "The Greatest Love", "Why Jesus?",
            "Life After Death", "The Final Call", "Power in the Blood", "Coming King"
          ].map((tract, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-brand-red transition-all group shadow-xl">
              <div className="aspect-[3/4] bg-zinc-950 border border-zinc-800 rounded-xl mb-6 flex flex-col items-center justify-center gap-4 text-center p-4">
                <FileText size={48} className="text-zinc-800 group-hover:text-brand-green transition-colors duration-500" />
                <h4 className="text-white font-black uppercase tracking-tight text-sm">{tract}</h4>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-brand-red text-white py-2 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-red/90 transition-all">
                  <Printer size={12} /> Print
                </button>
                <button className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tracts;
