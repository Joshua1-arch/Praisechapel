import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Filter,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Maximize2,
  Save,
  CheckCircle,
  FileText,
  Video,
  Image as ImageIcon,
  Calendar,
  Clock,
  User,
  Tag
} from 'lucide-react';

const AdminSermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // details, media, notes

  // Filter State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'All',
    preacher: 'All'
  });

  // Data State
  const [sermonList, setSermonList] = useState([
    { id: 1, title: 'The Power of Persistent Prayer', preacher: 'Reverend Debo Adeyemo', date: 'Jan 10, 2026', duration: '45:20', status: 'Published', description: 'A powerful message on how persistent prayer breaks chains.', videoUrl: '', series: 'Prayer Works', tags: ['Prayer', 'Faith'] },
    { id: 2, title: 'Walking in Divine Purpose', preacher: 'Sarah Solomon', date: 'Jan 03, 2026', duration: '38:15', status: 'Published', description: '', videoUrl: '', series: 'Purpose', tags: ['Purpose'] },
    { id: 3, title: 'Understanding Apostles Doctrine', preacher: 'Pastor Samuel Adebayo', date: 'Dec 27, 2025', duration: '52:00', status: 'Draft', description: '', videoUrl: '', series: 'Doctrine', tags: ['Teaching'] },
  ]);

  const [editingSermon, setEditingSermon] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    preacher: '',
    date: '',
    duration: '',
    status: 'Draft',
    description: '',
    videoUrl: '',
    series: '',
    tags: ''
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Filter Logic
  const filteredSermons = sermonList.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filters.status === 'All' || sermon.status === filters.status;
    const matchesPreacher = filters.preacher === 'All' || sermon.preacher === filters.preacher;

    return matchesSearch && matchesStatus && matchesPreacher;
  });

  // Get unique preachers for filter
  const preachers = [...new Set(sermonList.map(s => s.preacher))];

  const clearFilters = () => {
    setFilters({ status: 'All', preacher: 'All' });
    setSearchTerm('');
    setIsFilterOpen(false);
  };

  // Load draft from local storage when modal opens for new item
  useEffect(() => {
    if (isModalOpen && !editingSermon) {
      const savedDraft = localStorage.getItem('sermon_draft');
      if (savedDraft) {
        if (window.confirm('You have an unsaved draft. Would you like to restore it?')) {
          setFormData(JSON.parse(savedDraft));
          setHasUnsavedChanges(true);
        }
      }
    }
  }, [isModalOpen, editingSermon]);

  // Auto-save draft to local storage
  useEffect(() => {
    if (isModalOpen && !editingSermon && hasUnsavedChanges) {
      const timer = setTimeout(() => {
        localStorage.setItem('sermon_draft', JSON.stringify(formData));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formData, isModalOpen, editingSermon, hasUnsavedChanges]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleOpenModal = (sermon = null) => {
    if (sermon) {
      setEditingSermon(sermon);
      // Convert tags array to string for input if needed
      setFormData({
        ...sermon,
        tags: Array.isArray(sermon.tags) ? sermon.tags.join(', ') : (sermon.tags || '')
      });
    } else {
      setEditingSermon(null);
      setFormData({
        title: '',
        preacher: '',
        date: '',
        duration: '',
        status: 'Draft',
        description: '',
        videoUrl: '',
        series: '',
        tags: ''
      });
    }
    setActiveTab('details');
    setHasUnsavedChanges(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (hasUnsavedChanges) {
      if (!window.confirm('You have unsaved changes. Are you sure you want to close? Your draft will be saved locally.')) {
        return;
      }
    }
    setIsModalOpen(false);
  };

  const handleSave = (status = 'Draft') => {
    const finalData = {
      ...formData,
      status: status,
      tags: typeof formData.tags === 'string'
        ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : formData.tags
    };

    if (editingSermon) {
      setSermonList(sermonList.map(s => s.id === editingSermon.id ? { ...finalData, id: s.id } : s));
    } else {
      setSermonList([{ ...finalData, id: Date.now() }, ...sermonList]);
      localStorage.removeItem('sermon_draft');
    }

    setHasUnsavedChanges(false);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this sermon?')) {
      setSermonList(sermonList.filter(s => s.id !== id));
    }
  };

  return (
    <div className="space-y-8 h-full">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
          <input
            type="text"
            placeholder="Search sermons..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-brand-red outline-none transition-all text-sm font-medium text-[var(--text-main)]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl border font-bold text-xs uppercase tracking-widest transition-all ${isFilterOpen || filters.status !== 'All' || filters.preacher !== 'All'
                  ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/20'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--text-muted)]'
                }`}
            >
              <Filter size={16} /> Filter
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-[var(--text-main)] uppercase tracking-widest">Filters</span>
                  {(filters.status !== 'All' || filters.preacher !== 'All') && (
                    <button onClick={clearFilters} className="text-[10px] text-brand-red font-bold hover:underline">Clear All</button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest block mb-2">By Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-main)] outline-none focus:border-brand-red"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest block mb-2">By Preacher</label>
                    <select
                      value={filters.preacher}
                      onChange={(e) => setFilters({ ...filters, preacher: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-main)] outline-none focus:border-brand-red"
                    >
                      <option value="All">All Preachers</option>
                      {preachers.map(preacher => (
                        <option key={preacher} value={preacher}>{preacher}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all"
          >
            <Plus size={18} /> Add New Sermon
          </button>
        </div>
      </div>

      {/* Sermons Table */}
      <div className="bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-input)]">
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Sermon Details</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Preacher</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Date & Duration</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {filteredSermons.map((sermon) => (
                <tr key={sermon.id} className="hover:bg-[var(--bg-input)]/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--bg-input)] flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight">{sermon.title}</span>
                        {sermon.series && <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{sermon.series} Series</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-[var(--text-muted)] uppercase tracking-wide">
                    {sermon.preacher}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[var(--text-main)]">{sermon.date}</span>
                      <span className="text-[10px] text-[var(--text-muted)] font-bold">{sermon.duration}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${sermon.status === 'Published' ? 'bg-brand-green/10 text-brand-green' :
                      sermon.status === 'Draft' ? 'bg-[var(--bg-input)] text-[var(--text-muted)]' :
                        'bg-orange-500/10 text-orange-500'
                      }`}>
                      {sermon.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenModal(sermon)}
                        className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(sermon.id)}
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
      </div>

      {/* SOPHISTICATED EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-body)]/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-5xl bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-input)]/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  {editingSermon ? <Edit2 size={24} /> : <Plus size={24} />}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">
                    {editingSermon ? 'Edit Sermon' : 'Create New Sermon'}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {hasUnsavedChanges && <span className="text-orange-500 flex items-center gap-1"><Save size={10} /> Unsaved Changes</span>}
                    {!hasUnsavedChanges && formData.status === 'Draft' && <span className="flex items-center gap-1"><Save size={10} /> Draft Saved</span>}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleCloseModal} className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-input)] transition-all">
                  <Maximize2 size={20} />
                </button>
                <button onClick={handleCloseModal} className="p-2 rounded-xl text-[var(--text-muted)] hover:text-brand-red hover:bg-[var(--bg-input)] transition-all">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body - Split Layout */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              {/* Sidebar Navigation */}
              <div className="w-full md:w-64 border-r border-[var(--border-color)] bg-[var(--bg-input)]/10 p-4 space-y-2">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'details' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)]'}`}
                >
                  <FileText size={16} /> Basic Details
                </button>
                <button
                  onClick={() => setActiveTab('media')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'media' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)]'}`}
                >
                  <Video size={16} /> Media & Links
                </button>
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'notes' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)]'}`}
                >
                  <FileText size={16} /> Description & Notes
                </button>
              </div>

              {/* Main Form Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-3xl mx-auto space-y-8">

                  {/* DETAILS TAB */}
                  {activeTab === 'details' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Sermon Title</label>
                        <input
                          type="text"
                          className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-lg font-bold text-[var(--text-main)] placeholder-[var(--text-muted)]/50"
                          placeholder="Enter the sermon title..."
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          autoFocus
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><User size={12} /> Preacher</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                            placeholder="e.g. Pastor Samuel"
                            value={formData.preacher}
                            onChange={(e) => handleInputChange('preacher', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Tag size={12} /> Sermon Series</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                            placeholder="e.g. Kingdom Finance"
                            value={formData.series}
                            onChange={(e) => handleInputChange('series', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Calendar size={12} /> Date Preached</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                            placeholder="Jan 1, 2026"
                            value={formData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Clock size={12} /> Duration</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                            placeholder="00:00:00"
                            value={formData.duration}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MEDIA TAB */}
                  {activeTab === 'media' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="p-8 border-2 border-dashed border-[var(--border-color)] rounded-2xl bg-[var(--bg-input)]/30 flex flex-col items-center justify-center text-center hover:border-brand-red/50 transition-colors group cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-brand-red mb-4 transition-colors shadow-sm">
                          <ImageIcon size={32} />
                        </div>
                        <h4 className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight">Upload Thumbnail</h4>
                        <p className="text-xs text-[var(--text-muted)] mt-1">Drag and drop or click to browse</p>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Video size={12} /> Video URL (YouTube/Vimeo)</label>
                        <input
                          type="text"
                          className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] font-mono"
                          placeholder="https://youtube.com/watch?v=..."
                          value={formData.videoUrl}
                          onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* NOTES TAB */}
                  {activeTab === 'notes' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2">Description / Sermon Notes</label>
                        <textarea
                          rows="12"
                          className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-medium text-[var(--text-main)] resize-none leading-relaxed"
                          placeholder="Enter the sermon description, key points, or full transcript here..."
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Tag size={12} /> Tags (Comma Separated)</label>
                        <input
                          type="text"
                          className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                          placeholder="Prayer, Faith, Deliverance..."
                          value={formData.tags}
                          onChange={(e) => handleInputChange('tags', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-body)] flex justify-between items-center">
              <div className="text-xs font-bold text-[var(--text-muted)] hidden sm:block">
                {hasUnsavedChanges ? 'Unsaved changes' : 'All changes saved'}
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleSave('Draft')}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-input)] font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Save size={16} /> Save as Draft
                </button>
                <button
                  onClick={() => handleSave('Published')}
                  className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle size={16} /> Publish Sermon
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSermons;
