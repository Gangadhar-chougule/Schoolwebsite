import { Lock, Moon, Eye, AlertCircle, Verified } from "lucide-react";
import { motion } from "motion/react";

export function Settings() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <header>
        <h2 className="text-4xl font-black tracking-tight mb-2">Settings</h2>
        <p className="text-on-surface-variant max-w-2xl leading-relaxed">Customize your dashboard experience, manage security protocols, and adjust accessibility features to suit your workflow.</p>
      </header>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: User Profile & Security */}
        <div className="md:col-span-7 space-y-6">
          {/* User Profile Card */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">User Profile</h3>
              <button className="text-sm font-bold text-primary px-4 py-2 hover:bg-surface-container-high rounded-full transition-colors">Edit Photo</button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
              <div className="relative">
                <img 
                  alt="Admin Profile" 
                  className="h-28 w-28 rounded-full object-cover ring-4 ring-primary-fixed" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX0hC004SAL38yaZ9XPVvODtLhdtlwpIBMY0mECJhSq0Vp7aST5-qwDfWL__2MWqlze4antMiAokuzgY97AlGaHj3BbrI2Jc8JsKC0Jpvlwtk2I3OUumckruJNC_iK1n9V065TnB6v6trBDxgv6ecgXwJ0a4-5-BuM3d1aZK5GL9sAXY9AyyljT15i69_sAy3VAw0OXBrob-laEBBqxikz-FBYNAQsS7upZC8O7A3CxWZEVV3bSXWsV-cK7x0Y5eSrU_AmCRDEixLk"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 right-1 bg-secondary text-white p-1.5 rounded-full border-4 border-surface-container-lowest">
                  <Verified size={14} />
                </div>
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                    <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20" type="text" defaultValue="Dr. Julian Sterling" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                    <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20" type="email" defaultValue="j.sterling@sanctuary.edu" />
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-md hover:opacity-90 transition-opacity">Save Profile Changes</button>
          </section>

          {/* Security & Password */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Lock className="text-tertiary" size={20} />
              <h3 className="text-xl font-bold">Security</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Current Password</label>
                  <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3" placeholder="••••••••" type="password" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">New Password</label>
                  <input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3" placeholder="••••••••" type="password" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div>
                  <p className="font-bold text-sm">Two-Factor Authentication</p>
                  <p className="text-xs text-on-surface-variant">Add an extra layer of security to your account.</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <button className="text-primary font-bold text-sm hover:underline">Change Password</button>
            </div>
          </section>
        </div>

        {/* Right Column: Preferences & Accessibility */}
        <div className="md:col-span-5 space-y-6">
          {/* System Preferences */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-8">Display</h3>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                    <Moon size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Dark Mode</p>
                    <p className="text-xs text-on-surface-variant">Reduce eye strain in low light</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-surface-container-highest rounded-full relative cursor-pointer border border-outline-variant/20">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Information Density</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 px-4 bg-surface-container-high rounded-xl text-xs font-bold border-2 border-primary">Comfortable</button>
                  <button className="flex-1 py-3 px-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold text-on-surface-variant">Compact</button>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="bg-surface-container-low border-l-4 border-secondary rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Eye className="text-secondary" size={20} />
              <h3 className="text-xl font-bold">Accessibility</h3>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Font Size</label>
                  <span className="text-xs font-bold text-secondary">Large (115%)</span>
                </div>
                <input className="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary" type="range" defaultValue={75} />
                <div className="flex justify-between text-[10px] font-medium text-on-surface-variant px-1">
                  <span>Aa</span>
                  <span className="text-base">Aa</span>
                  <span className="text-xl font-bold">Aa</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl">
                <div>
                  <p className="font-bold text-sm">High Contrast</p>
                  <p className="text-xs text-on-surface-variant">Sharpen colors and borders</p>
                </div>
                <div className="w-12 h-6 bg-surface-container-highest rounded-full relative cursor-pointer border border-outline-variant/20">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4 p-4 bg-tertiary/5 rounded-xl border border-tertiary/10">
                  <AlertCircle className="text-tertiary" size={20} />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-tertiary uppercase tracking-tighter">Reset All settings</p>
                    <p className="text-[10px] text-on-surface-variant">This will restore original sanctuary defaults.</p>
                  </div>
                  <button className="bg-tertiary text-on-primary px-3 py-2 rounded-lg text-[10px] font-bold">RESET</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
