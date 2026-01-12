import React from 'react';
import { Calendar, Quote, ArrowRight, Zap, Download, Share2, Facebook, Instagram, Youtube } from 'lucide-react';

const DailyCharge = () => {
  const charges = [
    { 
      title: "Shun Pride, Shine Humility", 
      date: "Monday January 12, 2026", 
      verse: "Prov 16:18", 
      content: "It is a tiny emotional disease but send a whole life into destruction. When hidden in one's hearts it is more cruel than rulers of darkness of this world. No one has it and receives the favour of God and man. It is Mr Pride. Since the devil was banished from Heaven, no one miss him. As you go out today, shun pride, shine humility.",
      reference: "Pride goeth before destruction, and an haughty spirit before a fall (KJV)",
      image: "/daily-charge-1.jpg" // Placeholder for the user's image
    },
    { 
      title: "The Fire on the Altar", 
      date: "Sunday January 11, 2026", 
      verse: "Leviticus 6:13", 
      content: "The fire must be kept burning on the altar continuously; it must not go out. Your heart is the altar; keep your devotion burning through prayer.",
      reference: "The fire shall ever be burning upon the altar; it shall never go out. (KJV)",
      image: "https://images.unsplash.com/photo-1544427928-c49cdfebf494?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="flex flex-col bg-zinc-950 min-h-screen">
      {/* Header */}
      <section className="relative py-24 bg-zinc-900 border-b border-zinc-800 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-[150px] -ml-48 -mt-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-[150px] -mr-48 -mb-48"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest">
            <Zap size={12} className="fill-current" />
            Spiritual Fuel
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Daily <span className="text-brand-red">Charge</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            Daily prophetic words and visual inspirations from Praise Chapel Youth Fellowship to keep your fire burning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-24">
          {charges.map((charge, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-12 items-center">
              
              {/* Image Card (Visual Component) */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-4 bg-brand-red/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Decorative Header like the reference image */}
                  <div className="absolute top-0 left-0 right-0 p-8 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                    <div className="flex items-center gap-3">
                      <img src="/logo.png" className="h-10 w-10 object-contain" alt="Logo" />
                      <div className="flex flex-col border-l border-white/20 pl-3">
                        <span className="text-white text-[10px] font-black leading-tight">PRAISE CHAPEL</span>
                        <span className="text-zinc-400 text-[8px] font-bold">YOUTH FELLOWSHIP</span>
                      </div>
                    </div>
                  </div>

                  {/* Background Image / Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/40 to-zinc-950 z-10"></div>
                  <img 
                    src={charge.image} 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-1000 group-hover:scale-110" 
                    alt={charge.title} 
                  />

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 md:p-12 text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-none text-white/95">DAILY CHARGE</h2>
                    <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-300 mb-8">{charge.date}</div>
                    
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 w-full max-w-md">
                      <p className="text-xs md:text-sm font-medium leading-relaxed mb-6 italic text-zinc-100">
                        "{charge.content}"
                      </p>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-brand-red font-black text-[10px] uppercase tracking-widest mb-1">{charge.verse}</div>
                        <div className="text-[10px] font-medium text-zinc-400">{charge.reference}</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Footnote like the reference image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-center gap-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-1.5 text-[8px] font-bold text-zinc-400">
                      <Instagram size={10} /> Praise Chapel Youth
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold text-zinc-400">
                      <Facebook size={10} /> Praise Chapel Media
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold text-zinc-400">
                      <Youtube size={10} /> Praise Chapel Media
                    </div>
                  </div>

                  {/* Interaction Buttons */}
                  <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
                      <Download size={18} />
                    </button>
                    <button className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text / Article Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Charge</div>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                    {charge.title}
                  </h3>
                </div>

                <div className="flex gap-6">
                  <Quote size={48} className="text-brand-red/20 shrink-0" />
                  <div className="space-y-6">
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium italic">
                      {charge.content}
                    </p>
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                      <div className="text-brand-green font-black uppercase tracking-widest text-[10px] mb-2">Scripture Reference</div>
                      <div className="text-white font-bold text-xl mb-1">{charge.verse}</div>
                      <div className="text-zinc-500 text-sm font-medium italic">{charge.reference}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-6">
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-brand-red hover:text-white transition-all">
                    <Download size={16} /> Save Image
                  </button>
                  <button className="text-zinc-500 hover:text-white font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
                    <Share2 size={16} /> Share Word
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-red mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
            Get Daily Fuel <br /><span className="text-black">On WhatsApp</span>
          </h2>
          <p className="text-lg text-white/80 font-medium">
            Join our community to receive the Daily Charge directly to your phone every morning.
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:-translate-y-1 transition-all active:scale-95">
            Join Broadcast List
          </button>
        </div>
      </section>
    </div>
  );
};

export default DailyCharge;
