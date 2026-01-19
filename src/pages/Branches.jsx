import React, { useState } from 'react';
import { MapPin, Phone, User, Globe, Navigation, Search, Filter, X } from 'lucide-react';

const Branches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const branches = [
    {
      name: "The Praise Chapel - Sabo Branch",
      location: "456 Redemption Road, Grace City, GC 54321",
      pastor: "Pastor Samuel Adebayo",
      phone: "+1 (234) 888-0001",
      region: "Sabo Region"
    },
    {
      name: "The Praise Chapel - Aroje Branch",
      location: "789 Victory Street, Lagos, Nigeria",
      pastor: "Pastor Emmanuel Okafor",
      phone: "+234 803 000 0000",
      region: "Papa Region"
    },
    {
      name: "The Praise Chapel - Bethel",
      location: "12 Covenant Way, London, UK SE1 7PB",
      pastor: "Pastor David Smith",
      phone: "+44 20 7946 0000",
      region: "Papa Region"
    },
    {
      name: "The Praise Chapel - Papa Branch",
      location: "321 Glory Lane, Houston, TX 77001",
      pastor: "Pastor Michael Brown",
      phone: "+1 (713) 555-0123",
      region: "Papa Region"
    },
    {
      name: "The Praise Chapel - Are Ago Branch",
      location: "55 Anointing Street, Accra, Ghana",
      pastor: "Pastor Kofi Mensah",
      phone: "+233 24 000 0000",
      region: "Papa Region"
    },
    {
      name: "The Praise Chapel - Takie Branch",
      location: "55 Anointing Street, Accra, Ghana",
      pastor: "Pastor Kofi Mensah",
      phone: "+233 24 000 0000",
      region: "Sabo Region"
    }
  ];

  const regions = ['All', ...new Set(branches.map(b => b.region))];

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.pastor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || branch.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[var(--bg-body)] border-b border-[var(--border-color)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=2000"
            alt="Global branches"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-brand-green/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-[var(--text-main)] tracking-tight uppercase leading-none">
            Our <span className="text-brand-red">Branches</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium leading-relaxed">
            From the headquarters to every prayer cell, we are one family connected by the spirit of intercession. Find a Praise Chapel near you.
          </p>

          <div className="max-w-xl mx-auto space-y-4 mt-12">
            <div className="flex items-center bg-[var(--bg-input)] border border-[var(--border-color)] rounded-2xl p-2 shadow-2xl focus-within:border-brand-red transition-all">
              <Search className="text-[var(--text-muted)] ml-4" size={20} />
              <input
                type="text"
                placeholder="Search by city, country, or pastor..."
                className="bg-transparent border-none focus:ring-0 text-[var(--text-main)] w-full px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)]">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${selectedRegion === region
                      ? 'bg-brand-red border-brand-red text-white'
                      : 'bg-[var(--bg-input)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-24 bg-[var(--bg-body)] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl font-black text-[var(--text-main)] uppercase tracking-tight">Global Headquarters</h3>
          </div>

          <div className="bg-[var(--bg-card)] border border-brand-green/30 rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-16 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-widest">
                  Headquarters
                </div>
                <h2 className="text-4xl font-black text-[var(--text-main)] uppercase tracking-tight leading-none">House-to-House Prayer Ministries <br /><br /><span className="text-brand-red">Praise Chapel</span></h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] flex items-center justify-center text-brand-red shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest mb-1">Address</div>
                      <div className="text-[var(--text-main)] font-bold leading-tight">
                        Praise Chapel College,<br />
                        Papa Adeyemo, Ogbomoso
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] flex items-center justify-center text-brand-red shrink-0">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest mb-1">General Overseer</div>
                      <div className="text-[var(--text-main)] font-bold leading-tight uppercase">Reverend Debo Adeyemo</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] flex items-center justify-center text-brand-red shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest mb-1">Direct Line</div>
                      <div className="text-[var(--text-main)] font-bold leading-tight">+1 (234) 567-890</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {/* UPDATE: Changed to Anchor tag for Google Maps Link */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Praise+Chapel+College+Ogbomoso&destination_place_id=ChIJB00GqYQSNxARBFWC_pPIjnk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-red hover:bg-brand-red/90 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-brand-red/20 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-[var(--bg-body)] relative">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1200"
                  alt="Headquarters"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg-body)] via-transparent to-transparent hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Branches Grid */}
      <section className="py-24 bg-[var(--bg-body)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-brand-green font-black uppercase tracking-[0.2em] text-xs">Regional Altars</h2>
              <h3 className="text-4xl font-black text-[var(--text-main)] uppercase tracking-tight">Our Global Network</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBranches.map((branch, i) => (
              <div key={i} className="group bg-[var(--bg-card)] p-8 rounded-[2.5rem] border border-[var(--border-color)] hover:border-brand-red/50 transition-all flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-[var(--bg-body)] rounded-2xl flex items-center justify-center border border-[var(--border-color)] group-hover:bg-brand-green group-hover:border-brand-green transition-all shadow-xl text-brand-red group-hover:text-white">
                      <MapPin size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-body)] text-brand-red text-[10px] font-black uppercase tracking-widest border border-[var(--border-color)]">{branch.region}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[var(--text-main)] group-hover:text-brand-green transition-colors uppercase tracking-tight leading-tight mb-4">{branch.name}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">
                        <Navigation size={14} className="text-brand-red" />
                        {branch.location}
                      </div>
                      <div className="flex items-center gap-3 text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">
                        <User size={14} className="text-brand-red" />
                        {branch.pastor}
                      </div>
                      <div className="flex items-center gap-3 text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">
                        <Phone size={14} className="text-brand-red" />
                        {branch.phone}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-12 py-4 bg-[var(--bg-input)] hover:bg-[var(--bg-body)] text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-[var(--border-color)] active:scale-95">
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