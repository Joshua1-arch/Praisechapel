import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Info, PlayCircle, Calendar, DollarSign, Mail, Menu, X, Radio, Globe, 
  ChevronDown, BookOpen, Search, Facebook, Instagram, Youtube 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const searchableContent = [
    { label: 'Home', path: '/', category: 'Page' },
    { label: 'About Us', path: '/about', category: 'Page' },
    { label: 'Sermons', path: '/sermons', category: 'Media' },
    { label: 'Upcoming Events', path: '/events', category: 'Events' },
    { label: 'Give / Offering', path: '/give', category: 'Finance' },
    { label: 'Our Branches', path: '/branches', category: 'Locations' },
    { label: 'Contact Us', path: '/contact', category: 'Support' },
    { label: 'Resources', path: '/resources', category: 'Library' },
    { label: 'Prophetic Blog', path: '/resources/blog', category: 'Resources' },
    { label: 'Books & Publications', path: '/resources/books', category: 'Resources' },
    { label: 'Bible Meditation', path: '/resources/meditation', category: 'Resources' },
    { label: 'Bible Study Lessons', path: '/resources/lessons', category: 'Resources' },
    { label: 'Evangelism Tracts', path: '/resources/tracts', category: 'Resources' },
  ];

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : searchableContent.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/sermons', label: 'Sermons', icon: PlayCircle },
    { path: '/events', label: 'Events', icon: Calendar },
    { 
      label: 'Resources', 
      icon: BookOpen,
      children: [
        { path: '/resources/blog', label: 'Blog' },
        { path: '/resources/books', label: 'Books & Publications' },
        { path: '/resources/meditation', label: 'Bible Meditation' },
        { path: '/resources/lessons', label: 'Bible Study Lessons' },
        { path: '/resources/tracts', label: 'Tracts' },
      ]
    },
    { path: '/branches', label: 'Branches', icon: Globe },
    { path: '/give', label: 'Give', icon: DollarSign },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-xl py-2' : 'bg-zinc-950 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative overflow-hidden rounded-lg">
            <img 
              src="/logo.png" 
              alt="The Praise Chapel Logo" 
              className="w-full h-full object-contain"
            />
          </div>

        </Link>

        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.children ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-colors hover:text-brand-red ${
                    location.pathname.startsWith('/resources') ? 'text-brand-red' : 'text-zinc-300'
                  }`}>
                    {link.label}
                  </span>
                  <ChevronDown size={10} className="text-zinc-500 group-hover:text-brand-red transition-colors" />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] overflow-hidden">
                    <div className="p-2 flex flex-col">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`px-4 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all hover:bg-brand-green/10 hover:text-brand-green ${
                            isActive(child.path) ? 'text-brand-green bg-brand-green/5' : 'text-zinc-400'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors hover:text-brand-red ${
                    isActive(link.path) ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-zinc-300'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          
          {/* Divider */}
          <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>

          {/* Utility & Social */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-400 hover:text-brand-red transition-colors group relative"
            >
              <Search size={16} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-[8px] px-2 py-1 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-zinc-500 font-bold uppercase tracking-widest">
                Ctrl + K
              </span>
            </button>
            <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={14} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Youtube size={14} /></a>
            </div>
          </div>

          <li>
            <Link 
              to="/sermons" 
              className="ml-2 bg-brand-green hover:bg-brand-green/90 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-brand-green/20 active:scale-95"
            >
              <Radio size={12} className="animate-pulse text-brand-red" />
              Watch Live
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Nav Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-[300px] bg-zinc-950 z-50 lg:hidden transition-transform duration-500 ease-out shadow-2xl ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-black text-white uppercase tracking-tight">Menu</span>
              <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">Navigation</span>
            </div>
            <button 
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <div className="space-y-2 py-2">
                    <div className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-zinc-500">
                      <link.icon size={16} />
                      {link.label}
                    </div>
                    <div className="pl-6 flex flex-col gap-2 border-l border-zinc-900 ml-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-xs font-bold uppercase tracking-widest py-2 transition-colors ${
                            isActive(child.path) ? 'text-brand-red' : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 text-sm font-black uppercase tracking-wider py-3 transition-colors ${
                      isActive(link.path) ? 'text-brand-red' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <link.icon size={18} className={isActive(link.path) ? 'text-brand-red' : 'text-zinc-600'} />
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Link 
                to="/sermons" 
                onClick={() => setIsOpen(false)}
                className="bg-brand-green text-white w-full py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20"
              >
                <Radio size={18} className="animate-pulse text-brand-red" />
                Watch Live Now
              </Link>
            </li>
          </ul>

          {/* Mobile Footer/Socials */}
          <div className="p-8 border-t border-zinc-900 bg-zinc-900/20">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Connect</span>
              <div className="flex items-center gap-4">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <div 
        className={`fixed inset-0 z-[100] flex items-start justify-center pt-24 px-6 transition-all duration-300 ${
          isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
          onClick={() => setIsSearchOpen(false)}
        ></div>
        
        <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
          <div className="p-6 border-b border-zinc-800 flex items-center gap-4">
            <Search className="text-zinc-500" size={24} />
            <input 
              type="text" 
              placeholder="Search ministry resources, pages, sermons..." 
              className="flex-1 bg-transparent border-none outline-none text-white text-lg font-medium placeholder:text-zinc-600"
              autoFocus={isSearchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="p-2 bg-zinc-800 text-zinc-400 rounded-xl hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
            >
              Esc
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {filteredResults.length > 0 ? (
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-4 mb-4">Results</p>
                {filteredResults.map((result, i) => (
                  <Link
                    key={i}
                    to={result.path}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800 hover:border-brand-red group transition-all"
                  >
                    <div className="flex flex-col">
                      <span className="text-white font-black uppercase tracking-tight text-sm group-hover:text-brand-red transition-colors">{result.label}</span>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{result.category}</span>
                    </div>
                    <div className="text-zinc-700 group-hover:text-brand-red transition-colors">
                      <ChevronDown className="-rotate-90" size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery.trim() !== '' ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-600">
                  <Search size={32} />
                </div>
                <p className="text-zinc-500 font-medium">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="py-12 px-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Sermons', 'Events', 'Giving', 'Branches', 'Bible Study'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-bold hover:border-zinc-600 hover:text-white transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-zinc-950/50 border-t border-zinc-800 flex justify-between items-center">
            <div className="flex gap-4">
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-1">
                <span className="p-1 bg-zinc-900 border border-zinc-800 rounded">Enter</span> to select
              </span>
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-1">
                <span className="p-1 bg-zinc-900 border border-zinc-800 rounded">Esc</span> to close
              </span>
            </div>
            <img src="/logo.png" className="h-6 opacity-20 grayscale" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
