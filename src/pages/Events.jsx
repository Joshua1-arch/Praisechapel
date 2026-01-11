import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, Share2, Bell } from 'lucide-react';

const Events = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000" 
            alt="Events background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
            Holy <span className="text-brand-red">Convocations</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            Stay connected with House-To-House ministries through our local and global gatherings.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden bg-zinc-900/50 border border-zinc-800 shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden border-r border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200" 
                  alt="Featured Event" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest w-fit">
                  Prophetic Call
                </div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Annual Prayer Summit 2026</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                    <CalendarIcon className="text-brand-red" size={20} />
                    <span>August 14 - 17, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                    <MapPin className="text-brand-red" size={20} />
                    <span>Mountain View Retreat Center</span>
                  </div>
                </div>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Join intercessors from across the nation for four days of strategic prayer, spiritual warfare, and divine empowerment.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-brand-green/20 active:scale-95">
                    Register for Summit
                  </button>
                  <button className="p-4 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-brand-red transition-all">
                    <Share2 size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <h3 className="text-4xl font-black text-white uppercase tracking-tight">Gathering <span className="text-brand-green">Calendar</span></h3>
            <div className="flex gap-2 p-1 bg-zinc-900 rounded-full border border-zinc-800">
              <button className="px-6 py-2 rounded-full bg-brand-red text-white text-[10px] font-black uppercase tracking-widest">
                This Month
              </button>
              <button className="px-6 py-2 rounded-full bg-transparent text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">
                Next Month
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Youth Intercession', date: 'Jan 15', time: '6:30 PM', loc: 'Prayer Hall', cat: 'Prophetic' },
              { title: 'Worship Encounter', date: 'Jan 22', time: '7:00 PM', loc: 'The Chapel', cat: 'Liturgical' },
              { title: 'Brothers Fellowship', date: 'Jan 24', time: '8:00 AM', loc: 'Community Hall', cat: 'Fellowship' },
              { title: 'Leadership Anointing', date: 'Feb 02', time: '10:00 AM', loc: 'Classroom A', cat: 'Training' },
              { title: 'Evangelism Sunday', date: 'Feb 08', time: '10:30 AM', loc: 'Main Sanctuary', cat: 'Outreach' },
              { title: 'Covenant Dinner', date: 'Feb 14', time: '6:00 PM', loc: 'Grand Plaza', cat: 'Fellowship' },
            ].map((event, i) => (
              <div key={i} className="group bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 hover:border-brand-green/50 transition-all flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-zinc-800 group-hover:bg-brand-red group-hover:border-brand-red transition-all shadow-xl">
                      <span className="text-zinc-500 text-[10px] font-black uppercase group-hover:text-white transition-colors">{event.date.split(' ')[0]}</span>
                      <span className="text-white text-2xl font-black">{event.date.split(' ')[1]}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-950 text-brand-green text-[10px] font-black uppercase tracking-widest border border-zinc-800">{event.cat}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white group-hover:text-brand-green transition-colors uppercase tracking-tight leading-none">{event.title}</h4>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        <Clock size={14} className="text-brand-red" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} className="text-brand-red" />
                        {event.loc}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-between w-full p-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-black uppercase tracking-widest transition-all border border-zinc-800">
                  Join Gathering
                  <ChevronRight size={18} className="text-brand-red" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-24 bg-brand-green">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="text-white space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tight">Stay in the <span className="text-brand-red">Spirit</span></h2>
            <p className="text-zinc-200 text-lg font-medium">Receive prophetic updates and gathering notifications directly.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-brand-red text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95">
              <Bell size={20} />
              Subscribe
            </button>
            <button className="flex-1 md:flex-none bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 hover:bg-white/20 active:scale-95">
              <CalendarIcon size={20} />
              Add to Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
