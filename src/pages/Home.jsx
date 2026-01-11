import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Users, Heart, ArrowRight, Radio, MapPin, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=2000" 
            alt="The Praise Chapel Worship" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 via-brand-green/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-black uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              Praise Chapel
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.95] uppercase">
              House <br />
              <span className="text-brand-red">To-House</span> Prayer <br />
              Ministries
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

      {/* Quick Stats/Features */}
      <section className="bg-zinc-950 py-12 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Prayer Cells', value: '120+', icon: Users },
            { label: 'Communities', value: '50+', icon: Heart },
            { label: 'Ministries', value: '15+', icon: Radio },
            { label: 'Years of Prayer', value: '30+', icon: Calendar },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex justify-center text-brand-red"><stat.icon size={20} /></div>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Our <span className="text-brand-red">Gatherings</span></h2>
            <p className="text-zinc-400 text-lg font-medium leading-relaxed">
              Acts 2:42 — "And they continued steadfastly in the apostles' doctrine and fellowship, in the breaking of bread, and in prayers."
            </p>
            
            <div className="grid gap-4">
              {[
                { time: '08:30 AM', name: 'Sunday Celebration', desc: 'Main worship and prophetic word.', color: 'brand-red' },
                { time: '06:30 PM', name: 'Mid-Week Power', desc: 'Deep intercession and teaching.', color: 'brand-green' },
              ].map((service, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-brand-red/50 transition-all group">
                  <div className={`bg-${service.color}/10 text-${service.color} p-4 rounded-xl transition-all`}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className={`text-${service.color} font-black uppercase tracking-widest text-xs mb-1`}>{service.time}</div>
                    <div className="text-xl font-bold text-white mb-2">{service.name}</div>
                    <div className="text-zinc-400 text-sm font-medium">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-red/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-zinc-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=1000" 
                alt="The Praise Chapel Sanctuary" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-green to-transparent">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={24} className="text-brand-red" />
                  <div>
                    <div className="font-black uppercase tracking-widest text-sm">Main Chapel</div>
                    <div className="text-zinc-200 text-xs font-medium">123 Faith Avenue, City of Praise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content / Latest Message */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-brand-red font-black uppercase tracking-[0.2em] text-xs mb-4">Apostles' Doctrine</h2>
              <h3 className="text-4xl font-black text-white uppercase tracking-tight">Latest <span className="text-brand-green">Exaltation</span></h3>
            </div>
            <Link to="/sermons" className="text-brand-red font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all">
              All Messages <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative group rounded-3xl overflow-hidden aspect-video shadow-2xl border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1510563393911-372138a37d22?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Exaltation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-brand-green/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-green shadow-2xl active:scale-90 transition-transform">
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-green to-transparent">
                <div className="text-brand-red font-black text-xs mb-2 uppercase tracking-[0.2em]">Current Series: The Prayer Life</div>
                <div className="text-3xl font-black text-white uppercase tracking-tight">Steadfastness in Prayer</div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Walking in Purpose', date: 'Jan 4, 2026', duration: '45 min' },
                { title: 'Strength for the Journey', date: 'Dec 28, 2025', duration: '38 min' },
                { title: 'Renewed and Restored', date: 'Dec 21, 2025', duration: '52 min' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer group">
                  <div className="text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">{item.date}</div>
                  <h4 className="text-white font-bold mb-4 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs">
                    <Clock size={14} />
                    {item.duration}
                  </div>
                </div>
              ))}
              <Link to="/sermons" className="block text-center py-4 text-zinc-400 font-bold border-2 border-dashed border-zinc-800 rounded-2xl hover:border-zinc-700 hover:text-white transition-all">
                More Messages
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