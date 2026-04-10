import { Search, UserPlus, Edit, Trash2, Mail, ArrowRight, MoreVertical, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function Teachers() {
  const teachers = [
    {
      id: "SM-10442",
      name: "Mark J. Peterson",
      dept: "Mathematics Dept.",
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6MGk5CEFxwNGaZAxLrYBgePqex6zlCSpG0QwMrFaVdXt6be-meodYT940kVLhR0RtNbmWCz2Dd9PN0ErocezEgrgZbGKUWxkLbHEGS15lKDQReQ9JxiLJ1AV3VaOF5d4uDzUgjOYi4edcjmf0SX35_mIsxYkPDyileTuBbPBbo_Bc-iR0QmhwRQW7tyXwCAMXBU56dTFVj1D-XVKbgoHUh8WVCL0p5WnDUUw15xks6snZtx96BLWpRNNMkfjk129Z2AjZzH0bqjOu"
    },
    {
      id: "SM-10291",
      name: "Sarah Chen",
      dept: "Fine Arts Dept.",
      status: "Sabbatical",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsVSDl94rxAXIm4mg9BV_OvBTetLK5vlsNEhdlod4_6DBP4G1EBW8zg5uvQzUrlNrhjXUKWD5ZdEuqY6AJTX6GZGXz4wD1vaFzae6iNp-8E5BkpIxj8kwQQMqTMNufpQjC5ZGdhykcd_oRGr9geFDApg5rcCL1esZzuC4agkvJc4Ah0jTEhDvvmoizcWJ1W3u3C-7TMWKhRcLx7HY0ZpyaImbXwkbKp2y09iflLEQm258wml5oDZ0S_7TAMRc0y4OdAoMQTjF8H5Xo"
    },
    {
      id: "SM-10553",
      name: "Linda Thompson",
      dept: "Humanities Dept.",
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxgUSEob2Nar8-HE8S-0bk0OluajP0xZa51INFFN2WXD95bKXe06SlY7dBr5AHsIDQiMeiHW2X0IWeCo9bWF79JxM90hxe_x39kIs6O77sHJt-o436OcNg0bM45kWa4CXCqWJppbEAbfbNBIYYaANdGocTWkgelerwU39xHT9EPXN6wZPHculgh30AAeW4a1whLHVhRI_ahM3ef2wzUu19vTYVcq9nwPd-k5c3KvoBzVdlmKcI0qwdofpg7kAnHRk4r1oEQVTvy6Bz"
    },
    {
      id: "SM-10884",
      name: "David Wilson",
      dept: "Physical Ed Dept.",
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvhOavgVHQARyzg-B1ZwXzDYoMIHpUznMEJKMRH-cTZBk-Tmvho0SrVtDJ0hj7xHs51nt6yvJcseZhId45i3rc-ydYf8m6aPv_Ml4prYCIGwFAhgSEQNdhIfu7oMraHX_GpBhK4MMjiRmVBWs1zwTNnYb4Rau9vuYLZq4u-ooa559A7pOXo4wBEFYEjBPjyBCN9FRTw4oyrmuVC5sX4Bn12jcdR21uoB5XaP77CcO7Ea2bo15CiH2lLmNkD4GhVvfa97zaQUdG1oTu"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Editorial Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-2">Faculty Directory</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">Managing our educators with the dignity they deserve. Oversee credentials, departments, and active teaching status.</p>
        </div>
        <button className="h-14 px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          <UserPlus size={20} />
          Onboard Teacher
        </button>
      </header>

      {/* Search & Filter Bar */}
      <div className="bg-surface-container-low rounded-xl p-4 flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[280px] relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            className="w-full pl-12 pr-4 h-12 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline text-sm" 
            placeholder="Search by name, department or ID..." 
            type="text"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {["All Departments", "Mathematics", "Humanities", "Active Only"].map((filter) => (
            <button key={filter} className="px-4 h-10 bg-white border border-outline-variant/15 rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant whitespace-nowrap hover:bg-primary-fixed hover:text-primary transition-colors">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Bento Grid / List Hybrid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured Teacher Card */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(26,28,30,0.06)] flex flex-col md:flex-row gap-6 border-l-[6px] border-secondary-fixed">
          <div className="w-full md:w-48 h-64 md:h-full rounded-lg overflow-hidden shrink-0">
            <img 
              alt="Teacher Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl6xnAjk4mHBHuiGqsQkQ8Oe5AFZRxOTWoaUzuEM9sNFrlDv9KWc75VWbGE8ZHvS8r8txGFBcX4PuOhOaeBo-b9WaujlGPvwUWAYA0bvtbjs4-12ZpqDNw_2eZFziV97r1CyEBZ6lGUqGLrdG81Fa4bn3aT3ioEPxktKLKPpYlIbWjJ3il9whMOAU1TUVs89k_nWa1fwn0O0J7BNH5bD8Ni6CQ4WzmaQdDFlnCGoq6LfvXpCph8KTLv-IDZdeaFCfwd6tRNWYOski7"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter mb-2 inline-block">Head of Science</span>
                  <h3 className="text-2xl font-bold text-on-surface">Dr. Elena Rodriguez</h3>
                  <p className="text-on-surface-variant text-sm">Ph.D. in Theoretical Physics, MIT</p>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><Edit size={18} className="text-outline" /></button>
                  <button className="p-2 hover:bg-error-container/20 rounded-full transition-colors"><Trash2 size={18} className="text-error" /></button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="text-[10px] font-bold text-outline uppercase">Active Classes</p>
                  <p className="font-bold text-on-surface">AP Physics, Calc BC</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="text-[10px] font-bold text-outline uppercase">Tenure</p>
                  <p className="font-bold text-on-surface">8 Years</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i+1}00`}></div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed flex items-center justify-center text-[10px] font-bold">+24</div>
              </div>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                View Performance <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Side Metric Card */}
        <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-6 shadow-lg shadow-primary/10 flex flex-col justify-between">
          <div>
            <h4 className="text-on-primary-container font-bold uppercase text-[10px] tracking-widest mb-4">Department Load</h4>
            <p className="text-4xl font-black mb-1">94%</p>
            <p className="text-on-primary/70 text-sm leading-tight">Faculty capacity currently at near peak. 2 positions pending interview.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs">Mathematics</span>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-secondary-fixed"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Physical Ed</span>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-secondary-fixed"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Standard List Entries */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {teachers.map((teacher, i) => (
            <motion.div 
              key={teacher.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-surface-container-lowest rounded-xl p-5 hover:shadow-md transition-shadow group ${teacher.status === 'Sabbatical' ? 'border-l-[6px] border-tertiary' : ''}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-variant shrink-0">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface">{teacher.name}</h4>
                  <p className="text-xs text-on-surface-variant">{teacher.dept}</p>
                </div>
                <div className="relative">
                  <MoreVertical className="text-outline cursor-pointer group-hover:text-primary" size={20} />
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-outline">Staff ID:</span>
                  <span className="font-medium">{teacher.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-outline">Status:</span>
                  <span className={`${teacher.status === 'Active' ? 'text-secondary' : 'text-tertiary'} font-bold flex items-center gap-1`}>
                    <span className={`w-2 h-2 rounded-full ${teacher.status === 'Active' ? 'bg-secondary' : 'bg-tertiary'}`}></span> 
                    {teacher.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 h-10 bg-surface-container-high rounded-lg text-xs font-bold hover:bg-primary-fixed transition-colors">Details</button>
                <button className="w-10 h-10 border border-outline-variant/20 rounded-lg flex items-center justify-center text-outline hover:text-blue-600 transition-colors">
                  {teacher.status === 'Sabbatical' ? <Calendar size={18} /> : <Mail size={18} />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
