import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Video,
  Calendar,
  BookOpen,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Bell,
  Globe,
  Zap,
  ExternalLink
} from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout from the Admin Portal?')) {
      navigate('/');
    }
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Daily Charge', path: '/admin/daily-charge', icon: Zap },
    { name: 'Sermons', path: '/admin/sermons', icon: Video },
    { name: 'Events', path: '/admin/events', icon: Calendar },
    { name: 'Resources', path: '/admin/resources', icon: BookOpen },
    { name: 'Branches', path: '/admin/branches', icon: Globe },
    { name: 'Contact Inquiries', path: '/admin/contact', icon: Mail },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[var(--bg-body)] transition-colors duration-300">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'
          } fixed left-0 top-0 h-full bg-[var(--bg-nav)] border-r border-[var(--border-color)] transition-all duration-300 z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 flex items-center justify-between border-b border-[var(--border-color)]">
            <div className={`flex items-center gap-3 ${!isSidebarOpen && 'hidden'}`}>
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="font-black text-[var(--text-main)] uppercase tracking-tighter text-sm">
                Admin <span className="text-brand-red">Portal</span>
              </span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 rounded-lg bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${location.pathname === item.path
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20'
                  : 'text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]'
                  }`}
              >
                <item.icon size={20} className={location.pathname === item.path ? 'text-white' : 'text-[var(--text-muted)] group-hover:text-brand-red transition-colors'} />
                {isSidebarOpen && (
                  <span className="text-sm font-bold uppercase tracking-widest">{item.name}</span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Section / Logout */}
          <div className="p-4 border-t border-[var(--border-color)]">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-brand-red transition-all"
            >
              <LogOut size={20} />
              {isSidebarOpen && (
                <span className="text-sm font-bold uppercase tracking-widest">Logout</span>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'
          } min-h-screen`}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[var(--bg-nav)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-8 py-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-[var(--text-main)] uppercase tracking-tight">
            {menuItems.find(item => item.path === location.pathname)?.name || 'Admin'}
          </h2>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-brand-red hover:border-brand-red transition-all text-[10px] font-black uppercase tracking-widest"
            >
              <ExternalLink size={14} />
              View Live Site
            </Link>
            <button className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-red rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-[var(--border-color)]"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] font-bold">
                AD
              </div>
              {isSidebarOpen && (
                <div className="flex flex-col">
                  <span className="text-xs font-black text-[var(--text-main)] uppercase tracking-widest">Administrator</span>
                  <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest leading-none">Global Admin</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
