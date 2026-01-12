import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(227,62,51,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
            Stay  <span className="text-brand-red">Connected</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Join the global network of intercessors. Reach out for prayer, partnership, or to join a House-To-House cell.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none">Global Presence</h2>
              <p className="text-zinc-400 font-medium">Our doors and prayer lines are open to you.</p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Prayer Chapel', value: 'Praise Chapel College, Ogbomoso', icon: MapPin },
                { label: 'Prophetic Line', value: '+234 (0) 123 456 7890', icon: Phone },
                { label: 'Electronic Mail', value: 'contact@praisechapel.org', icon: Mail },
                { label: 'Ministries Hours', value: 'Mon - Fri: 9:00 AM - 5:00 PM', icon: Clock },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-brand-green/30 transition-all group">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green group-hover:bg-brand-red group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white font-bold text-lg leading-tight uppercase tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Our Platforms</h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-brand-red/5 group-hover:text-brand-red/10 transition-colors">
                <MessageSquare size={120} />
              </div>
              
              <div className="relative space-y-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Send Intercession Request</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Covenant Member" 
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-zinc-800 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-zinc-800 font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-1">Subject of Prayer</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer font-bold uppercase tracking-widest text-[10px]">
                      <option>General Inquiry</option>
                      <option>Prayer Request</option>
                      <option>Volunteer Interest</option>
                      <option>Joining a Prayer Cell</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      rows="5" 
                      placeholder="Share your heart with us..." 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-zinc-800 resize-none font-medium"
                    ></textarea>
                  </div>

                  <button className="w-full bg-brand-green hover:bg-brand-green/90 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-brand-green/10 flex items-center justify-center gap-3 group active:scale-[0.98]">
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-red" />
                    Send Connection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL MAP SECTION - UPDATED */}
      <section className="h-96 w-full bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
        {/* Map Iframe */}
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          title="Praise Chapel Location" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          // Grayscale filter for Dark Theme
          className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
          // Updated SRC to point to Praise Chapel College, Ogbomoso
          src="https://maps.google.com/maps?q=Praise+Chapel+College+Ogbomoso+Oyo+State&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>

        {/* Floating Location Card - Corrected Address */}
        <div className="absolute bottom-6 left-6 md:left-12 max-w-xs w-full pointer-events-none">
          <div className="p-6 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-2xl space-y-4 pointer-events-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red shrink-0">
                <MapPin size={20} />
              </div>
              <div>


                <h4 className="text-sm font-black text-white uppercase tracking-tight leading-none mb-2">Praise Chapel College</h4>
                <p className="text-zinc-400 text-xs font-medium leading-relaxed">
                  Papa Adeyemo Area,<br />
                  9 Ogbomoso,<br />
                  Oyo State, Nigeria.
                </p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Praise+Chapel+College+Ogbomoso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center py-2 rounded-lg bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;