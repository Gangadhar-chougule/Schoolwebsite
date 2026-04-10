import { Search, UserPlus, Edit, Trash2, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { motion } from "motion/react";

export function Students() {
  const students = [
    {
      id: "SH-2024-089",
      name: "Julian Sterling",
      email: "julian.s@sanctuary.edu",
      grade: "11th Grade • A",
      gpa: "3.9",
      progress: 92,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv__gyRdNgPdAhm49VGQCkWNwG6z2IuSQnvDMC2-B6sq4l_a6Xo-msF0_eqpi3GVKeWQhabkzoIQ2YueHDdilgm_zP5NLuMpC4oIzVVZxbidDsENj2Guj2QPy_rByCVOM4GqNFrOMYLXIK7p_1uCmPo0AYi4LCcxxVjriJGesXjHJb3Fc0k6v4x5TJZeDT_sVFfh95Co0-uqgnqfzj6Vw_Av2KeH04lB-Zeu-cN6oMRhVs38pLSs_fJG8mn8vKfITQy4KpFPX9qF-o"
    },
    {
      id: "SH-2024-112",
      name: "Maya Vance",
      email: "m.vance@sanctuary.edu",
      grade: "10th Grade • C",
      gpa: "3.4",
      progress: 78,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2oretljA_Y9bIhqZlnf-U49UZfRcBcOA81nEyRH_EfkJKO1ZF3lfSQmBTQqPbNkWaUV1wMZiQC_iLEht9epFNCsDRXNUGGvhySfqot1FgFD0ERx-FOoe6aSKWSrtxpswSxInt4gFwgLypRJ4DFYn41LxeVp6NWrlGmiJo6ePws9F_byL6BadWOh1DjZRd65DBDFa4fDXilUCwLJsrW2zqzINd0IXPdgrX1eT5evhiI8WrXE4woG2Ngue3hU34kd0Z6H1kiiOWpm6p"
    },
    {
      id: "SH-2024-045",
      name: "Leo Alistair",
      email: "leo.a@sanctuary.edu",
      grade: "12th Grade • B",
      gpa: "2.1",
      progress: 45,
      status: "On Leave",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACcuPLTLbByy8bOyLQBETbK5vmF3ekRbFm5366hQxaIgobDM_XtEgCc9CLZdkGJLjTifLeYyF1Y48Vn9iYwHOqxbjnmEYOtiic81I_fmyw8MyUn_6rUc5po8jSEKP0NYvDSqArl_N2kgqP2XbYJ7MKBrg8PoNQcxXSNgoxOzBtq1WxqnEohgEgoRd__NVzO1vn5YxuQItbkZafFzK7e5sZ7S2FJFcBibjzdhQJhL8yluuQ4q9np-Qc86tqi-vYNgj-CwW1Xx5RTe5l"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Student Registry</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">Manage enrollment, track academic standing, and update records for the 2024 academic year.</p>
        </div>
        <button className="h-14 px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95 whitespace-nowrap">
          <UserPlus size={20} />
          Add New Student
        </button>
      </div>

      {/* Bento Search & Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 bg-surface-container-low rounded-2xl">
        <div className="md:col-span-2 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-0 text-on-surface placeholder:text-outline shadow-sm" 
            placeholder="Search by name, ID, or email..." 
            type="text"
          />
        </div>
        <div className="relative">
          <select className="w-full h-14 px-4 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary appearance-none text-on-surface shadow-sm">
            <option>All Grades</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline rotate-90" size={20} />
        </div>
        <div className="relative">
          <select className="w-full h-14 px-4 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary appearance-none text-on-surface shadow-sm">
            <option>Status: Active</option>
            <option>Status: Graduated</option>
            <option>Status: On Leave</option>
          </select>
          <Filter className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline" size={20} />
        </div>
      </div>

      {/* Student Data Canvas */}
      <div className="bg-surface-container-lowest rounded-[2rem] shadow-[0px_12px_32px_rgba(26,28,30,0.06)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Student</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">ID Number</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Grade / Section</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Academic Standing</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high/50">
              {students.map((student, i) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-surface-bright transition-colors group"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          className="w-12 h-12 rounded-xl object-cover" 
                          src={student.image} 
                          alt={student.name}
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${student.status === 'Active' ? 'bg-secondary' : 'bg-tertiary'}`}></div>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{student.name}</p>
                        <p className="text-sm text-on-surface-variant">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-mono text-sm text-on-surface-variant">{student.id}</td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-lg text-sm font-bold">{student.grade}</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${student.progress > 50 ? 'bg-secondary' : 'bg-tertiary'}`} 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-bold ${student.progress > 50 ? 'text-secondary' : 'text-tertiary'}`}>{student.gpa} GPA</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 text-primary transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-error/10 text-error transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 bg-surface-container-low flex items-center justify-between">
          <span className="text-sm text-on-surface-variant font-medium">Showing 1-10 of 428 students</span>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-white transition-all shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold shadow-md shadow-primary/20">1</button>
            <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-white transition-all shadow-sm">2</button>
            <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-white transition-all shadow-sm">3</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-white transition-all shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
