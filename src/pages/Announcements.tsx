import { Plus, ArrowRight, BarChart3, AlertCircle, Verified, Brain } from "lucide-react";
import { motion } from "motion/react";

export function Announcements() {
  const featured = {
    title: "Annual Sanctuary Foundation Gala: A Night of Excellence",
    desc: "Join us for our signature event of the year. We're celebrating student achievements and raising funds for the new sustainable library wing. Formal attire expected.",
    date: "Oct 24, 2023",
    tag: "New Event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSuEf7wl4n7G2vDVP-sdfOal0VQjMQ95DQnnSTA-YDi9uTPQd_VYE8IWKb4Kz1RSE5a3_lf-kUNy2pFSk1rhYbHHEf1TM21scpd1NvXSS1iJXwuEss8SMacUCZ1UgjiYUTDtmBxAvNG5bUuPK3Zq8rlx5KDmotgDztdnotifj8-NdrgkFX_ntxPflkw_1yJP6AHMlEb9hFzrz5WdFC9MbnivESNRZOB2Yk1ggLL4WI24ZLkNlusWOlZEwu-bveVIpeQd73lfJF8nYF"
  };

  const notices = [
    {
      title: "Mid-Semester Exam Schedule Revision",
      desc: "Please note that the Mathematics and Physics exams have been rescheduled for the morning session of Nov 5th due to maintenance.",
      date: "Oct 22, 2023",
      tag: "Urgent Notice",
      icon: AlertCircle,
      color: "tertiary"
    },
    {
      title: "Spring 2024 International Scholarships",
      desc: "Applications are now open for the Sanctuary Global Excellence program. Eligibility criteria available on the student portal.",
      date: "Oct 20, 2023",
      tag: "Admissions",
      icon: Verified,
      color: "secondary"
    },
    {
      title: "Mental Health Awareness Workshop",
      desc: "A student-led workshop focusing on mindful learning techniques and stress management during finals week.",
      date: "Oct 18, 2023",
      tag: "Campus Life",
      icon: Brain,
      color: "primary"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Official Board</span>
          <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Latest Announcements</h2>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">Stay updated with the latest news, events, and policy changes from Sanctuary High. Curated information for the academic community.</p>
        </div>
        <button className="h-12 px-8 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
          <Plus size={20} />
          Add Announcement
        </button>
      </div>

      {/* Bento Grid Board */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured Announcement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-3xl shadow-[0px_12px_32px_rgba(26,28,30,0.06)] flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img 
              src={featured.image} 
              alt={featured.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase rounded-full">{featured.tag}</span>
                <span className="text-xs text-outline font-medium uppercase tracking-wider">{featured.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface tracking-tight mb-4 group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="text-on-surface-variant line-clamp-3 leading-relaxed mb-6">{featured.desc}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1, 2].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i+2}00`}></div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-outline">+12</div>
              </div>
              <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                Read More 
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Side Metric Card */}
        <div className="md:col-span-4 bg-primary-fixed p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <BarChart3 className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold text-on-primary-fixed tracking-tight leading-tight">Board Activity High This Week</h3>
          </div>
          <div>
            <div className="text-4xl font-black text-primary tracking-tighter mb-1">12</div>
            <div className="text-on-primary-fixed-variant font-medium text-sm">New notices posted in the last 48 hours. Keep up with your schedule!</div>
          </div>
        </div>

        {/* Standard Cards */}
        {notices.map((notice, i) => (
          <motion.div 
            key={notice.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="md:col-span-4 bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_12px_32px_rgba(26,28,30,0.06)] hover:bg-surface-container-low transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-outline font-bold uppercase tracking-widest">{notice.tag}</span>
              <notice.icon className={`text-${notice.color}`} size={24} />
            </div>
            <h4 className="text-xl font-bold text-on-surface mb-3 tracking-tight leading-snug">{notice.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{notice.desc}</p>
            <div className="flex items-center gap-3 pt-6 border-t border-surface-variant/30">
              <span className="text-[10px] text-outline font-bold uppercase">{notice.date}</span>
            </div>
          </motion.div>
        ))}

        {/* Policy Snippet */}
        <div className="md:col-span-12 flex flex-col md:flex-row items-center gap-8 bg-surface-container-high rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h3 className="text-3xl font-black text-on-surface tracking-tighter mb-4">Updated Privacy Policy</h3>
            <p className="text-on-surface-variant max-w-xl leading-relaxed mb-8">We've updated our data handling protocols to ensure better security for our student information. Click below to review the changes to our end-to-end encryption standards.</p>
            <button className="bg-on-surface text-surface py-3 px-8 rounded-full font-bold hover:bg-primary transition-colors">Download PDF</button>
          </div>
          <div className="flex-1 w-full md:w-1/2 flex justify-end">
            <div className="relative w-full max-w-sm h-48 bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-2xl rotate-3">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="h-2 w-3/4 bg-slate-200 rounded mb-4"></div>
              <div className="h-2 w-full bg-slate-100 rounded mb-4"></div>
              <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-container/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
