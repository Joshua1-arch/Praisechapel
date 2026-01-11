import React from 'react';
import { Heart, ShieldCheck, Users, Target, History, BookOpen, Quote } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 bg-zinc-900 border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Worship background"
          />
          <div className="absolute inset-0 bg-zinc-950/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-brand-red font-black uppercase tracking-[0.4em] text-xs">Since 1998</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight uppercase leading-none">
            Our <span className="text-brand-red">Story</span> & Spirit
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover the legacy, the mission, and the unwavering faith that drives The Praise Chapel (House-To-House Prayer Ministries).
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-green">
              <History size={24} />
              <span className="font-black uppercase tracking-widest text-sm">The Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">How it all <span className="text-brand-green italic">Began</span></h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
              <p>
                In the late 90s, a small group of devoted believers led by Dr. David Solomon gathered in a humble living room with one goal: to seek the face of God for their community. What started as a local prayer meeting soon ignited into a spiritual movement.
              </p>
              <p>
                The mandate was clear—to take the fire of the altar from the sanctuary into the homes. We believed that every house should be a lighthouse, and every family an army of intercessors.
              </p>
              <p>
                Today, House-To-House Prayer Ministries has grown into a global family, yet our core remains the same: intimate fellowship with the Holy Spirit and uncompromising obedience to the Word of God.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Church history"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-red p-10 rounded-[2rem] shadow-2xl hidden md:block">
              <Quote className="text-white mb-4" size={40} />
              <p className="text-white font-black uppercase tracking-tight text-xl">"Built on the Rock <br/>of Revelation"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3rem] bg-zinc-900 border border-zinc-800 space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-green/10 transition-colors"></div>
              <Target size={48} className="text-brand-green" />
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Our Mission</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  To empower individuals through the systematic teaching of the Word and the practice of intense intercession, transforming lives from the inside out and preparing a people ready for the Lord's return.
                </p>
              </div>
            </div>
            
            <div className="p-12 rounded-[3rem] bg-zinc-900 border border-zinc-800 space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-red/10 transition-colors"></div>
              <Heart size={48} className="text-brand-red" />
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Our Vision</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  To see a global revival where every home becomes a sanctuary of prayer, resulting in the spiritual restoration of families, communities, and nations to their divine purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-brand-red font-black uppercase tracking-[0.3em] text-xs">What We Hold True</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Statement of <span className="text-brand-green">Faith</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'The Holy Trinity', 
                desc: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit—co-equal in power and glory.',
                icon: ShieldCheck
              },
              { 
                title: 'Salvation by Grace', 
                desc: 'We believe that salvation is a gift from God, received through faith in Jesus Christ and His finished work on the Cross.',
                icon: Heart
              },
              { 
                title: 'Biblical Authority', 
                desc: 'The Bible is the inspired, inerrant, and final authority for all matters of Christian faith and conduct.',
                icon: BookOpen
              },
              { 
                title: 'Baptism & Communion', 
                desc: 'We observe the ordinances of Water Baptism by immersion and the Holy Communion as commanded by our Lord.',
                icon: ShieldCheck
              },
              { 
                title: 'Holy Spirit Baptism', 
                desc: 'We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues and the manifestation of spiritual gifts.',
                icon: Users
              },
              { 
                title: 'The Second Coming', 
                desc: 'We look forward to the personal, visible return of Jesus Christ to judge the living and the dead and establish His eternal Kingdom.',
                icon: Target
              }
            ].map((belief, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <belief.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{belief.title}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-brand-green font-black uppercase tracking-[0.2em] text-xs">House-To-House</h2>
            <h3 className="text-4xl font-black text-white uppercase tracking-tight">Ministry Leadership</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Dr. David Solomon', role: 'General Overseer', img: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?auto=format&fit=crop&q=80&w=400' },
              { name: 'Sarah Solomon', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
              { name: 'Michael Chen', role: 'Music & Liturgy', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
            ].map((leader, i) => (
              <div key={i} className="group space-y-6">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight">{leader.name}</h4>
                  <p className="text-brand-red font-bold text-xs uppercase tracking-widest">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;