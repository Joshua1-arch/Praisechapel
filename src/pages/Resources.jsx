import React from 'react';
import { Link } from 'react-router-dom';
import { Book, PenTool, Heart, GraduationCap, FileText, ArrowRight, Zap } from 'lucide-react';

const Resources = () => {
  const resourceLinks = [
    { name: "Prophetic Blog", path: "/resources/blog", icon: PenTool, color: "brand-red", desc: "Insights and wisdom for your walk with Christ." },
    { name: "Books & Publications", path: "/resources/books", icon: Book, color: "brand-green", desc: "Equipping resources for study and growth." },
    { name: "Bible Meditation", path: "/resources/meditation", icon: Heart, color: "brand-red", desc: "Quiet moments in the presence of the Word." },
    { name: "Bible Study Lessons", path: "/resources/lessons", icon: GraduationCap, color: "brand-green", desc: "Structured learning for every stage of faith." },
    { name: "Evangelism Tracts", path: "/resources/tracts", icon: FileText, color: "brand-red", desc: "Powerful tools for sharing the Gospel message." },
    { name: "Daily Charge", path: "/resources/daily-charge", icon: Zap, color: "brand-green", desc: "Daily spiritual fuel to keep your fire burning." },
  ];

  return (
    <div className="flex flex-col bg-[var(--bg-body)] min-h-screen">
      <section className="relative py-24 md:py-32 bg-[var(--bg-card)] border-b border-[var(--border-color)] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000"
            alt="Resources background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-[var(--text-main)] tracking-tight uppercase leading-none">
            Ministry <span className="text-brand-red">Resources</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
            Equipping the saints for the work of the ministry. Explore our comprehensive library of spiritual tools and teachings.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceLinks.map((res, i) => (
            <Link
              key={i}
              to={res.path}
              className="group p-10 rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-brand-red/50 transition-all flex flex-col justify-between space-y-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-${res.color}/10 flex items-center justify-center text-${res.color} group-hover:bg-${res.color} group-hover:text-white transition-all`}>
                  <res.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight mb-4">{res.name}</h3>
                  <p className="text-[var(--text-muted)] font-medium leading-relaxed">{res.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                Explore Resource <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
