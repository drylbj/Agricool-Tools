import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Bell,
  BookOpen,
  Cloud,
  Grid2x2,
  Leaf,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { to: "/farmer", label: "Dashboard/ Overview", icon: Grid2x2, end: true },
  { to: "/farmer/crop-monitoring", label: "Crop Monitoring", icon: Leaf },
  { to: "/farmer/weather", label: "Weather and SMS", icon: Cloud },
  { to: "/farmer/assistant", label: "AI Assistant Hub", icon: MessageSquare },
  { to: "/farmer/information-hub", label: "Information Hub", icon: BookOpen },
];

const titleByPath: Record<string, string> = {
  "/farmer": "Dashboard/Overview",
  "/farmer/crop-monitoring": "Crop Monitoring",
  "/farmer/weather": "Weather & SMS",
  "/farmer/assistant": "AI Assistant Hub",
  "/farmer/information-hub": "Information Hub",
};

export default function FarmerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const initials = (user?.name ?? "Aleana Bello")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="app-shell">
      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-brand">
          <button
            className="icon-button mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
          <Menu size={27} />
          <span>AgriCool-Tools</span>
        </div>
        <nav>
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Icon size={21} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button
            className="nav-item"
            onClick={() => {
              signOut();
              navigate("/");
            }}
          >
            <LogOut size={20} />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      <div className="app-main">
        <header className="topbar">
          <button
            className="icon-button menu-toggle"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
          <TopbarTitle path={location.pathname} />
          <div className="topbar-actions">
            <div className="search-box">
              <Search size={21} />
              <input placeholder="Search" />
            </div>
            <button className="top-icon" aria-label="Notifications">
              <Bell size={22} />
              <i>3</i>
            </button>
            <button className="top-icon" aria-label="Messages">
              <MessageSquare size={22} />
            </button>
            <button className="top-icon" aria-label="Weather">
              <Cloud size={23} />
            </button>
            <div className="profile">
              <span className="avatar">{initials}</span>
              <span className="profile-copy">
                <b>{user?.name ?? "Aleana Bello"}</b>
                <small>Farm Manager</small>
              </span>
            </div>
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function TopbarTitle({ path }: { path: string }) {
  const title = titleByPath[path] ?? "Dashboard/Overview";
  return <span className="topbar-title">{title}</span>;
}
