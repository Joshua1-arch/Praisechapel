import React, { useState } from 'react';
import { Play, Music, FileText, Search, Filter, ChevronRight, Clock, Calendar, X } from 'lucide-react';

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All');

  const sermonsData = [
    { title: 'The Heart of Worship', speaker: 'Reverend Debo Adeyemo', date: 'Jan 11, 2026', img: 'https://images.unsplash.com/photo-1510563393911-372138a37d22?auto=format&fit=crop&q=80&w=800', category: 'Worship', duration: '45 min' },
    { title: 'Unwavering Faith', speaker: 'Sarah Solomon', date: 'Jan 4, 2026', img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800', category: 'Faith', duration: '52 min' },
    { title: 'Power in Prayer', speaker: 'Michael Chen', date: 'Dec 28, 2025', img: 'https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=800', category: 'Prayer', duration: '38 min' },
    { title: 'Divine Purpose', speaker: 'Reverend Debo Adeyemo', date: 'Dec 21, 2025', img: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=800', category: 'Living', duration: '41 min' },
    { title: 'Victory in Christ', speaker: 'Pastor Samuel', date: 'Dec 14, 2025', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800', category: 'Faith', duration: '48 min' },
  ];

  const speakers = ['All', ...new Set(sermonsData.map(s => s.speaker))];

  const filteredSermons = sermonsData.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sermon.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpeaker = selectedSpeaker === 'All' || sermon.speaker === selectedSpeaker;
    return matchesSearch && matchesSpeaker;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000" 
            alt="Sermon background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-brand-green/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
            Messages & <span className="text-brand-red">Exaltations</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            "Faith comes by hearing, and hearing by the word of God." Explore our library of prophetic teachings.
          </p>
          
          <div className="max-w-2xl mx-auto space-y-4 mt-12">
            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl focus-within:border-brand-red transition-all">
              <Search className="text-zinc-500 ml-4" size={24} />
              <input 
                type="text" 
                placeholder="Search by topic, scripture, or speaker..." 
                className="bg-transparent border-none focus:ring-0 text-white w-full px-4 py-3 text-lg outline-none placeholder:text-zinc-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="p-2 text-zinc-500 hover:text-white">
                  <X size={20} />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {speakers.map(speaker => (
                <button
                  key={speaker}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                    selectedSpeaker === speaker 
                      ? 'bg-brand-red border-brand-red text-white' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white'
                  }`}
                >
                  {speaker}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-brand-red font-black uppercase tracking-[0.2em] text-xs mb-4">Latest Series</h2>
              <h3 className="text-4xl font-black text-white uppercase tracking-tight">The Life of Prayer</h3>
            </div>
            <button className="text-brand-green font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all">
              All Series <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-zinc-900">
                <img 
                  src={`https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=400&sig=${i}`} 
                  alt="Series cover" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-brand-red font-black text-xs uppercase mb-2">Part {i}</div>
                  <h4 className="text-white font-black text-lg uppercase tracking-tight leading-none">Walking in the Spirit</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Archive */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tight">Recent <span className="text-brand-green">Word</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((msg, i) => (
              <div key={i} className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-brand-red/50 transition-all shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <img src={msg.img} alt={msg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green shadow-2xl">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-red/90 text-white text-[8px] font-black uppercase tracking-widest rounded-full">{msg.category}</span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-brand-red" /> {msg.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} className="text-brand-red" /> {msg.duration}</span>
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-brand-red transition-colors uppercase tracking-tight leading-none">{msg.title}</h3>
                  <p className="text-zinc-400 font-bold text-sm">with {msg.speaker}</p>
                  
                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 bg-brand-green hover:bg-brand-green/90 text-white py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-green/10">
                      <Play size={14} fill="currentColor" /> Watch
                    </button>
                    <button className="p-3 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-brand-red transition-all">
                      <Music size={18} />
                    </button>
                    <button className="p-3 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-brand-red transition-all">
                      <FileText size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-12 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-zinc-800 active:scale-95">
              Load More Exaltations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
