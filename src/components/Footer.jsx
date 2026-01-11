import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Church Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <h3 className="text-xl font-black text-white leading-none">THE PRAISE</h3>
              <span className="text-brand-red font-black text-xl leading-none">CHAPEL</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">
            House-To-House Prayer Ministries. <br />
            Leading people into a growing relationship with Jesus Christ through prayer and the Word.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/sermons" className="hover:text-white transition-colors">Sermons</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
            <li><Link to="/branches" className="hover:text-white transition-colors">Branches</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            <li><Link to="/give" className="hover:text-white transition-colors">Give</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span className="text-zinc-400">123 Faith Avenue, City of Praise, CP 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span className="text-zinc-400">+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span className="text-zinc-400">contact@praisechapel.org</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
          <p className="text-sm mb-4 text-zinc-400">Subscribe for weekly inspiration from House-To-House ministries.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors text-white"
            />
            <button className="bg-brand-green hover:bg-brand-green/90 text-white font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-widest transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800/50 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
        <p>&copy; {new Date().getFullYear()} House-To-House Prayer Ministries (The Praise Chapel). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
