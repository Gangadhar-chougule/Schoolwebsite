import { TrendingUp, School, Calendar, Plus, Users, Trophy, CreditCard, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export function Dashboard() {
  const stats = [
    { 
      label: "Total Students", 
      value: "1,284", 
      change: "+12% from last term", 
      icon: Users, 
      color: "primary",
      bg: "primary-fixed"
    },
    { 
      label: "Total Teachers", 
      value: "86", 
      change: "100% active status", 
      icon: School, 
      color: "secondary",
      bg: "secondary-fixed"
    },
    { 
      label: "Activities Conducted", 
      value: "42", 
      change: "Science Fair Live", 
      icon: Trophy, 
      color: "tertiary",
      bg: "tertiary-fixed",
      isLarge: true
    },
  ];

  const alerts = [
    { 
      title: "Fee Collection Notice", 
      desc: "Term 2 tuition fees window is now open for all grades.", 
      time: "2 Hours Ago", 
      icon: CreditCard, 
      color: "secondary" 
    },
    { 
      title: "System Maintenance", 
      desc: "Portal will be down this Saturday from 2 AM to 4 AM.", 
      time: "5 Hours Ago", 
      icon: AlertTriangle, 
      color: "tertiary" 
    },
    { 
      title: "Academic Excellence", 
      desc: "Grade 11 students achieved 98% in national mock exams.", 
      time: "Yesterday", 
      icon: Trophy, 
      color: "secondary",
      border: true
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">School Overview</h2>
          <p className="text-on-surface-variant font-medium">Academic Year 2023-2024 • Term 2</p>
        </div>
        <div className="flex gap-3">
          <button className="h-12 px-6 rounded-xl bg-surface-container-high text-on-surface-variant font-semibold text-sm hover:bg-surface-variant transition-colors flex items-center gap-2">
            <Calendar size={18} />
            Schedule
          </button>
          <button className="h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus size={18} />
            New Report
          </button>
        </div>
      </header>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-surface-container-lowest p-6 rounded-3xl shadow-[0px_12px_32px_rgba(26,28,30,0.04)] flex flex-col justify-between relative overflow-hidden group ${stat.isLarge ? 'md:col-span-1 lg:col-span-2' : ''}`}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}/5 rounded-bl-[4rem]`}></div>
            <div className="z-10">
              <div className={`w-12 h-12 rounded-2xl bg-${stat.bg} flex items-center justify-center text-${stat.color} mb-4`}>
                <stat.icon size={24} className="fill-current" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{stat.label}</p>
              <h3 className="text-4xl font-black text-on-surface">{stat.value}</h3>
            </div>
            
            {stat.isLarge ? (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant">Football Tournament</span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant">Art Exhibition</span>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold">{stat.change}</span>
              </div>
            ) : (
              <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-bold">
                <TrendingUp size={16} />
                {stat.change}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Enrollment Trends */}
        <div className="lg:col-span-8 bg-surface-container-low p-8 rounded-[2.5rem]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-xl font-bold text-on-surface">Enrollment Growth</h4>
              <p className="text-sm text-on-surface-variant">Monthly student admissions for 2023</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs font-bold text-on-surface-variant uppercase"><span className="w-2 h-2 rounded-full bg-primary"></span> 2023</span>
              <span className="flex items-center gap-1 text-xs font-bold text-on-surface-variant uppercase ml-2"><span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span> 2022</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[40, 55, 45, 60, 50, 35].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  <div className="w-1/3 bg-primary-fixed-dim rounded-t-lg transition-all" style={{ height: `${h}%` }}></div>
                  <div className="w-1/3 bg-primary rounded-t-lg transition-all shadow-lg shadow-primary/20" style={{ height: `${h + 20}%` }}></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Alerts */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-on-surface">Latest Alerts</h4>
            <button className="text-xs font-bold uppercase text-primary tracking-widest">View All</button>
          </div>
          {alerts.map((alert, i) => (
            <motion.div
              key={alert.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-surface-container-lowest p-5 rounded-3xl shadow-sm flex gap-4 items-start ${alert.border ? 'border-l-4 border-secondary' : ''}`}
            >
              <div className={`w-10 h-10 rounded-full bg-${alert.color}/10 flex items-center justify-center text-${alert.color} shrink-0`}>
                <alert.icon size={20} />
              </div>
              <div>
                <h5 className="text-sm font-bold text-on-surface">{alert.title}</h5>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{alert.desc}</p>
                <span className="text-[10px] font-bold text-outline mt-2 block uppercase">{alert.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Attendance Heatmap */}
      <section className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0px_12px_32px_rgba(26,28,30,0.06)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h4 className="text-2xl font-black text-on-surface tracking-tight">Attendance Pulse</h4>
            <p className="text-on-surface-variant text-sm font-medium">Daily student attendance consistency across grades</p>
          </div>
          <div className="bg-surface-container-high rounded-2xl p-1 flex">
            <button className="px-4 py-2 bg-white rounded-xl shadow-sm text-xs font-bold text-primary">Grades 1-6</button>
            <button className="px-4 py-2 text-xs font-bold text-on-surface-variant">Grades 7-12</button>
          </div>
        </div>
        <div className="grid grid-cols-7 md:grid-cols-12 gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-secondary rounded-lg" 
              style={{ opacity: 0.2 + Math.random() * 0.8 }}
            ></div>
          ))}
        </div>
        <div className="mt-6 flex justify-end items-center gap-4">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Less Consistent</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-secondary opacity-20"></div>
            <div className="w-3 h-3 rounded-sm bg-secondary opacity-50"></div>
            <div className="w-3 h-3 rounded-sm bg-secondary opacity-80"></div>
            <div className="w-3 h-3 rounded-sm bg-secondary opacity-100"></div>
          </div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Highly Consistent</span>
        </div>
      </section>
    </div>
  );
}
