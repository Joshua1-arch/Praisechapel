import React from 'react';
import { BookOpen, Download, ShoppingBag } from 'lucide-react';

const Books = () => {
  const items = [
    { title: "The Altar of Prayer", author: "Reverend Debo Adeyemo", type: "Digital / Print" },
    { title: "Doctrine of the Apostles", author: "House-To-House Ministries", type: "Digital PDF" },
    { title: "Prophetic Foundations", author: "Sarah Solomon", type: "Hardcover" },
  ];

  return (
    <div className="flex flex-col bg-zinc-950 min-h-screen">
      <section className="relative py-20 bg-zinc-900 border-b border-zinc-800 overflow-hidden text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">Books & <span className="text-brand-red">Publications</span></h1>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto font-medium">Resources to equip and empower the body of Christ.</p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="w-40 h-56 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 relative flex items-center justify-center">
                <BookOpen size={40} className="text-zinc-800" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-brand-red text-[10px] font-black uppercase tracking-widest">{item.type}</div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">by {item.author}</p>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-brand-green text-white hover:bg-brand-green/90 transition-all"><Download size={16} /></button>
                  <button className="px-4 py-2 rounded-lg bg-zinc-800 text-white text-[10px] font-black uppercase tracking-widest hover:bg-zinc-700 transition-all">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Books;
