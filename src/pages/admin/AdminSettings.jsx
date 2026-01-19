import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import {
    Moon,
    Sun,
    Lock,
    Shield,
    CheckCircle,
    Save,
    AlertCircle,
    Eye,
    EyeOff
} from 'lucide-react';

const AdminSettings = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    // Password State
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handlePasswordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
        // Clear status when user starts typing again
        if (status.message) setStatus({ type: '', message: '' });
    };

    const toggleVisibility = (field) => {
        setShowPassword({ ...showPassword, [field]: !showPassword[field] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // simple validation
        if (!passwords.current || !passwords.new || !passwords.confirm) {
            setStatus({ type: 'error', message: 'All fields are required.' });
            setIsLoading(false);
            return;
        }

        if (passwords.new !== passwords.confirm) {
            setStatus({ type: 'error', message: 'New passwords do not match.' });
            setIsLoading(false);
            return;
        }

        if (passwords.new.length < 8) {
            setStatus({ type: 'error', message: 'Password must be at least 8 characters long.' });
            setIsLoading(false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setStatus({ type: 'success', message: 'Password updated successfully!' });
            setPasswords({ current: '', new: '', confirm: '' });
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Header */}
            <div>
                <h2 className="text-3xl font-black text-[var(--text-main)] uppercase tracking-tight">Settings</h2>
                <p className="text-[var(--text-muted)] mt-2 font-medium">Manage your account preferences and security configuration.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Appearance Settings */}
                <div className="space-y-6">
                    <div className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] p-8 shadow-sm h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">Appearance</h3>
                                <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">Customize Look & Feel</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-[var(--bg-input)] border border-[var(--border-color)]">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-bold text-[var(--text-main)]">Interface Theme</span>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'bg-indigo-500/10 text-indigo-500' : 'bg-orange-500/10 text-orange-500'}`}>
                                        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                                    Switch between dark and light themes to customize your admin experience. Dark mode is distinct and easy on the eyes for night work.
                                </p>

                                <button
                                    onClick={toggleTheme}
                                    className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${isDarkMode
                                            ? 'bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-[var(--bg-body)]'
                                            : 'bg-zinc-900 text-white shadow-xl hover:bg-black'
                                        }`}
                                >
                                    {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                                    Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="space-y-6">
                    <div className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">Security</h3>
                                <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">Update Password</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-4 rounded-xl flex items-center gap-3 text-xs font-bold ${status.type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-brand-green/10 text-brand-green'}`}>
                                    {status.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
                                    {status.message}
                                </div>
                            )}

                            <div className="space-y-4">
                                <div className="relative">
                                    <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block ml-1">Current Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
                                        <input
                                            type={showPassword.current ? "text" : "password"}
                                            name="current"
                                            value={passwords.current}
                                            onChange={handlePasswordChange}
                                            className="w-full pl-12 pr-12 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] placeholder-[var(--text-muted)]/50"
                                            placeholder="••••••••"
                                        />
                                        <button type="button" onClick={() => toggleVisibility('current')} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)]">
                                            {showPassword.current ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block ml-1">New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
                                        <input
                                            type={showPassword.new ? "text" : "password"}
                                            name="new"
                                            value={passwords.new}
                                            onChange={handlePasswordChange}
                                            className="w-full pl-12 pr-12 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] placeholder-[var(--text-muted)]/50"
                                            placeholder="••••••••"
                                        />
                                        <button type="button" onClick={() => toggleVisibility('new')} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)]">
                                            {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 block ml-1">Confirm New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
                                        <input
                                            type={showPassword.confirm ? "text" : "password"}
                                            name="confirm"
                                            value={passwords.confirm}
                                            onChange={handlePasswordChange}
                                            className="w-full pl-12 pr-12 py-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] focus:border-brand-red outline-none text-sm font-bold text-[var(--text-main)] placeholder-[var(--text-muted)]/50"
                                            placeholder="••••••••"
                                        />
                                        <button type="button" onClick={() => toggleVisibility('confirm')} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)]">
                                            {showPassword.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 rounded-xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-red/20 hover:bg-red-600 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                            >
                                {isLoading ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Save size={16} /> Update Password
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
