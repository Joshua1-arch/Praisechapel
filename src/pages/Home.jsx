import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Users, Heart, ArrowRight, Radio, MapPin, Clock, ChevronLeft, ChevronRight, BookOpen, Send, Zap } from 'lucide-react';
import { sermonsData } from '../data/sermons';

const Home = () => {
  const [currentHeader, setCurrentHeader] = useState(0);
  const headers = [
    '/Header2.jpg',
    '/Header3.JPG',
    '/header4.JPG',
    '/header5.JPG'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headers.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextHeader = () => setCurrentHeader((prev) => (prev + 1) % headers.length);
  const prevHeader = () => setCurrentHeader((prev) => (prev - 1 + headers.length) % headers.length);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Carousel */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {headers.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeader ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={img}
                alt={`Praise Chapel Header ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dynamic Overlay per slide - darker on left for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute inset-x-0 bottom-12 z-20 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {headers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeader(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${i === currentHeader ? 'w-8 bg-brand-red' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Side Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-6 hidden md:flex justify-between pointer-events-none">
          <button
            onClick={prevHeader}
            className="p-3 rounded-full bg-white/5 hover:bg-brand-red border border-white/10 text-white transition-all pointer-events-auto backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextHeader}
            className="p-3 rounded-full bg-white/5 hover:bg-brand-red border border-white/10 text-white transition-all pointer-events-auto backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-black uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              The Praise Chapel
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.95] uppercase">
              House-
              <span className="text-brand-red">To</span> -House Prayer Ministries
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed max-w-xl font-medium">
              Welcome to The Praise Chapel. We are a family committed to the apostles' doctrine, fellowship, breaking of bread, and prayers. Discover your home in God's presence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/about"
                className="group bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center gap-2 shadow-xl shadow-brand-red/20 active:scale-95"
              >
                Plan Your Visit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sermons"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <Play size={18} fill="currentColor" />
                Latest Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="py-24 bg-[var(--bg-body)] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] uppercase tracking-tight leading-none">
                Our <span className="text-brand-red">Programs</span>
              </h2>
              <div className="h-1 w-20 bg-brand-red rounded-full"></div>
              <p className="text-[var(--text-muted)] text-lg font-medium leading-relaxed max-w-xl">
                Experience the raw power of collective prayer and the depth of apostolic doctrine. Join us as we encounter the Divine together.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  time: '09:00 AM',
                  Venue: "Every Branch",
                  name: 'Sunday Service',
                  desc: 'A powerful encounter with God through worship, word, and fellowship across all our locations.',
                  icon: Users,
                  color: 'brand-red',
                  emotion: 'Encounter Grace'
                },
                {
                  time: '05:30 PM',
                  Venue: "Every Branch",
                  name: 'Bible Study',
                  desc: 'Delve into the living waters of the Word. Transform your mind and spirit through apostolic teaching.',
                  icon: BookOpen,
                  color: 'brand-green',
                  emotion: 'Deepen Faith'
                },
                {
                  time: '05:00 AM',
                  Venue: "Headquarters",
                  name: 'Prophetic Prayer',
                  desc: 'Early morning intercession. Piercing the heavens for divine intervention (1st – 3rd monthly).',
                  icon: Send,
                  color: 'brand-red',
                  emotion: 'Wrestle & Prevail'
                },
                {
                  time: '10:00 PM',
                  Venue: "Headquarters",
                  name: 'Freedom Night',
                  desc: 'A night of deliverance, breaking chains, and supernatural breakthroughs every 3rd Friday.',
                  icon: Zap,
                  color: 'brand-green',
                  emotion: 'Break Every Chain'
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group relative flex gap-6 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-brand-red/30 transition-all duration-500 hover:translate-x-2"
                >
                  <div className={`shrink-0 w-16 h-16 bg-[var(--bg-body)] rounded-2xl flex items-center justify-center border border-[var(--border-color)] group-hover:border-${service.color}/50 group-hover:bg-${service.color}/5 transition-all`}>
                    <service.icon size={28} className={`text-${service.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className={`text-${service.color} font-black uppercase tracking-[0.2em] text-[10px]`}>{service.time} • {service.Venue}</div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] group-hover:text-brand-red transition-colors">{service.emotion}</span>
                    </div>
                    <div className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">{service.name}</div>
                    <div className="text-[var(--text-muted)] text-sm leading-relaxed font-medium">{service.desc}</div>
                  </div>
                  {/* Subtle hover indicator */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} className="text-brand-red" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-red/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1000&auto=format&fit=crop&q=60"
                alt="The Praise Chapel Sanctuary"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-green to-transparent">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={24} className="text-brand-red" />
                  <div>
                    <div className="font-black uppercase tracking-widest text-sm">Headquarters </div>
                    <div className="text-zinc-200 text-xs font-medium">Papa Adeyemo Area Ogbomoso, Oyo State Nigeria</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content / Latest Message */}
      <section className="py-24 bg-[var(--bg-body)] border-t border-[var(--border-color)] relative overflow-hidden">
        {/* Subtle background glow for emotional depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-brand-red rounded-full"></div>
                <h2 className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px]">Doctrines of Life</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[var(--text-main)] uppercase tracking-tight">
                Our Latest <span className="text-brand-green animate-pulse">Messages</span>
              </h3>
              <p className="text-[var(--text-muted)] text-sm font-medium italic animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">"Faith comes by hearing, and hearing by the Word of God."</p>
            </div>
            <Link to="/sermons" className="group text-brand-red font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:gap-4 transition-all bg-brand-red/5 px-6 py-3 rounded-full border border-brand-red/20 hover:bg-brand-red hover:text-white">
              All Messages <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Featured Sermon */}
            {sermonsData.filter(s => s.isFeatured).map(featuredSermon => (
              <div key={featuredSermon.id} className="lg:col-span-2 relative group rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border border-zinc-800 transition-all duration-500 hover:border-brand-red/50">
                <img
                  src={featuredSermon.img}
                  alt={featuredSermon.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />

                {/* Emotional Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-brand-red/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-brand-red/50">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-8 left-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-brand-red rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] animate-pulse">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                    New Release
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-brand-green/20 border border-brand-green/30 text-brand-green text-[9px] font-black uppercase tracking-widest rounded-md backdrop-blur-md">{featuredSermon.category}</span>
                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <Clock size={12} className="text-brand-red" /> {featuredSermon.duration}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-4xl font-black text-white uppercase tracking-tight group-hover:text-brand-red transition-colors duration-500 ease-out">{featuredSermon.title}</h4>
                    <p className="text-zinc-300 font-medium text-sm max-w-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 ease-out">
                      {featuredSermon.description}
                    </p>
                    <div className="pt-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-200 ease-out flex items-center gap-2 text-brand-red text-xs font-black uppercase tracking-widest">
                      Listen Now <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Sermon List */}
            <div className="flex flex-col gap-5">
              {sermonsData.filter(s => !s.isFeatured).slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-brand-green/30 hover:bg-[var(--bg-input)] transition-all duration-500 cursor-pointer group hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[var(--text-muted)] text-[9px] font-black uppercase tracking-widest">{item.date}</span>
                    <div className="p-2 rounded-lg bg-[var(--bg-body)] border border-[var(--border-color)] text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                      <Zap size={14} fill="currentColor" />
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-[var(--text-main)] uppercase tracking-tight mb-4 group-hover:text-brand-green transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest">
                      <Clock size={12} className="text-brand-red" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-black text-brand-red opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      LISTEN <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/sermons"
                className="mt-2 flex items-center justify-center gap-3 py-5 px-6 rounded-3xl border-2 border-dashed border-zinc-800 text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px] hover:border-brand-red hover:text-brand-red hover:bg-brand-red/5 transition-all active:scale-95 group"
              >
                More Spiritual Food
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-brand-green">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            Become Part of <br /><span className="text-brand-red">The Family</span>
          </h2>
          <p className="text-lg text-zinc-200 font-medium">
            Whether you are looking for a prayer partner or a place to belong, The Praise Chapel welcomes you. Connect with our House-To-House ministries today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="bg-brand-red text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl active:scale-95"
            >
              Get Connected
            </Link>
            <Link
              to="/give"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all hover:bg-white/20 active:scale-95"
            >
              Support the Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;