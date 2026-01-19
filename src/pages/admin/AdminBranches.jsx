import React, { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, Globe, X } from 'lucide-react';

const AdminBranches = () => {
  const [branchList, setBranchList] = useState([
    { id: 1, name: 'Sabo Branch', region: 'Sabo Region', pastor: 'Pastor Samuel Adebayo', status: 'Active' },
    { id: 2, name: 'Papa Branch', region: 'Papa Region', pastor: 'Pastor Michael Brown', status: 'Active' },
    { id: 3, name: 'Bethel', region: 'Papa Region', pastor: 'Pastor David Smith', status: 'Active' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState(null);
  const [formData, setFormData] = useState({ name: '', region: '', pastor: '', status: 'Active' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this branch?')) {
      setBranchList(branchList.filter(b => b.id !== id));
    }
  };

  const handleOpenModal = (branch = null) => {
    if (branch) {
      setEditingBranch(branch);
      setFormData(branch);
    } else {
      setEditingBranch(null);
      setFormData({ name: '', region: '', pastor: '', status: 'Active' });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingBranch) {
      setBranchList(branchList.map(b => b.id === editingBranch.id ? { ...formData, id: b.id } : b));
    } else {
      setBranchList([{ ...formData, id: Date.now() }, ...branchList]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">Branch Management</h3>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 transition-all"
        >
          <Plus size={18} /> Add New Branch
        </button>
      </div>

      <div className="bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[var(--bg-input)]">
              <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Branch Name</th>
              <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Region</th>
              <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Pastor In Charge</th>
              <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {branchList.map((branch) => (
              <tr key={branch.id} className="hover:bg-[var(--bg-input)]/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                      <Globe size={18} />
                    </div>
                    <span className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight">{branch.name}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">{branch.region}</td>
                <td className="px-8 py-6 text-sm font-bold text-[var(--text-muted)]">{branch.pastor}</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[9px] font-black uppercase tracking-widest">{branch.status}</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleOpenModal(branch)}
                      className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(branch.id)}
                      className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Branch Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[var(--bg-body)]/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-[var(--border-color)] flex justify-between items-center">
              <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">
                {editingBranch ? 'Edit Branch' : 'Add New Branch'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 bg-[var(--bg-input)] text-[var(--text-muted)] rounded-xl hover:text-brand-red transition-colors">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Branch Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Region</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]" value={formData.region} onChange={(e) => setFormData({ ...formData, region: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Pastor In Charge</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]" value={formData.pastor} onChange={(e) => setFormData({ ...formData, pastor: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Status</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] appearance-none" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 rounded-xl bg-[var(--bg-input)] text-[var(--text-muted)] font-black text-xs uppercase tracking-widest hover:bg-[var(--border-color)] transition-all">Cancel</button>
                <button type="submit" className="flex-1 py-4 rounded-xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all">{editingBranch ? 'Update Branch' : 'Create Branch'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBranches;
