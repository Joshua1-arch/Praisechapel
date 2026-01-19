import React, { useState } from 'react';
import {
  Calendar, Quote, ArrowRight, Zap, Download, Share2,
  Facebook, Instagram, Youtube, X, ChevronRight, ChevronLeft,
  Maximize2, Camera, Shield
} from 'lucide-react';

const DailyCharge = () => {
  const [selectedCharge, setSelectedCharge] = useState(null);

  const charges = [
    {
      title: "Shun Pride, Shine Humility",
      date: "Monday January 12, 2026",
      verse: "Prov 16:18",
      content: "It is a tiny emotional disease but send a whole life into destruction. When hidden in one's hearts it is more cruel than rulers of darkness of this world. No one has it and receives the favour of God and man. It is Mr Pride. Since the devil was banished from Heaven, no one miss him. As you go out today, shun pride, shine humility.",
      reference: "Pride goeth before destruction, and an haughty spirit before a fall (KJV)",
      image: "/12.jpg"
    },
    {
      title: "The Fire on the Altar",
      date: "Sunday January 11, 2026",
      verse: "Leviticus 6:13",
      content: "The fire must be kept burning on the altar continuously; it must not go out. Your heart is the altar; keep your devotion burning through prayer.",
      reference: "The fire shall ever be burning upon the altar; it shall never go out. (KJV)",
      image: "/eader6.JPG"
    }
  ];

  const nextCharge = (e) => {
    e.stopPropagation();
    const currentIndex = charges.findIndex(c => c.title === selectedCharge.title);
    const nextIndex = (currentIndex + 1) % charges.length;
    setSelectedCharge(charges[nextIndex]);
  };

  const prevCharge = (e) => {
    e.stopPropagation();
    const currentIndex = charges.findIndex(c => c.title === selectedCharge.title);
    const prevIndex = (currentIndex - 1 + charges.length) % charges.length;
    setSelectedCharge(charges[prevIndex]);
  };

  const handleDownload = async (imageUrl, title) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `PraiseChapel-DailyCharge-${title.replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to simple link if fetch fails
      const link = document.createElement('a');
      link.href = imageUrl;
      link.target = '_blank';
      link.download = `DailyCharge-${title}.jpg`;
      link.click();
    }
  };

  return (
    <div className="flex flex-col bg-[var(--bg-body)] min-h-screen">
      {/* Header */}
      <section className="relative py-24 bg-[var(--bg-card)] border-b border-[var(--border-color)] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-[150px] -ml-48 -mt-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-[150px] -mr-48 -mb-48"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest">
            <Zap size={12} className="fill-current" />
            Spiritual Fuel
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[var(--text-main)] uppercase tracking-tighter leading-none">
            Daily <span className="text-brand-red">Charge</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
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
                <div
                  className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-[var(--bg-card)] rounded-[2rem] overflow-hidden border border-[var(--border-color)] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                  onClick={() => setSelectedCharge(charge)}
                >
                  {/* Watermark Overlay (Fixed) */}
                  <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden opacity-10 flex items-center justify-center rotate-[-30deg]">
                    <span className="text-white text-4xl font-black whitespace-nowrap uppercase tracking-[1em]">
                      PRAISE CHAPEL MEDIA • HOUSE-TO-HOUSE
                    </span>
                  </div>

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
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDownload(charge.image, charge.title); }}
                      className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
                    >
                      <Download size={18} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedCharge(charge); }}
                      className="w-10 h-10 bg-[var(--bg-card)] text-[var(--text-main)] rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text / Article Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Charge</div>
                  <h3 className="text-4xl md:text-5xl font-black text-[var(--text-main)] uppercase tracking-tight leading-none">
                    {charge.title}
                  </h3>
                </div>

                <div className="flex gap-6">
                  <Quote size={48} className="text-brand-red/20 shrink-0" />
                  <div className="space-y-6">
                    <p className="text-[var(--text-muted)] text-lg leading-relaxed font-medium italic">
                      {charge.content}
                    </p>
                    <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                      <div className="text-brand-green font-black uppercase tracking-widest text-[10px] mb-2">Scripture Reference</div>
                      <div className="text-[var(--text-main)] font-bold text-xl mb-1">{charge.verse}</div>
                      <div className="text-[var(--text-muted)] text-sm font-medium italic">{charge.reference}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-6">
                  <button
                    onClick={() => handleDownload(charge.image, charge.title)}
                    className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-brand-red hover:text-white transition-all shadow-lg active:scale-95"
                  >
                    <Download size={16} /> Save Image
                  </button>
                  <button className="text-[var(--text-muted)] hover:text-[var(--text-main)] font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
                    <Share2 size={16} /> Share Word
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Preview Section */}
      {selectedCharge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-[var(--bg-body)]/95 backdrop-blur-2xl"
            onClick={() => setSelectedCharge(null)}
          ></div>

          <button
            className="absolute top-8 right-8 z-[110] w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-brand-red transition-all shadow-2xl"
            onClick={() => setSelectedCharge(null)}
          >
            <X size={24} />
          </button>

          {/* Navigation Controls */}
          <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between z-[110] pointer-events-none">
            <button
              onClick={prevCharge}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] flex items-center justify-center hover:bg-brand-red transition-all pointer-events-auto active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextCharge}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] flex items-center justify-center hover:bg-brand-red transition-all pointer-events-auto active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="relative z-[105] max-w-5xl w-full bg-[var(--bg-card)] rounded-[3rem] overflow-hidden border border-[var(--border-color)] shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-500">
            <div className="lg:flex-1 h-[60vh] lg:h-[75vh] relative group/preview">
              {/* Full Designed Card Replicated in Lightbox */}
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-red/40 to-zinc-950"></div>
              <img src={selectedCharge.image} className="w-full h-full object-cover mix-blend-overlay opacity-80" alt={selectedCharge.title} />

              {/* Card Decoration Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 md:p-12 text-center text-white">
                <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" className="h-10 w-10 object-contain" alt="Logo" />
                    <div className="flex flex-col border-l border-white/20 pl-3 text-left">
                      <span className="text-white text-[10px] font-black leading-tight">PRAISE CHAPEL</span>
                      <span className="text-zinc-400 text-[8px] font-bold uppercase">Youth Fellowship</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-2 leading-none text-white shadow-2xl">DAILY CHARGE</h2>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-300 mb-8">{selectedCharge.date}</div>

                <div className="bg-black/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 w-full max-w-lg shadow-2xl">
                  <p className="text-sm md:text-base font-medium leading-relaxed mb-6 italic text-zinc-100">
                    "{selectedCharge.content}"
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-brand-red font-black text-xs uppercase tracking-widest mb-1">{selectedCharge.verse}</div>
                    <div className="text-[10px] font-medium text-zinc-400">{selectedCharge.reference}</div>
                  </div>
                </div>

                {/* Footer Logo/Socials in Preview */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center gap-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
                    <Instagram size={12} /> Praise Chapel Youth
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
                    <Facebook size={12} /> Praise Chapel Media
                  </div>
                </div>
              </div>

              {/* Security Watermark */}
              <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center rotate-[-25deg] opacity-[0.05]">
                <span className="text-white text-6xl font-black whitespace-nowrap uppercase tracking-[1.5em]">
                  HOUSE-TO-HOUSE PRAYER MINISTRIES OFFICIAL
                </span>
              </div>
            </div>

            <div className="lg:w-96 p-8 md:p-12 flex flex-col justify-between bg-[var(--bg-card)] border-l border-[var(--border-color)]">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-[10px]">
                    <Shield size={12} />
                    Official Daily Charge
                  </div>
                  <h2 className="text-3xl font-black text-[var(--text-main)] uppercase tracking-tight leading-none">{selectedCharge.title}</h2>
                  <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest pt-2 border-t border-zinc-800/50">{selectedCharge.date}</div>
                </div>

                <div className="space-y-4">
                  <p className="text-[var(--text-muted)] font-medium leading-relaxed italic text-sm">"{selectedCharge.content}"</p>
                  <div className="p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)]">
                    <div className="text-brand-red font-black text-[9px] uppercase tracking-[0.2em] mb-1">{selectedCharge.verse}</div>
                    <div className="text-[10px] text-[var(--text-muted)] italic leading-tight">{selectedCharge.reference}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-8">
                <button
                  onClick={() => handleDownload(selectedCharge.image, selectedCharge.title)}
                  className="w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[10px] shadow-xl flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white transition-all active:scale-95"
                >
                  <Download size={14} />
                  Download Charge
                </button>
                <button
                  onClick={() => setSelectedCharge(null)}
                  className="w-full py-4 rounded-xl bg-[var(--bg-input)] text-[var(--text-muted)] font-black uppercase tracking-widest text-[10px] border border-[var(--border-color)] flex items-center justify-center gap-2 hover:text-[var(--text-main)] transition-all active:scale-95"
                >
                  Back to Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
