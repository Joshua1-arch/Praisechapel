import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Search, Heart,
  MapPin, Calendar, PlayCircle, BookOpen,
  FileText, Headphones, Book, Globe, Send, Zap,
  Home, Info, Radio, Facebook, Instagram, Youtube, Camera
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuLevel, setMobileMenuLevel] = useState(0); // 0: Main, 1: Resources
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Search Index
  const searchableContent = [
    { label: 'Home', path: '/', category: 'Page' },
    { label: 'About Us', path: '/about', category: 'Page' },
    { label: 'Sermons', path: '/sermons', category: 'Media' },
    { label: 'Upcoming Events', path: '/events', category: 'Events' },
    { label: 'Give / Offering', path: '/give', category: 'Finance' },
    { label: 'Our Branches', path: '/branches', category: 'Locations' },
    { label: 'Contact Us', path: '/contact', category: 'Support' },
    { label: 'Ministry Gallery', path: '/gallery', category: 'Media' },
    { label: 'Resources', path: '/resources', category: 'Library' },
    { label: 'Prophetic Blog', path: '/resources/blog', category: 'Resources' },
    { label: 'Books & Publications', path: '/resources/books', category: 'Resources' },
    { label: 'Bible Meditation', path: '/resources/meditation', category: 'Resources' },
    { label: 'Bible Study Lessons', path: '/resources/lessons', category: 'Resources' },
    { label: 'Evangelism Tracts', path: '/resources/tracts', category: 'Resources' },
    { label: 'Daily Charge', path: '/resources/daily-charge', category: 'Resources' },
  ];

  const filteredResults = searchQuery.trim() === ''
    ? []
    : searchableContent.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Keyboard Shortcuts
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

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (isOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, isSearchOpen]);

  // FULL Navigation Structure
  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Sermons', path: '/sermons', icon: PlayCircle },
    { name: 'Gallery', path: '/gallery', icon: Camera },
    { name: 'Events', path: '/events', icon: Calendar },
    {
      name: 'Resources',
      path: '/resources',
      icon: BookOpen,
      children: [
        { name: 'Prophetic Blog', path: '/resources/blog', icon: FileText },
        { name: 'Books & Publications', path: '/resources/books', icon: Book },
        { name: 'Bible Meditation', path: '/resources/meditation', icon: Headphones },
        { name: 'Study Lessons', path: '/resources/lessons', icon: BookOpen },
        { name: 'Evangelism Tracts', path: '/resources/tracts', icon: Send },
        { name: 'Daily Charge', path: '/resources/daily-charge', icon: Zap },
      ]
    },
    { name: 'Branches', path: '/branches', icon: Globe },
    { name: 'Contact', path: '/contact', icon: Send },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-red to-red-900 text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 text-center hidden md:block border-b border-white/10">
        Join us for Sunday Service @ 9:00 AM • Papa Adeyemo, Ogbomoso
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-[var(--bg-nav)] backdrop-blur-md py-3 border-[var(--border-color)] shadow-xl'
          : 'bg-[var(--bg-nav)] border-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* 1. Logo Section */}
          <Link to="/" className="flex items-center gap-3 z-50 group shrink-0">
            <div className={`relative overflow-hidden transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-12 w-12'
              }`}>
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Hidden on small desktops to save space for the many links */}
            <span className={`font-black uppercase tracking-tight leading-none text-[var(--text-main)] hidden xl:block ${scrolled ? 'text-lg' : 'text-xl'
              }`}>
              Praise<span className="text-brand-red">Chapel</span>
            </span>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group h-full py-2"
              >
                <Link
                  to={item.path}
                  className={`text-[11px] font-black uppercase tracking-widest transition-colors flex items-center gap-1 ${location.pathname === item.path
                    ? 'text-brand-red'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    }`}
                >
                  {item.name}
                  {item.children && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-[var(--bg-nav)] rounded-xl shadow-2xl border border-[var(--border-color)] p-2 w-72 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--bg-input)] transition-colors group/item"
                        >
                          <div className="p-2 bg-brand-red/10 rounded-lg text-brand-red group-hover/item:bg-brand-red group-hover/item:text-white transition-colors">
                            <child.icon size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">{child.name}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors bg-[var(--bg-input)] border border-[var(--border-color)] hover:border-brand-red rounded-xl group relative"
            >
              <Search size={18} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[var(--bg-input)] text-[8px] px-2 py-1 rounded border border-[var(--border-color)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[var(--text-muted)] font-bold uppercase tracking-widest">
                Ctrl + K
              </span>
            </button>
            <div className="h-6 w-px bg-zinc-800"></div>
            <Link
              to="/give"
              className="bg-brand-red text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Heart size={14} fill="currentColor" />
              Give
            </Link>
          </div>

          {/* 4. Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-input)] border border-[var(--border-color)] rounded-xl transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* 5. Mobile Full Screen Overlay */}
      <div className={`fixed inset-0 z-[60] bg-[var(--bg-nav)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'
        }`}>
        <div className="flex flex-col h-full relative overflow-hidden">

          {/* Main Menu Level */}
          <div className={`flex flex-col h-full transition-transform duration-500 ease-in-out w-full absolute inset-0 text-[var(--text-main)] ${mobileMenuLevel === 0 ? 'translate-x-0' : '-translate-x-full'
            }`}>
            {/* Mobile Header */}
            <div className="p-6 border-b border-[var(--border-color)] bg-[var(--bg-body)] flex items-center justify-between">
              <Link to="/" onClick={() => { setIsOpen(false); setMobileMenuLevel(0); }} className="flex items-center gap-2">
                <img src="/logo.png" className="w-8 h-8 object-contain" alt="Logo" />
                <span className="text-xs font-black text-[var(--text-main)] uppercase tracking-tighter leading-none">The Praise <br /> Chapel</span>
              </Link>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                  className="w-10 h-10 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all"
                  onClick={() => { setIsOpen(false); setMobileMenuLevel(0); }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <ul className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.name} className="border-b border-[var(--border-color)] last:border-0">
                  {item.children ? (
                    <button
                      onClick={() => setMobileMenuLevel(1)}
                      className="w-full flex items-center justify-between py-5 text-lg font-black uppercase tracking-wider text-[var(--text-muted)] group"
                    >
                      <div className="flex items-center gap-4">
                        <item.icon size={20} className="text-brand-green group-hover:text-brand-red transition-colors" />
                        {item.name}
                      </div>
                      <ChevronDown size={18} className="-rotate-90 text-[var(--text-muted)]" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileMenuLevel(0);
                      }}
                      className={[
                        "flex items-center gap-4 text-lg font-black uppercase tracking-wider py-5 transition-colors",
                        location.pathname === item.path ? "text-brand-red" : "text-[var(--text-muted)] hover:text-brand-green"
                      ].join(" ")}
                    >
                      <item.icon size={20} className={location.pathname === item.path ? 'text-brand-red' : 'text-[var(--text-muted)]'} />
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Footer Area */}
            <div className="p-6 space-y-6 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
              <Link
                to="/sermons"
                onClick={() => { setIsOpen(false); setMobileMenuLevel(0); }}
                className="bg-brand-red text-white w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 shadow-2xl shadow-brand-red/20 active:scale-95 transition-all"
              >
                <Radio size={16} className="animate-pulse" />
                Watch Service Live
              </Link>

              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black text-[var(--text-muted)] uppercase tracking-widest">Global Community</span>
                  <div className="flex gap-4">
                    <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"><Facebook size={18} /></a>
                    <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"><Youtube size={18} /></a>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                  <span className="text-[8px] font-black text-[var(--text-muted)] uppercase tracking-widest">Headquarters</span>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-[9px] font-bold uppercase tracking-tight">
                    <MapPin size={10} className="text-brand-red" /> Ogbomoso, Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Menu Level (Resources) */}
          <div className={`flex flex-col h-full transition-transform duration-500 ease-in-out w-full absolute inset-0 bg-[var(--bg-body)] ${mobileMenuLevel === 1 ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <div className="p-6 border-b border-[var(--border-color)] bg-[var(--bg-card)] flex items-center gap-4">
              <button
                onClick={() => setMobileMenuLevel(0)}
                className="w-10 h-10 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all"
              >
                <ChevronDown size={24} className="rotate-90" />
              </button>
              <div className="flex flex-col">
                <span className="text-sm font-black text-[var(--text-main)] uppercase tracking-wider">Resources</span>
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">Back to Main Menu</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
              {navigation.find(n => n.name === 'Resources')?.children?.map((child) => (
                <Link
                  key={child.name}
                  to={child.path}
                  onClick={() => { setIsOpen(false); setMobileMenuLevel(0); }}
                  className={`flex items-center justify-between p-6 rounded-[2rem] border transition-all ${location.pathname === child.path
                    ? 'bg-brand-red/5 border-brand-red text-brand-red'
                    : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--border-color)] hover:text-[var(--text-main)]'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <child.icon size={20} className={location.pathname === child.path ? 'text-brand-red' : 'text-[var(--text-muted)]'} />
                    <span className="text-sm font-black uppercase tracking-widest">{child.name}</span>
                  </div>
                  <ChevronDown size={16} className="-rotate-90 opacity-40" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 6. Search Modal */}
      <div
        className={`fixed inset-0 z-[100] flex items-start justify-center pt-24 px-6 transition-all duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-[var(--bg-body)]/80 backdrop-blur-xl"
          onClick={() => setIsSearchOpen(false)}
        ></div>

        <div className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
          <div className="p-6 border-b border-[var(--border-color)] flex items-center gap-4">
            <Search className="text-[var(--text-muted)]" size={24} />
            <input
              type="text"
              placeholder="Search ministry resources, pages, sermons..."
              className="flex-1 bg-transparent border-none outline-none text-[var(--text-main)] text-lg font-medium placeholder:text-[var(--text-muted)]"
              autoFocus={isSearchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 bg-[var(--bg-input)] text-[var(--text-muted)] rounded-xl hover:text-[var(--text-main)] transition-colors text-[10px] font-black uppercase tracking-widest"
            >
              Esc
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {filteredResults.length > 0 ? (
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] px-4 mb-4">Results</p>
                {filteredResults.map((result, i) => (
                  <Link
                    key={i}
                    to={result.path}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-input)]/50 border border-[var(--border-color)] hover:border-brand-red group transition-all"
                  >
                    <div className="flex flex-col">
                      <span className="text-[var(--text-main)] font-black uppercase tracking-tight text-sm group-hover:text-brand-red transition-colors">{result.label}</span>
                      <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{result.category}</span>
                    </div>
                    <div className="text-[var(--text-muted)] group-hover:text-brand-red transition-colors">
                      <ChevronDown className="-rotate-90" size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery.trim() !== '' ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-[var(--bg-input)] rounded-full flex items-center justify-center mx-auto text-[var(--text-muted)]">
                  <Search size={32} />
                </div>
                <p className="text-[var(--text-muted)] font-medium">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="py-12 px-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-6">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Sermons', 'Events', 'Giving', 'Branches', 'Bible Study'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-4 py-2 rounded-full bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-muted)] text-xs font-bold hover:border-[var(--text-muted)] hover:text-[var(--text-main)] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border-color)] flex justify-between items-center">
            <div className="flex gap-4">
              <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-1">
                <span className="p-1 bg-[var(--bg-input)] border border-[var(--border-color)] rounded">Enter</span> to select
              </span>
              <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-1">
                <span className="p-1 bg-[var(--bg-input)] border border-[var(--border-color)] rounded">Esc</span> to close
              </span>
            </div>
            <img src="/logo.png" className="h-6 opacity-20 grayscale" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;