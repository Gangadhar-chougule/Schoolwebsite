import { Download, Mail, ChevronRight, Trophy, Clock, Variable, Microscope, FileText, FlaskConical } from "lucide-react";
import { motion } from "motion/react";

export function Progress() {
  const subjects = [
    {
      name: "Advanced Mathematics",
      desc: "Calculus & Linear Algebra",
      score: "95/100",
      tag: "Exceptional",
      progress: 88,
      icon: Variable,
      color: "secondary",
      homework: "12/12",
      quizzes: "98% Avg"
    },
    {
      name: "Molecular Biology",
      desc: "Genetics & Evolution",
      score: "82/100",
      tag: "Good Standing",
      progress: 64,
      icon: Microscope,
      color: "primary",
      homework: "8/10",
      quizzes: "76% Avg"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-sm text-outline mb-2">
            <span>Students</span>
            <ChevronRight size={14} />
            <span className="text-primary font-semibold">Leo Richardson</span>
          </nav>
          <h1 className="text-4xl font-black tracking-tight text-on-surface mb-2">Academic Progress Analysis</h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">A comprehensive overview of performance metrics, behavioral trends, and subject-wise mastery for the current semester.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-white border border-outline-variant/15 text-on-surface rounded-xl font-semibold shadow-sm hover:bg-surface-container-high transition-colors flex items-center gap-2">
            <Download size={20} />
            Export Report
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2">
            <Mail size={20} />
            Parent Portal
          </button>
        </div>
      </header>

      {/* Bento Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Trend Chart */}
        <section className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-8 shadow-[0px_12px_32px_rgba(26,28,30,0.06)] overflow-hidden relative group">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Performance Over Time</h2>
              <p className="text-sm text-outline">Cumulative GPA across 6 months</p>
            </div>
            <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
              <button className="px-3 py-1 text-xs font-bold uppercase rounded-md bg-white shadow-sm text-primary">Monthly</button>
              <button className="px-3 py-1 text-xs font-bold uppercase text-outline">Weekly</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 relative">
            {[45, 60, 55, 85, 70, 90].map((h, i) => (
              <div key={i} className={`flex-1 ${i === 4 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary-fixed hover:bg-primary'} transition-colors rounded-t-xl`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-[10px] font-bold uppercase tracking-widest text-outline px-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => <span key={m}>{m}</span>)}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-secondary to-secondary-container p-8 rounded-3xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <Trophy size={32} />
              <span className="text-xs font-bold uppercase bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Top 5%</span>
            </div>
            <p className="text-secondary-fixed/80 text-sm font-semibold uppercase tracking-wider mb-1">Current Standing</p>
            <h3 className="text-5xl font-black tracking-tighter mb-4">A+</h3>
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[92%]"></div>
            </div>
            <p className="mt-3 text-xs opacity-80">92/100 points until High Distinction</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_12px_32px_rgba(26,28,30,0.06)] border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold">Attendance</h4>
                <p className="text-xs text-outline">Last 30 days</p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-on-surface">98.4%</span>
              <span className="text-secondary text-xs font-bold mb-1 flex items-center">
                ↑ 2%
              </span>
            </div>
          </div>
        </section>

        {/* Subject Breakdown */}
        <section className="md:col-span-12 bg-surface-container-low/50 rounded-3xl p-8 border border-white/40">
          <h2 className="text-2xl font-black tracking-tight mb-8">Subject Mastery</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {subjects.map((subject, i) => (
              <motion.div 
                key={subject.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-${subject.color} flex flex-col gap-6`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center">
                      <subject.icon className="text-on-surface-variant" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">{subject.name}</h3>
                      <p className="text-xs text-outline uppercase tracking-widest">{subject.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-on-surface">{subject.score}</p>
                    <p className={`text-[10px] font-bold text-${subject.color} uppercase`}>{subject.tag}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2 uppercase text-outline">
                      <span>Course Completion</span>
                      <span className="text-on-surface">{subject.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-low rounded-full">
                      <div className={`h-full bg-${subject.color === 'secondary' ? 'primary' : 'secondary'} rounded-full`} style={{ width: `${subject.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-surface-container-low p-3 rounded-xl">
                      <p className="text-[10px] font-bold text-outline uppercase mb-1">Homework</p>
                      <p className="font-bold">{subject.homework}</p>
                    </div>
                    <div className="flex-1 bg-surface-container-low p-3 rounded-xl">
                      <p className="text-[10px] font-bold text-outline uppercase mb-1">Quizzes</p>
                      <p className="font-bold">{subject.quizzes}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skill Cloud & Recent Assessments */}
        <section className="md:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_12px_32px_rgba(26,28,30,0.06)]">
            <h3 className="text-lg font-bold mb-6">Cognitive Skillset</h3>
            <div className="flex flex-wrap gap-2">
              {['Logic', 'Analysis', 'Creativity', 'Teamwork', 'Critical Thinking', 'Presentation'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-surface-container-low text-on-surface-variant rounded-lg text-xs font-bold uppercase tracking-tighter hover:bg-primary-fixed hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_12px_32px_rgba(26,28,30,0.06)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Recent Assessments</h3>
              <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">View All History</button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Calculus Term Exam", time: "Submitted 2 days ago", score: "98%", icon: FileText },
                { name: "Photosynthesis Lab Report", time: "Graded Oct 24", score: "84%", icon: FlaskConical }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-surface rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
                      <item.icon className="text-outline" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-[10px] text-outline font-medium">{item.time}</p>
                    </div>
                  </div>
                  <span className={`font-black ${i === 0 ? 'text-secondary' : 'text-on-surface'}`}>{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
