import React from 'react';
import { MapPin, Phone, User, Globe, Navigation, Search, Filter } from 'lucide-react';

const Branches = () => {
  const branches = [
    {
      name: "The Praise Chapel - City of Grace",
      location: "456 Redemption Road, Grace City, GC 54321",
      pastor: "Pastor Samuel Adebayo",
      phone: "+1 (234) 888-0001",
      region: "North America"
    },
    {
      name: "The Praise Chapel - Faith Assembly",
      location: "789 Victory Street, Lagos, Nigeria",
      pastor: "Pastor Emmanuel Okafor",
      phone: "+234 803 000 0000",
      region: "Africa"
    },
    {
      name: "The Praise Chapel - London Tabernacle",
      location: "12 Covenant Way, London, UK SE1 7PB",
      pastor: "Pastor David Smith",
      phone: "+44 20 7946 0000",
      region: "Europe"
    },
    {
      name: "The Praise Chapel - Houston Praise Center",
      location: "321 Glory Lane, Houston, TX 77001",
      pastor: "Pastor Michael Brown",
      phone: "+1 (713) 555-0123",
      region: "North America"
    },
    {
      name: "The Praise Chapel - Accra Holy Ghost Temple",
      location: "55 Anointing Street, Accra, Ghana",
      pastor: "Pastor Kofi Mensah",
      phone: "+233 24 000 0000",
      region: "Africa"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=2000" 
            alt="Global branches" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-brand-green/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
            Global <span className="text-brand-red">Branches</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            From the headquarters to every prayer cell, we are one family connected by the spirit of intercession. Find a Praise Chapel near you.
          </p>

          <div className="max-w-xl mx-auto flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl mt-12 focus-within:border-brand-red transition-all">
            <Search className="text-zinc-500 ml-4" size={20} />
            <input 
              type="text" 
              placeholder="Search by city, country, or region..." 
              className="bg-transparent border-none focus:ring-0 text-white w-full px-4 py-3 text-sm outline-none placeholder:text-zinc-700"
            />
            <button className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2">
              <Filter size={14} />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">The Apostolic Center</h2>
            <h3 className="text-4xl font-black text-white uppercase tracking-tight">Global Headquarters</h3>
          </div>

          <div className="bg-zinc-900/50 border border-brand-green/30 rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-16 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-widest">
                  Mother Church
                </div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-none">The Praise Chapel <br /><span className="text-brand-red">International</span></h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-red shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Address</div>
                      <div className="text-white font-bold leading-tight">123 Faith Avenue, City of Praise, CP 12345</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-red shrink-0">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">General Overseer</div>
                      <div className="text-white font-bold leading-tight uppercase">Dr. David Solomon</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-red shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Direct Line</div>
                      <div className="text-white font-bold leading-tight">+1 (234) 567-890</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-brand-red hover:bg-brand-red/90 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-brand-red/20 active:scale-95 flex items-center justify-center gap-2">
                    <Navigation size={16} />
                    Get Directions
                  </button>
                  <button className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-green transition-all">
                    <Globe size={20} />
                  </button>
                </div>
              </div>
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-zinc-950 relative">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Headquarters" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-transparent to-transparent hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Branches Grid */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-brand-green font-black uppercase tracking-[0.2em] text-xs">Regional Altars</h2>
              <h3 className="text-4xl font-black text-white uppercase tracking-tight">Our Global Network</h3>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-black uppercase tracking-widest">5 Regions</span>
              <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-black uppercase tracking-widest">50+ Branches</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, i) => (
              <div key={i} className="group bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 hover:border-brand-red/50 transition-all flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:bg-brand-green group-hover:border-brand-green transition-all shadow-xl text-brand-red group-hover:text-white">
                      <MapPin size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-950 text-brand-red text-[10px] font-black uppercase tracking-widest border border-zinc-800">{branch.region}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white group-hover:text-brand-green transition-colors uppercase tracking-tight leading-tight mb-4">{branch.name}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        <Navigation size={14} className="text-brand-red" />
                        {branch.location}
                      </div>
                      <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        <User size={14} className="text-brand-red" />
                        {branch.pastor}
                      </div>
                      <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        <Phone size={14} className="text-brand-red" />
                        {branch.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full p-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all border border-zinc-800 flex items-center justify-center gap-2">
                  Branch Website
                  <Globe size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-12 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-zinc-800 active:scale-95">
              View All Global Locations
            </button>
          </div>
        </div>
      </section>

      {/* Join a Branch CTA */}
      <section className="py-24 relative overflow-hidden bg-brand-red">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
            Find Your <br /><span className="text-brand-green">Spiritual Home</span>
          </h2>
          <p className="text-lg text-white/90 font-medium">
            No matter where you are in the world, there is a place for you at the altar of prayer. Contact us to find the cell group or branch closest to your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-brand-green text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl active:scale-95">
              Contact Admin
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all hover:bg-white/20 active:scale-95">
              Request a New Branch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
