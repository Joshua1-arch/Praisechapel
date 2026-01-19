import React from 'react';
import { Heart, Landmark, Smartphone, Gift, ArrowRight, ShieldCheck, Info, Users } from 'lucide-react';

const Give = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[var(--bg-body)] border-b border-[var(--border-color)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(227,62,51,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-[var(--text-main)] tracking-tight uppercase leading-none">
            Sacrificial <span className="text-brand-red">Giving</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-medium">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
            <span className="text-zinc-500 text-sm block mt-4 font-bold uppercase tracking-widest">— 2 Corinthians 9:7</span>
          </p>
        </div>
      </section>

      {/* Why Give? */}
      <section className="py-24 bg-[var(--bg-body)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-[var(--text-main)] uppercase tracking-tight leading-none">Powering the <span className="text-brand-green">Ministries</span></h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed font-medium">
              Your seeds enable House-To-House Prayer Ministries to reach the unreached, support the needy, and maintain the fire on our prayer altars.
            </p>
            <div className="space-y-4">
              {[
                'Raising Prayer Altars Globally',
                'Prophetic Media Outreach',
                'Community Benevolence Programs',
                'Missionary Support in Rural Areas'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300 font-bold uppercase tracking-widest text-[10px]">
                  <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center text-white">
                    <ShieldCheck size={12} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-green/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1200"
              alt="Community impact"
              className="relative rounded-3xl shadow-2xl border border-[var(--border-color)] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-24 bg-[var(--bg-body)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Covenant Portals</h2>
            <h3 className="text-4xl font-black text-[var(--text-main)] uppercase tracking-tight">Channels of Blessing</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Online Portal',
                desc: 'Secure digital giving for tithes, offerings, and special seeds.',
                icon: Heart,
                btnText: 'Give Digitally',
                highlight: true
              },
              {
                title: 'Direct Deposit',
                desc: 'Transfer directly into the ministry covenant accounts.',
                icon: Landmark,
                btnText: 'View Accounts',
                highlight: false
              },
              {
                title: 'Mobile Seed',
                desc: 'Simple SMS-based giving for instant prophetic tokens.',
                icon: Smartphone,
                btnText: 'Mobile Instructions',
                highlight: false
              },
            ].map((option, i) => (
              <div key={i} className={`group p-10 rounded-[2.5rem] border transition-all ${option.highlight
                  ? 'bg-brand-green border-brand-green shadow-2xl shadow-brand-green/20'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-brand-red/50'
                }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${option.highlight ? 'bg-white text-brand-green' : 'bg-brand-red/10 text-brand-red'
                  }`}>
                  <option.icon size={32} />
                </div>
                <h4 className="text-xl font-black mb-4 text-[var(--text-main)] uppercase tracking-tight">{option.title}</h4>
                <p className={`mb-8 text-sm font-medium leading-relaxed ${option.highlight ? 'text-zinc-100' : 'text-[var(--text-muted)]'}`}>{option.desc}</p>
                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 active:scale-95 ${option.highlight
                    ? 'bg-white text-brand-green hover:bg-zinc-100'
                    : 'bg-[var(--bg-input)] text-[var(--text-main)] hover:bg-[var(--bg-card)] border border-[var(--border-color)]'
                  }`}>
                  {option.btnText}
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-24 bg-[var(--bg-body)] border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[var(--bg-input)] p-8 flex items-center gap-4 border-b border-[var(--border-color)]">
              <Info className="text-brand-red" size={32} />
              <div>
                <h3 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">Covenant Accounts</h3>
                <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-widest">For bank transfers and wire payments</p>
              </div>
            </div>
            <div className="p-8 space-y-4">
              {[
                { label: 'Bank Name', value: 'Global Kingdom Bank' },
                { label: 'Account Name', value: 'House-To-House Ministries' },
                { label: 'Account Number', value: '0123 4567 8901' },
                { label: 'Swift Code', value: 'HHPMUS33' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-[var(--border-color)] last:border-0">
                  <span className="text-[var(--text-muted)] font-black uppercase tracking-widest text-[10px]">{item.label}</span>
                  <span className="text-[var(--text-main)] font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: 'Lives Impacted', value: '10k+', icon: Users },
              { label: 'Missions Supported', value: '25+', icon: Gift },
              { label: 'Secure Payments', value: '100%', icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="text-white space-y-2">
                <div className="flex justify-center mb-4"><stat.icon size={40} className="text-indigo-200" /></div>
                <div className="text-5xl font-extrabold">{stat.value}</div>
                <div className="text-indigo-100 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;