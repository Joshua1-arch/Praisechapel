import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Filter,
  X,
  Maximize2,
  Save,
  CheckCircle,
  FileText,
  Book,
  Headphones,
  Zap,
  Video,
  Image as ImageIcon,
  Tag,
  Link as LinkIcon,
  Download,
  LayoutGrid,
  Calendar,
  UploadCloud,
  Sun
} from 'lucide-react';

const AdminResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // details, content, media

  // Filter State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'All', // All, Published, Draft
    type: 'All'    // All, Daily Charge, Blog, etc.
  });

  // Resource Types Configuration
  const RESOURCE_TYPES = {
    'Daily Charge': { icon: Sun, label: 'Daily Charge', color: 'text-orange-500' },
    'Blog': { icon: FileText, label: 'Prophetic Blog', color: 'text-brand-red' },
    'Book': { icon: Book, label: 'Book / E-Book', color: 'text-blue-500' },
    'Audio': { icon: Headphones, label: 'Meditation Audio', color: 'text-purple-500' },
    'Lesson': { icon: LayoutGrid, label: 'Bible Lesson', color: 'text-green-500' },
    'Tract': { icon: Zap, label: 'Evangelism Tract', color: 'text-yellow-500' }
  };

  // Mock Data
  const [resourceList, setResourceList] = useState([
    { id: 1, title: 'The Power of Consistency', type: 'Daily Charge', author: 'Pastor Sam', status: 'Published', views: 450, date: 'Jan 20, 2026' },
    { id: 2, title: 'Walking in Divine Health', type: 'Book', author: 'Pastor Sam', status: 'Published', views: 1250, date: 'Jan 15, 2026' },
    { id: 3, title: 'The Mystery of Grace', type: 'Audio', author: 'Rev. Debo', status: 'Published', views: 890, date: 'Jan 12, 2026' },
    { id: 4, title: 'Understanding the Times', type: 'Blog', author: 'Sarah Solomon', status: 'Draft', views: 0, date: 'Jan 10, 2026' },
  ]);

  const [editingResource, setEditingResource] = useState(null);

  // Form State
  const initialFormState = {
    title: '',
    type: 'Daily Charge',
    author: '',
    description: '',
    status: 'Draft',
    content: '', // For Blogs/Lessons/Charges
    scripture: '', // Specific to Daily Charge
    link: '', // For Downloads/Purchases
    mediaUrl: '', // For Audio/Video
    fileName: '', // For file uploads
    coverImage: '',
    tags: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Filter Logic
  const filteredResources = resourceList.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filters.status === 'All' || resource.status === filters.status;
    const matchesType = filters.type === 'All' || resource.type === filters.type;

    return matchesSearch && matchesStatus && matchesType;
  });

  const clearFilters = () => {
    setFilters({ status: 'All', type: 'All' });
    setSearchTerm('');
    setIsFilterOpen(false);
  };

  // --- DRAFT LOGIC ---
  useEffect(() => {
    if (isModalOpen && !editingResource) {
      const savedDraft = localStorage.getItem('resource_draft');
      if (savedDraft) {
        const parsedDraft = JSON.parse(savedDraft);
        if (window.confirm(`You have an unsaved ${parsedDraft.type} draft. Would you like to restore it?`)) {
          setFormData(parsedDraft);
          setHasUnsavedChanges(true);
        }
      }
    }
  }, [isModalOpen, editingResource]);

  useEffect(() => {
    if (isModalOpen && !editingResource && hasUnsavedChanges) {
      const timer = setTimeout(() => {
        localStorage.setItem('resource_draft', JSON.stringify(formData));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formData, isModalOpen, editingResource, hasUnsavedChanges]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleFileUpload = (e, fieldName = 'fileName') => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, this would upload to server. Here we simulate it.
      handleInputChange(fieldName, file.name);
      alert(`File "${file.name}" selected ready for upload.`);
    }
  };

  const handleOpenModal = (resource = null) => {
    if (resource) {
      setEditingResource(resource);
      setFormData({
        ...initialFormState,
        ...resource,
        tags: Array.isArray(resource.tags) ? resource.tags.join(', ') : (resource.tags || '')
      });
    } else {
      setEditingResource(null);
      setFormData(initialFormState);
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

    if (editingResource) {
      setResourceList(resourceList.map(r => r.id === editingResource.id ? { ...finalData, id: r.id } : r));
    } else {
      setResourceList([{ ...finalData, id: Date.now(), views: 0, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }, ...resourceList]);
      localStorage.removeItem('resource_draft');
    }

    setHasUnsavedChanges(false);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      setResourceList(resourceList.filter(r => r.id !== id));
    }
  };

  // Helper to render dynamic form fields based on type
  const renderDynamicFields = () => {
    const type = formData.type;

    switch (type) {
      case 'Daily Charge':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Book size={12} /> Daily Scripture
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                  placeholder="e.g. Philippians 4:13"
                  value={formData.scripture}
                  onChange={(e) => handleInputChange('scripture', e.target.value)}
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Calendar size={12} /> Charge Date
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                  placeholder="e.g. Jan 20, 2026"
                  value={formData.date || ''}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                <FileText size={12} /> Exhortation Content
              </label>
              <textarea
                rows="12"
                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-medium text-[var(--text-main)] resize-none"
                placeholder="Write the daily charge message..."
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
              />
            </div>
          </div>
        );

      case 'Blog':
      case 'Lesson':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                <FileText size={12} /> {type} Content (Markdown/HTML)
              </label>
              <textarea
                rows="15"
                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-medium text-[var(--text-main)] resize-none font-mono"
                placeholder={`Write your ${type.toLowerCase()} content here...`}
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
              />
            </div>
          </div>
        );

      case 'Audio':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                <UploadCloud size={12} /> Upload Audio File
              </label>
              <div className="relative group">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => handleFileUpload(e, 'fileName')}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full px-5 py-4 rounded-xl bg-[var(--bg-input)] border-2 border-dashed border-[var(--border-color)] group-hover:border-brand-red group-hover:bg-brand-red/5 transition-all flex flex-col items-center justify-center gap-2">
                  <UploadCloud size={24} className="text-[var(--text-muted)] group-hover:text-brand-red transition-colors" />
                  <span className="text-xs font-bold text-[var(--text-main)]">
                    {formData.fileName ? formData.fileName : 'Click to Upload Audio File'}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">MP3, WAV, AAC supported</span>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Headphones size={12} /> Or External Audio URL
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] font-mono"
                placeholder="https://... (MP3 link)"
                value={formData.mediaUrl}
                onChange={(e) => handleInputChange('mediaUrl', e.target.value)}
              />
            </div>
          </div>
        );

      case 'Book':
      case 'Tract':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Download size={12} /> Upload Document (PDF/EPUB)
                </label>
                <div className="relative group h-[52px]">
                  <input
                    type="file"
                    accept=".pdf,.epub"
                    onChange={(e) => handleFileUpload(e, 'fileName')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full h-full px-5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] group-hover:border-brand-red group-hover:bg-brand-red/5 transition-all flex items-center justify-between">
                    <span className="text-sm font-bold text-[var(--text-main)] truncate max-w-[200px]">
                      {formData.fileName || 'Select File...'}
                    </span>
                    <UploadCloud size={16} className="text-[var(--text-muted)] group-hover:text-brand-red" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <LinkIcon size={12} /> Or External Purchase Link
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] text-blue-500"
                  placeholder="https://amazon.com/..."
                  value={formData.link}
                  onChange={(e) => handleInputChange('link', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
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
            placeholder="Search resources..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-brand-red outline-none transition-all text-sm font-medium text-[var(--text-main)]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl border font-bold text-xs uppercase tracking-widest transition-all ${isFilterOpen || filters.status !== 'All' || filters.type !== 'All'
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
                  {(filters.status !== 'All' || filters.type !== 'All') && (
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
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest block mb-2">By Type</label>
                    <select
                      value={filters.type}
                      onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-main)] outline-none focus:border-brand-red"
                    >
                      <option value="All">All Types</option>
                      {Object.keys(RESOURCE_TYPES).map(type => (
                        <option key={type} value={type}>{type}</option>
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
            <Plus size={18} /> Add Resource
          </button>
        </div>
      </div>

      {/* Resources Table */}
      <div className="bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-input)]">
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Resource Name</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Type</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Author</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {filteredResources.map((resource) => {
                const TypeConfig = RESOURCE_TYPES[resource.type] || RESOURCE_TYPES['Blog'];
                const TypeIcon = TypeConfig.icon;

                return (
                  <tr key={resource.id} className="hover:bg-[var(--bg-input)]/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-[var(--bg-input)] flex items-center justify-center ${TypeConfig.color} group-hover:bg-brand-red group-hover:text-white transition-all`}>
                          <TypeIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight line-clamp-1">{resource.title}</span>
                          <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{resource.date}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-body)]">
                        <TypeIcon size={12} className={TypeConfig.color} />
                        <span className="text-[10px] font-bold text-[var(--text-main)] uppercase tracking-wide">{TypeConfig.label}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-[var(--text-muted)]">
                      {resource.author}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${resource.status === 'Published' ? 'bg-brand-green/10 text-brand-green' :
                        resource.status === 'Draft' ? 'bg-[var(--bg-input)] text-[var(--text-muted)]' :
                          'bg-orange-500/10 text-orange-500'
                        }`}>
                        {resource.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenModal(resource)}
                          className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(resource.id)}
                          className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SOPHISTICATED RESOURCE EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-body)]/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-5xl bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-input)]/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  {editingResource ? <Edit2 size={24} /> : <Plus size={24} />}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">
                    {editingResource ? 'Edit Resource' : 'Add New Resource'}
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
                  onClick={() => setActiveTab('content')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'content' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)]'}`}
                >
                  <LayoutGrid size={16} /> {formData.type === 'Audio' ? 'Media File' : formData.type === 'Book' || formData.type === 'Tract' ? 'File & Links' : 'Content & Body'}
                </button>
                <button
                  onClick={() => setActiveTab('media')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'media' ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)]'}`}
                >
                  <ImageIcon size={16} /> Cover & Meta
                </button>
              </div>

              {/* Main Form Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-3xl mx-auto space-y-8">

                  {/* DETAILS TAB */}
                  {activeTab === 'details' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">

                      {/* RESOURCE TYPE SELECTOR */}
                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-3 block">Select Resource Type</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {Object.entries(RESOURCE_TYPES).map(([key, config]) => (
                            <button
                              key={key}
                              onClick={() => handleInputChange('type', key)}
                              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${formData.type === key
                                ? 'border-brand-red bg-brand-red/5 text-brand-red'
                                : 'border-[var(--border-color)] bg-[var(--bg-input)] hover:border-[var(--text-muted)] text-[var(--text-muted)]'}`}
                            >
                              <config.icon size={20} />
                              <span className="text-[10px] font-black uppercase tracking-tight">{config.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Resource Title</label>
                        <input
                          type="text"
                          className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-lg font-bold text-[var(--text-main)] placeholder-[var(--text-muted)]/50"
                          placeholder="Enter title..."
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">Author / Creator</label>
                          <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                            placeholder="e.g. Pastor Sam"
                            value={formData.author}
                            onChange={(e) => handleInputChange('author', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2">Short Description</label>
                        <textarea
                          rows="3"
                          className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-medium text-[var(--text-main)] resize-none"
                          placeholder="Brief summary..."
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* CONTENT TAB (Dynamic based on type) */}
                  {activeTab === 'content' && renderDynamicFields()}

                  {/* MEDIA & META TAB */}
                  {activeTab === 'media' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      {/* Cover Image Upload (Functional UI) */}
                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2">
                          <ImageIcon size={12} /> Cover Image
                        </label>
                        <div className="relative group h-40">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, 'coverImage')}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="w-full h-full rounded-2xl bg-[var(--bg-input)] border-2 border-dashed border-[var(--border-color)] group-hover:border-brand-red group-hover:bg-brand-red/5 transition-all flex flex-col items-center justify-center gap-2">
                            <ImageIcon size={32} className="text-[var(--text-muted)] group-hover:text-brand-red transition-colors" />
                            <h4 className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight">
                              {formData.coverImage ? 'File Selected: ' + formData.coverImage : 'Upload Cover Image'}
                            </h4>
                            <p className="text-xs text-[var(--text-muted)] text-center max-w-xs">Drag and drop or click to replace</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Tag size={12} /> Tags (Comma Separated)</label>
                        <input
                          type="text"
                          className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                          placeholder="Faith, Grace, Healing..."
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
                  <CheckCircle size={16} /> Publish Resource
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AdminResources;
