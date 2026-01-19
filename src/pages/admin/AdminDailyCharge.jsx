import React, { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    MoreVertical,
    Edit2,
    Trash2,
    Filter,
    X,
    Maximize2,
    Save,
    CheckCircle,
    FileText, // For Content
    Image as ImageIcon, // For Image upload
    Calendar,
    Zap,
    BookOpen
} from 'lucide-react';

const AdminDailyCharge = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('details'); // details, content, media

    // Mock Data
    const [chargeList, setChargeList] = useState([
        { id: 1, title: 'The Power of Consistency', date: 'Jan 20, 2026', scripture: 'Galatians 6:9', status: 'Scheduled', author: 'Pastor Sam', views: 0 },
        { id: 2, title: 'Winning the Mind War', date: 'Jan 19, 2026', scripture: 'Romans 12:2', status: 'Published', author: 'Pastor Sam', views: 450 },
        { id: 3, title: 'Grace for the Race', date: 'Jan 18, 2026', scripture: 'Hebrews 4:16', status: 'Published', author: 'Rev. Debo', views: 380 },
    ]);

    const [editingCharge, setEditingCharge] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        scripture: '',
        date: '',
        author: 'Pastor Sam', // Default
        content: '',
        imageUrl: '', // For the daily charge image card
        status: 'Draft',
        tags: ''
    });

    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    // Filter Logic
    const filteredCharges = chargeList.filter(charge =>
        charge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charge.scripture.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Draft Handling
    useEffect(() => {
        if (isModalOpen && !editingCharge) {
            const savedDraft = localStorage.getItem('daily_charge_draft');
            if (savedDraft) {
                if (window.confirm('You have an unsaved Daily Charge draft. Restore it?')) {
                    setFormData(JSON.parse(savedDraft));
                    setHasUnsavedChanges(true);
                }
            }
        }
    }, [isModalOpen, editingCharge]);

    useEffect(() => {
        if (isModalOpen && !editingCharge && hasUnsavedChanges) {
            const timer = setTimeout(() => {
                localStorage.setItem('daily_charge_draft', JSON.stringify(formData));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [formData, isModalOpen, editingCharge, hasUnsavedChanges]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setHasUnsavedChanges(true);
    };

    const handleOpenModal = (charge = null) => {
        if (charge) {
            setEditingCharge(charge);
            setFormData({
                ...charge,
                tags: Array.isArray(charge.tags) ? charge.tags.join(', ') : (charge.tags || '')
            });
        } else {
            setEditingCharge(null);
            setFormData({
                title: '',
                scripture: '',
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                author: 'Pastor Sam',
                content: '',
                imageUrl: '',
                status: 'Draft',
                tags: ''
            });
        }
        setActiveTab('details');
        setHasUnsavedChanges(false);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (hasUnsavedChanges) {
            if (!window.confirm('You have unsaved changes. Close anyway? Draft will be saved locally.')) return;
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

        if (editingCharge) {
            setChargeList(chargeList.map(c => c.id === editingCharge.id ? { ...finalData, id: c.id } : c));
        } else {
            setChargeList([{ ...finalData, id: Date.now(), views: 0 }, ...chargeList]);
            localStorage.removeItem('daily_charge_draft');
        }
        setHasUnsavedChanges(false);
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this Daily Charge?')) {
            setChargeList(chargeList.filter(c => c.id !== id));
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
                        placeholder="Search charges..."
                        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] focus:border-brand-red outline-none transition-all text-sm font-medium text-[var(--text-main)]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] font-bold text-xs uppercase tracking-widest hover:border-[var(--text-muted)] transition-all">
                        <Filter size={16} /> Filter
                    </button>
                    <button
                        onClick={() => handleOpenModal()}
                        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all"
                    >
                        <Plus size={18} /> New Daily Charge
                    </button>
                </div>
            </div>

            {/* Charge List Table */}
            <div className="bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--bg-input)]">
                                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Topic & Scripture</th>
                                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Date</th>
                                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Author</th>
                                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border-color)]">
                            {filteredCharges.map((charge) => (
                                <tr key={charge.id} className="hover:bg-[var(--bg-input)]/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[var(--bg-input)] flex items-center justify-center text-orange-500 group-hover:bg-brand-red group-hover:text-white transition-all">
                                                <Zap size={20} fill="currentColor" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight">{charge.title}</span>
                                                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{charge.scripture}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-[var(--text-muted)]">
                                        {charge.date}
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-[var(--text-muted)]">
                                        {charge.author}
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${charge.status === 'Published' ? 'bg-brand-green/10 text-brand-green' :
                                                charge.status === 'Draft' ? 'bg-[var(--bg-input)] text-[var(--text-muted)]' :
                                                    'bg-orange-500/10 text-orange-500'
                                            }`}>
                                            {charge.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button onClick={() => handleOpenModal(charge)} className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors">
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(charge.id)} className="p-2 text-[var(--text-muted)] hover:text-brand-red transition-colors">
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

            {/* SOPHISTICATED MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-body)]/90 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-5xl bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-6 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-input)]/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                                    {editingCharge ? <Edit2 size={24} /> : <Plus size={24} />}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-[var(--text-main)] uppercase tracking-tight">
                                        {editingCharge ? 'Edit Daily Charge' : 'New Daily Charge'}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                        {hasUnsavedChanges ? <span className="text-orange-500 flex items-center gap-1"><Save size={10} /> Unsaved Changes</span> : formData.status === 'Draft' && <span className="flex items-center gap-1"><Save size={10} /> Draft Saved</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={handleCloseModal} className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all">
                                    <Maximize2 size={20} />
                                </button>
                                <button onClick={handleCloseModal} className="p-2 rounded-xl text-[var(--text-muted)] hover:text-brand-red transition-all">
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
                            {/* Sidebar */}
                            <div className="w-full md:w-64 border-r border-[var(--border-color)] bg-[var(--bg-input)]/10 p-4 space-y-2">
                                {['details', 'content', 'media'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)]'}`}
                                    >
                                        {tab === 'details' && <FileText size={16} />}
                                        {tab === 'content' && <BookOpen size={16} />}
                                        {tab === 'media' && <ImageIcon size={16} />}
                                        {tab === 'details' ? 'Details & Date' : tab === 'content' ? 'Charge Content' : 'Cover Image'}
                                    </button>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                <div className="max-w-3xl mx-auto space-y-8">
                                    {activeTab === 'details' && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                            <div>
                                                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Charge Topic / Title</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-lg font-bold text-[var(--text-main)] placeholder-[var(--text-muted)]/50"
                                                    placeholder="e.g. The Mystery of Grace"
                                                    value={formData.title}
                                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                                    autoFocus
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Bible Scripture</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                                                        placeholder="e.g. John 3:16"
                                                        value={formData.scripture}
                                                        onChange={(e) => handleInputChange('scripture', e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Author</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                                                        value={formData.author}
                                                        onChange={(e) => handleInputChange('author', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 flex items-center gap-2"><Calendar size={12} /> Date For Charge</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)]"
                                                    placeholder="Jan 20, 2026"
                                                    value={formData.date}
                                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'content' && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                            <div>
                                                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2">Exhortation / Charge Content</label>
                                                <textarea
                                                    rows="15"
                                                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-medium text-[var(--text-main)] resize-none leading-relaxed"
                                                    placeholder="Write the daily charge content here..."
                                                    value={formData.content}
                                                    onChange={(e) => handleInputChange('content', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'media' && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                            {/* REQUIRED MEDIA UPLOAD SECTION */}
                                            <div className="p-8 border-2 border-dashed border-[var(--border-color)] rounded-2xl bg-[var(--bg-input)]/30 flex flex-col items-center justify-center text-center hover:border-brand-red/50 transition-colors group cursor-pointer">
                                                <div className="w-16 h-16 rounded-full bg-[var(--bg-input)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-brand-red mb-4 transition-colors shadow-sm">
                                                    <ImageIcon size={32} />
                                                </div>
                                                <h4 className="text-sm font-black text-[var(--text-main)] uppercase tracking-tight">Upload Charge Image</h4>
                                                <p className="text-xs text-[var(--text-muted)] mt-1">Required for Social Sharing & App Display</p>
                                                <button className="mt-4 px-4 py-2 rounded-lg bg-[var(--bg-body)] border border-[var(--border-color)] text-[10px] font-black text-[var(--text-main)] uppercase tracking-widest hover:border-brand-red transition-all">
                                                    Select File
                                                </button>
                                            </div>

                                            <div>
                                                <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Or Use Direct Image URL</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-5 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] font-mono text-blue-500"
                                                    placeholder="https://..."
                                                    value={formData.imageUrl}
                                                    onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-body)] flex justify-between items-center">
                            <div className="text-xs font-bold text-[var(--text-muted)] hidden sm:block">
                                {hasUnsavedChanges ? 'Unsaved changes' : 'All changes saved'}
                            </div>
                            <div className="flex gap-3 w-full sm:w-auto">
                                <button
                                    onClick={() => handleSave('Draft')}
                                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-input)] font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                                >
                                    <Save size={16} /> Save Draft
                                </button>
                                <button
                                    onClick={() => handleSave('Published')}
                                    className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                                >
                                    <CheckCircle size={16} /> Publish Charge
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDailyCharge;
