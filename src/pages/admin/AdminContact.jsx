import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock, User, Trash2, X } from 'lucide-react';

const AdminContact = () => {
  const [inquiryList, setInquiryList] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Prayer Request', message: 'I need prayers for my family...', time: '2 hours ago', status: 'New' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Inquiry about Events', message: 'When is the next conference?', time: '5 hours ago', status: 'Read' },
    { id: 3, name: 'Michael Brown', email: 'mike@example.com', subject: 'Giving Inquiry', message: 'How do I donate via bank transfer?', time: '1 day ago', status: 'Replied' },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Delete this inquiry?')) {
      setInquiryList(inquiryList.filter(i => i.id !== id));
    }
  };

  const handleReply = (id) => {
    setInquiryList(inquiryList.map(i => i.id === id ? { ...i, status: 'Replied' } : i));
    alert('Reply sent successfully (Simulated)');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">Contact Inquiries</h3>

      <div className="space-y-4">
        {inquiryList.map((inquiry) => (
          <div key={inquiry.id} className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] p-8 hover:shadow-xl transition-all group relative overflow-hidden">
            {inquiry.status === 'New' && (
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-bl-[4rem] flex items-start justify-end p-6">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] font-black">
                    {inquiry.name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[var(--text-main)] uppercase tracking-tight leading-none">{inquiry.name}</h4>
                    <p className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest mt-1">{inquiry.email}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-black text-brand-red uppercase tracking-widest">{inquiry.subject}</h5>
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${inquiry.status === 'New' ? 'bg-brand-red/10 text-brand-red' :
                        inquiry.status === 'Replied' ? 'bg-brand-green/10 text-brand-green' :
                          'bg-[var(--bg-input)] text-[var(--text-muted)]'
                      }`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{inquiry.message}</p>
                </div>
              </div>

              <div className="md:w-48 flex flex-col justify-between items-end gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">
                  <Clock size={14} /> {inquiry.time}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleReply(inquiry.id)}
                    className="px-6 py-2 rounded-xl bg-brand-green text-white font-black text-[10px] uppercase tracking-widest hover:bg-brand-green/90 transition-all"
                  >
                    Reply
                  </button>
                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    className="p-2 rounded-xl bg-[var(--bg-input)] text-[var(--text-muted)] hover:text-brand-red transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminContact;
