import React from 'react';
import { GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';

const Lessons = () => {
  return (
    <div className="flex flex-col bg-[var(--bg-body)] min-h-screen">
      <section className="relative py-20 bg-[var(--bg-card)] border-b border-[var(--border-color)] overflow-hidden text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[var(--text-main)] uppercase tracking-tight">Bible Study <span className="text-brand-red">Lessons</span></h1>
        <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto font-medium">Deep diving into the Word of Truth. Systematic study for every believer.</p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "New Believers Class", items: ["The Plan of Salvation", "The Nature of God", "Faith Foundations"] },
            { title: "Workers Training", items: ["Spiritual Discipline", "Ministry of Service", "Church Governance"] },
            { title: "Advanced Theology", items: ["The Tabernacle Shadows", "End-Time Prophecy", "Hebrew & Greek Insights"] },
            { title: "Leadership Excellence", items: ["Servant Leadership", "Vision Casting", "Organizational Integrity"] },
          ].map((lesson, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-[var(--bg-card)] border border-[var(--border-color)] group hover:border-brand-green/50 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">{lesson.title}</h3>
              </div>
              <div className="space-y-4">
                {lesson.items.map((item, j) => (
                  <div key={j} className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] group-hover:border-[var(--border-color)] transition-all">
                    <div className="flex items-center gap-3 text-[var(--text-muted)] text-sm font-bold uppercase tracking-widest">
                      <CheckCircle2 size={14} className="text-brand-red" />
                      {item}
                    </div>
                    <ChevronRight size={16} className="text-[var(--text-muted)] group-hover:text-brand-green transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lessons;
