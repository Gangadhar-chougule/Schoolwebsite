import { Link } from "react-router-dom";
import { ArrowRight, Lock, User, School, Mail, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function Register() {
  return (
    <div className="min-h-screen flex bg-surface overflow-hidden">
      {/* Left: Visual/Branding Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-on-surface p-16 flex-col justify-between relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 gap-4 p-4">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white rounded-sm"></div>
            ))}
          </div>
        </div>
        <div className="z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl">
              <School size={28} />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tighter">Sanctuary SMS</h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-6xl font-black text-white leading-tight tracking-tighter mb-6">Join the <br />Sanctuary Network.</h2>
            <p className="text-white/60 text-xl max-w-md leading-relaxed">Experience a new standard in educational management. Secure, intuitive, and built for excellence.</p>
          </motion.div>
        </div>
        <div className="z-10 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-secondary-fixed" size={24} />
            <p className="text-white font-bold uppercase tracking-widest text-xs">Privacy Guaranteed</p>
          </div>
          <p className="text-white/40 text-xs leading-relaxed">Your data is encrypted with enterprise-grade protocols. We never share student information with third parties.</p>
        </div>
      </div>

      {/* Right: Register Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-black text-on-surface tracking-tight mb-3">Request Access</h3>
            <p className="text-on-surface-variant font-medium">Complete the form below to register your institution.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">First Name</label>
                <input className="w-full h-14 px-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="Julian" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Last Name</label>
                <input className="w-full h-14 px-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="Sterling" type="text" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="j.sterling@sanctuary.edu" type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Institution Name</label>
              <div className="relative group">
                <School className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="Sanctuary High School" type="text" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Create Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="••••••••••••" type="password" />
              </div>
            </div>

            <div className="pt-4">
              <Link to="/login">
                <button className="w-full h-16 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-primary-container transition-all flex items-center justify-center gap-3 group">
                  Submit Request
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </Link>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              Already have an account? 
              <Link className="text-primary font-bold ml-2 hover:underline" to="/login">Sign In</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
