import { Headphones, MessageSquare, Book, Search, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Support() {
  const faqs = [
    { q: "How do I reset a student's password?", a: "Navigate to the Student Registry, select the student, and click 'Reset Credentials' in the security tab." },
    { q: "Can I export attendance reports to CSV?", a: "Yes, all reports in the Progress Analysis section have an 'Export' button supporting CSV and PDF formats." },
    { q: "How to add a new faculty member?", a: "Use the 'Onboard Teacher' button in the Faculty Directory. You'll need their staff ID and department details." }
  ];

  return (
    <div className="space-y-10">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">How can we help?</h2>
        <p className="text-on-surface-variant text-lg">Access our comprehensive knowledge base or connect with our dedicated support team for personalized assistance.</p>
        <div className="relative max-w-xl mx-auto mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            className="w-full h-16 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 shadow-sm" 
            placeholder="Search for articles, guides, or troubleshooting..." 
            type="text" 
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Knowledge Base", desc: "Detailed documentation and tutorials.", icon: Book, color: "primary" },
          { title: "Live Chat", desc: "Connect with our support agents.", icon: MessageSquare, color: "secondary" },
          { title: "Direct Call", desc: "Priority support for urgent issues.", icon: Headphones, color: "tertiary" }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className={`w-14 h-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center text-${item.color} mb-6 group-hover:scale-110 transition-transform`}>
              <item.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.desc}</p>
            <span className="text-primary font-bold text-sm flex items-center gap-1">
              Explore <ArrowRight size={14} />
            </span>
          </motion.div>
        ))}
      </div>

      <section className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-bold text-on-surface mb-2">{faq.q}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
