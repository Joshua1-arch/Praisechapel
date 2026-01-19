import React from 'react';
import {
  Users,
  Video,
  Calendar,
  TrendingUp,
  Eye,
  Download,
  ArrowUpRight,
  Clock
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Sermons', value: '124', icon: Video, color: 'text-brand-red', trend: '+12%', bg: 'bg-brand-red/10' },
    { name: 'Active Events', value: '8', icon: Calendar, color: 'text-brand-green', trend: '+2', bg: 'bg-brand-green/10' },
    { name: 'Website Visits', value: '45.2K', icon: Eye, color: 'text-blue-500', trend: '+24%', bg: 'bg-blue-500/10' },
    { name: 'Total Members', value: '1,280', icon: Users, color: 'text-purple-500', trend: '+5%', bg: 'bg-purple-500/10' },
  ];

  const recentActivities = [
    { id: 1, action: 'New Sermon Uploaded', detail: 'The Power of Persistent Prayer', time: '2 hours ago', user: 'Pastor Samuel' },
    { id: 2, action: 'Event Updated', detail: 'Sunday Service @ 9:00 AM', time: '5 hours ago', user: 'Admin' },
    { id: 3, action: 'New Resource Added', detail: 'Walking in Divine Purpose (PDF)', time: 'Yesterday', user: 'Sarah Solomon' },
    { id: 4, action: 'Contact Inquiry', detail: 'Message from John Doe', time: '2 days ago', user: 'System' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-[var(--bg-card)] p-6 rounded-[2rem] border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-brand-green bg-brand-green/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                {stat.trend}
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em]">{stat.name}</h3>
              <p className="text-3xl font-black text-[var(--text-main)] tracking-tighter">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] shadow-sm overflow-hidden">
          <div className="p-8 border-b border-[var(--border-color)] flex justify-between items-center">
            <h3 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">Recent Activity</h3>
            <button className="text-[10px] font-black text-brand-red uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--bg-input)]">
                  <th className="px-8 py-4 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Activity</th>
                  <th className="px-8 py-4 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Performed By</th>
                  <th className="px-8 py-4 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {recentActivities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-[var(--bg-input)]/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[var(--text-main)] uppercase tracking-tight">{activity.action}</span>
                        <span className="text-xs text-[var(--text-muted)] font-medium">{activity.detail}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[10px] font-black text-[var(--text-muted)]">
                          {activity.user[0]}
                        </div>
                        <span className="text-xs font-bold text-[var(--text-muted)]">{activity.user}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-1.5 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                        <Clock size={12} />
                        {activity.time}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Summary Card */}
        <div className="bg-brand-red rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-brand-red/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tight leading-none">Global <br /> Reach</h3>
              <p className="text-white/70 text-sm font-medium">Your ministry is touching lives across 12 countries this month.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-[10px] font-black uppercase tracking-widest mb-1">Downloads</div>
                <div className="text-xl font-black">1.4K</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-[10px] font-black uppercase tracking-widest mb-1">Shares</div>
                <div className="text-xl font-black">842</div>
              </div>
            </div>
            <button className="w-full bg-white text-brand-red py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 group">
              Generate Report
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
