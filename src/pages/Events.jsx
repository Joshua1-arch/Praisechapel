import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, Share2, Bell } from 'lucide-react';

const Events = () => {
  const addToCalendar = (event) => {
    const { title, date, time, loc, desc } = event;
    
    // Basic date parsing logic for Google Calendar format (YYYYMMDDTHHmmSSZ)
    // Note: This is a simplified version. For a production app, use date-fns or dayjs.
    const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    
    // Extract year, month, day
    // Example date formats: "August 15 2026", "February 02 2026", "March 1-3 2026"
    const dateParts = date.replace('-', ' ').split(' ');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Try to find month index
    const monthIndex = monthNames.findIndex(m => dateParts[0].toLowerCase().startsWith(m.toLowerCase().substring(0, 3)));
    const month = (monthIndex + 1).toString().padStart(2, '0');
    const day = dateParts[1].padStart(2, '0').substring(0, 2);
    const year = dateParts[dateParts.length - 1];
    
    // Default time to 09:00 if not provided
    const startTime = time ? time.replace(/[:\sAPM]/g, '').padStart(4, '0') + '00' : '090000';
    const startDate = `${year}${month}${day}T${startTime}`;
    const endDate = `${year}${month}${day}T${(parseInt(startTime) + 20000).toString().padStart(6, '0')}`; // Add 2 hours
    
    const url = `${baseUrl}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(desc || 'Ministry Gathering at Praise Chapel')}&location=${encodeURIComponent(loc)}&dates=${startDate}/${endDate}`;
    
    window.open(url, '_blank');
  };

  const featuredEvent = {
    title: "Prophetic Prayer Meeting",
    date: "February 1 2026",
    loc: "Headquarters",
    desc: "Join intercessors from across the nation for three days of strategic prophetic prayer, spiritual warfare, and divine empowerment."
  };

  const upcomingEvents = [
    { title: 'National Youth Convention', date: 'August 15 2026', time: '4:30 PM', loc: 'Headquarters', cat: 'Convention' },
    { title: 'March Prohetic Prayer Meeting', date: 'March 1 2026', time: '5:00 PM', loc: 'Headquarters', cat: 'Prophetic' },
    { title: 'Drama Week', date: 'October 4 2026', time: '8:00 AM', loc: 'Headquarters', cat: 'Drama' },
    { title: 'Leadership Anointing', date: 'February 02 2026', time: '10:00 AM', loc: 'Headquarters', cat: 'Training' },
    { title: 'Evangelism Sunday', date: 'February 08 2026', time: '10:30 AM', loc: 'Main Sanctuary', cat: 'Outreach' },
    { title: 'Covenant Dinner', date: 'February 14 2026', time: '6:00 PM', loc: 'Grand Plaza', cat: 'Fellowship' },
  ];

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
                <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Prophetic Prayer Meeting</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                    <CalendarIcon className="text-brand-red" size={20} />
                    <span>Febuary 1 - 3, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                    <MapPin className="text-brand-red" size={20} />
                    <span>Headquarters</span>
                  </div>
                </div>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Join intercessors from across the nation for three days of strategic prophetic prayer, spiritual warfare, and divine empowerment.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-brand-green/20 active:scale-95">
                    Register
                  </button>
                  <button 
                    onClick={() => addToCalendar(featuredEvent)}
                    className="p-4 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-brand-red transition-all flex items-center gap-2"
                    title="Add to Calendar"
                  >
                    <CalendarIcon size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Add to Calendar</span>
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
            {upcomingEvents.map((event, i) => (
              <div key={i} className="group bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 hover:border-brand-green/50 transition-all flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-zinc-800 group-hover:bg-brand-red group-hover:border-brand-red transition-all shadow-xl">
                      <span className="text-zinc-500 text-[10px] font-black uppercase group-hover:text-white transition-colors">{event.date.split(' ')[0].substring(0, 3)}</span>
                      <span className="text-white text-2xl font-black">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-950 text-brand-green text-[10px] font-black uppercase tracking-widest border border-zinc-800">{event.cat}</span>
                      <button 
                        onClick={() => addToCalendar(event)}
                        className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-brand-red transition-all"
                        title="Add to Calendar"
                      >
                        <CalendarIcon size={14} />
                      </button>
                    </div>
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
                  Register
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
            <button 
              onClick={() => addToCalendar(featuredEvent)}
              className="flex-1 md:flex-none bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 hover:bg-white/20 active:scale-95"
            >
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
