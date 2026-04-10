import { Filter, Upload, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export function Activities() {
  const categories = ["All Activities", "Sports", "Art & Culture", "STEM Learning", "Community"];
  
  const gallery = [
    {
      title: "Discovery Day 2024",
      desc: "Our annual science fair showcasing 150+ innovative projects from the next generation of engineers and scientists.",
      tag: "STEM Spotlight",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUI4H5T3nmAwC5fInIYOLIig-h3ScJh834w6kqe9MDEeEdq_HCeT4uJlDHuoSpi61SkBmWSNPFzxTgfISx93D_Pp1BVlUz5fsvnNHcKNixLLOOxHZKMsRXOccQchglk08-lrkTLc4PgfnVJ5nIgqg9fmmEC1fyDq-haKhrgtY-TIN65h7TYNagnRK6WHc2ZB5RSvr12eIBI-LpZWbZS_PR23kLCADvhwIB_QlKr-jG-1z5ZR_oj6J7pUFIW-ZTNhp-Gf2Dz9NBaR_m",
      isLarge: true,
      color: "secondary"
    },
    {
      title: "Championship Finals",
      tag: "Sports",
      time: "2 days ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgt6NoV-bDTZ9oZgA3zu5zIRj6wXlPWr4NOKZuzXev7O4pnb-z_xuaaqPsFLzI4R8pmyvhzDlCEIac_rkKUjgxCLvVQaDsDXb0w6j2TqVql6zSpR0R8EqBMGqiycoWn5LuKsVoQ0tDWgZq3XnVlvsl2CWVDZ3uLpSzr6Jhk9eh53CSZ-yATqmD59wTKtB7Nv_r1NILqWepKczYKIgioL7z3NunoGUBzmG4TEhuqJJ0sJamvZva4TcP13qESlGrRCFv5CI4MX-nCz4W",
      color: "primary"
    },
    {
      title: "Urban Canvas Project",
      tag: "Art",
      time: "Last week",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAWM4NX6jgcCqex5E5Qe-yfXH3Hji6MwBgw9h2uvWzg8NRybynSluhm2opvFpfkCJ7vdc3CY_SN5T2mSX-zmIa9X6Pz434ic9Ph6dVG6PoZ3l3oQct7b2BGVJJg4v1lncHu5bzRSDAOCprL7e9fXVGkIFRJw166tJ-f2HMTx122UpBJI78Vu2XPxJOxPBzeHzKzhoMkkg9bgfyHyZokI4QFpwpeB4PsCjwtBseiPSQIWC0rkjIvFLlv_sCrrzljfc_IsgBTlrzBrVD",
      color: "tertiary"
    },
    {
      title: "Debate Society Open",
      tag: "Learning",
      time: "3 days ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA504owWiQwQJIu7zQYHhTQte3cUPJJ7rnUjfzP2SQO5uc5Xy4N5031rNe2mSg5_i-UvheGyEj_ljOhpX3zLb82JDk_kSHyi71Cl3__tK6QaxQGScFPH4x3iR-YsWy5fSgo97p2Oy6TlXVxKeYhudssbbc8BAN4TjgkzkbnLlWUSgNTlh847EI1y9_-zY9PSMCBS_vM8_FEnV_vEEyWM9PW3_7xxqWMDhORz7ZZPOnNNZ4zXDgFQr6ca1HpkErTN5aPznrS3_XlslHW",
      color: "secondary"
    },
    {
      title: "Winter Symphony",
      tag: "Culture",
      time: "Yesterday",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCBkBH_IEnZWdijCMBzWjDL42YeKEs3DXszWS-KZ8VF5LJu8PTvKoU9QpByWdOm6EBU6mTpeUH3sOfWf7F2psn29sg78jbherrL3NhuIUsb0XZAOxN3oQEB_CdoWSp9owGBISYunOBaiO6erM35TBsm7TevRhPykpJtkfUA9pdmUkCtBMHo8sQt-thWddSDxlvcL5ancz_6kmVswm9AZrw3FALeKCONh-lt2GgLMxlkjmWsSxUOqX6W3tEFYiV0Fkn0Rucwxpb63H8",
      color: "tertiary"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section & Filters */}
      <header>
        <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Capturing Moments of <span className="text-primary">Growth</span></h2>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Explore the vibrant life of Sanctuary High through our curated gallery of student achievement, creative expression, and athletic spirit.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button 
              key={cat} 
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all",
                i === 0 
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105" 
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant"
              )}
            >
              {i === 0 && <Filter size={16} />}
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Bento Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
        {gallery.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500",
              item.isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
            )}
          >
            {item.isLarge ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className={`inline-block px-3 py-1 bg-${item.color} text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-md mb-3`}>{item.tag}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </>
            ) : (
              <>
                <img 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold uppercase text-${item.color} tracking-widest`}>{item.tag}</span>
                    <span className="text-xs text-on-surface-variant">{item.time}</span>
                  </div>
                  <h4 className="font-bold text-on-surface">{item.title}</h4>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Secondary Grid Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <div className="bg-primary-fixed p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen size={120} />
            </div>
            <h3 className="text-3xl font-black text-on-primary-fixed mb-4 leading-tight">Share Your Journey</h3>
            <p className="text-on-primary-fixed-variant mb-8 text-lg opacity-90 leading-relaxed">Are you a student or teacher with an inspiring story or photo to share with the Sanctuary community? Submit your media to our editorial team.</p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 flex items-center gap-3 hover:-translate-y-1 transition-all">
              Upload Photos <Upload size={20} />
            </button>
          </div>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-variant">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDb-UndWZkMeYx56fAIXRzg0pDMye6lRpKh4DF5Eh-ZFTiuZobP9tT6y01PaoBsTm81GOrlUju6AQ7L3ucQpIs2m-iTrGh2drTzFA_7fc4fvXv0r3YDFefSHTQqAKPMTd50sQsw3BwWDiO3SB8PpImzWtTVz-_jQinRu_g0a7F5OCZ9-Gev-6ESTJO7W6UZ0Y3iN3JW-LTjY-w7Rf5d04yAIQ0JuVT-kO85MLuV4CcXI4ey92JVdMkjLZ2Ef8fGJKdY6s_5MyDRoA" 
              alt="Garden project"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-variant mt-8">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc5HhYzmZdPClxneoISdthp-wubQ3d5UF9BPXETFRi6rYbs9orCyvVDb2HP-oOjXpbIjY4fJ5H-OGFh1DTT_WmbkR3-oqLUQ51sCEfqgcXSxe4o9MEObt5SChLUsOxxxDVCOuMDFKF_2XSu_z12FMxHSEcWNpPs5i7vIwF6lMbDIdOd_P5HowRJ9u4rCx8JpQeObfltjeNCkNjCkDN-4csRaxe66srSSSEttbGT_QB8OAuEw_65qiOlTdU7BksI7WmrH85eaCC3K9J" 
              alt="Team building"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
