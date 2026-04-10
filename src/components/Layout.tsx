import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  LayoutDashboard, 
  Accessibility, 
  School, 
  Megaphone, 
  BarChart3, 
  Settings as SettingsIcon,
  Home,
  BarChart,
  MoreHorizontal,
  Bell,
  Headphones
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Students", path: "/students", icon: Accessibility },
    { name: "Teachers", path: "/teachers", icon: School },
    { name: "Announcements", path: "/announcements", icon: Megaphone },
    { name: "Progress", path: "/progress/leo", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: SettingsIcon },
  ];

  const bottomNavItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Students", path: "/students", icon: Accessibility },
    { name: "Notice", path: "/announcements", icon: Bell },
    { name: "Reports", path: "/progress/leo", icon: BarChart },
    { name: "More", path: "/settings", icon: MoreHorizontal },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0px_12px_32px_rgba(26,28,30,0.06)] flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <Menu className="text-primary cursor-pointer" size={24} />
          <h1 className="text-primary font-black tracking-tighter text-lg">Sanctuary SMS</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-6">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors",
                  location.pathname === item.path ? "text-primary" : "text-outline hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border-2 border-primary-fixed">
            <img 
              alt="Admin Profile" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyP9Yw3OFDdODYlN5cm88FtSx-l-IkBtIF6YO6_mZMAHh6Tb8Sq6CKiDIChvUfWneXm7x9mUHngHSffTE54oUZ8eJ63ZO59bVCXj1ttHM3H4k63UyHzxfK6vQ35q_ewZxndJJ0yZOEgZKH4uz8AuQZfOShiIZGJcdEM6JrHBB9o5Or3yLNpLhVkXm02lz6pLH8TPevEnIiit31rbhkaNVyOtTYbg8hFGNIshQjbMw6OpZfumlbLmDPO0ZrkuFRdYjFzZw9QsgJy0s9"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* NavigationDrawer (Desktop Only) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen py-8 w-72 bg-surface-container-low z-40 pt-20">
        <div className="px-6 mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
            <School size={24} />
          </div>
          <div>
            <p className="font-bold text-sm uppercase tracking-wider text-primary">Principal Office</p>
            <p className="text-xs text-outline">Sanctuary High</p>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-r-full transition-all duration-200 group",
                location.pathname === item.path 
                  ? "bg-white text-primary shadow-sm" 
                  : "text-outline hover:translate-x-1 hover:text-primary"
              )}
            >
              <item.icon size={20} className={cn(location.pathname === item.path && "fill-current")} />
              <span className="text-sm uppercase tracking-wider font-semibold">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl rounded-t-3xl shadow-[0_-8px_24px_rgba(0,0,0,0.05)] border-t border-surface-container-high z-50">
        {bottomNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-transform active:scale-95",
              location.pathname === item.path ? "bg-primary-fixed text-primary rounded-2xl px-3 py-1" : "text-outline"
            )}
          >
            <item.icon size={20} className={cn(location.pathname === item.path && "fill-current")} />
            <span className="text-[10px] font-bold uppercase mt-1">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
