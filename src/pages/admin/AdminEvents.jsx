import React, { useState } from 'react';
import { Plus, Search, Calendar as CalendarIcon, MapPin, Clock, X } from 'lucide-react';

const AdminEvents = () => {
  const [eventList, setEventList] = useState([
    { id: 1, title: 'Annual Prayer Conference', date: 'March 15-20, 2026', location: 'Global Headquarters', status: 'Upcoming' },
    { id: 2, title: 'Youth Excellence Summit', date: 'Feb 10, 2026', location: 'Sabo Branch', status: 'Upcoming' },
    { id: 3, title: 'Night of Freedom', date: 'Every 3rd Friday', location: 'Headquarters', status: 'Recurring' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({ title: '', date: '', location: '', status: 'Upcoming' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this event?')) {
      setEventList(eventList.filter(e => e.id !== id));
    }
  };

  const handleOpenModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setFormData(event);
    } else {
      setEditingEvent(null);
      setFormData({ title: '', date: '', location: '', status: 'Upcoming' });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingEvent) {
      setEventList(eventList.map(ev => ev.id === editingEvent.id ? { ...formData, id: ev.id } : ev));
    } else {
      setEventList([{ ...formData, id: Date.now() }, ...eventList]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">Event Management</h3>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 transition-all"
        >
          <Plus size={18} /> Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event) => (
          <div key={event.id} className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] p-6 space-y-4 hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                <CalendarIcon size={24} />
              </div>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${event.status === 'Upcoming' ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-green/10 text-brand-green'
                }`}>
                {event.status}
              </span>
            </div>
            <div>
              <h4 className="text-lg font-black text-[var(--text-main)] uppercase tracking-tight mb-2">{event.title}</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">
                  <Clock size={12} className="text-brand-red" /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">
                  <MapPin size={12} className="text-brand-red" /> {event.location}
                </div>
              </div>
            </div>
            <div className="pt-4 flex gap-2">
              <button
                onClick={() => handleOpenModal(event)}
                className="flex-1 py-3 rounded-xl bg-[var(--bg-input)] text-[var(--text-muted)] hover:text-[var(--text-main)] font-black text-[10px] uppercase tracking-widest hover:bg-[var(--border-color)] transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="py-3 px-4 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-brand-red transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[var(--bg-body)]/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-[var(--border-color)] flex justify-between items-center">
              <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">
                {editingEvent ? 'Edit Event' : 'Create Event'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 bg-[var(--bg-input)] text-[var(--text-muted)] rounded-xl hover:text-brand-red transition-colors">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Event Title</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Date / Time</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Location</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Status</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] appearance-none" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Recurring">Recurring</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 rounded-xl bg-[var(--bg-input)] text-[var(--text-muted)] font-black text-xs uppercase tracking-widest hover:bg-[var(--border-color)] transition-all">Cancel</button>
                <button type="submit" className="flex-1 py-4 rounded-xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all">{editingEvent ? 'Update Event' : 'Create Event'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
