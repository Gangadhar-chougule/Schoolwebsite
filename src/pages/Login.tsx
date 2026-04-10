import { Link } from "react-router-dom";
import { ArrowRight, Lock, User, School } from "lucide-react";
import { motion } from "motion/react";

export function Login() {
  return (
    <div className="min-h-screen flex bg-surface overflow-hidden">
      {/* Left: Visual/Branding Side */}
      <div className="hidden lg:flex lg:w-1/2 editorial-gradient p-16 flex-col justify-between relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-xl">
              <School size={28} />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tighter">Sanctuary SMS</h1>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-6xl font-black text-white leading-tight tracking-tighter mb-6">Empowering the <br />Next Generation.</h2>
            <p className="text-white/80 text-xl max-w-md leading-relaxed">A prestigious, high-end School Management System designed with student dignity and educator efficiency at its core.</p>
          </motion.div>
        </div>
        <div className="z-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-white/20 backdrop-blur-md"></div>
            ))}
          </div>
          <p className="text-white/60 text-sm font-medium">Trusted by 2,400+ educators worldwide</p>
        </div>
      </div>

      {/* Right: Login Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-black text-on-surface tracking-tight mb-3">Welcome Back</h3>
            <p className="text-on-surface-variant font-medium">Please enter your credentials to access the portal.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Account ID / Email</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 transition-all" 
                  placeholder="e.g. julian.s@sanctuary.edu" 
                  type="text" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
                <button className="text-[10px] font-bold uppercase text-primary tracking-widest hover:underline">Forgot Password?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 transition-all" 
                  placeholder="••••••••••••" 
                  type="password" 
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <input className="w-5 h-5 rounded-lg border-outline-variant/30 text-primary focus:ring-primary/20" type="checkbox" id="remember" />
              <label className="text-sm font-medium text-on-surface-variant cursor-pointer" htmlFor="remember">Keep me logged in for 30 days</label>
            </div>

            <Link to="/">
              <button className="w-full h-16 bg-on-surface text-surface rounded-2xl font-black text-lg shadow-xl shadow-on-surface/10 hover:bg-primary transition-all flex items-center justify-center gap-3 group mt-4">
                Sign In to Portal
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </form>

          <div className="text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              Don't have an account yet? 
              <Link className="text-primary font-bold ml-2 hover:underline" to="/register">Request Access</Link>
            </p>
          </div>

          <div className="pt-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-surface-container-high"></div>
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Security Verified</span>
            <div className="flex-1 h-px bg-surface-container-high"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
