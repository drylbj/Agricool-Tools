import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Cloud,
  FileText,
  Grid2x2,
  Leaf,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { to: "/admin", label: "Overview", icon: Grid2x2, end: true },
  { to: "/admin/users", label: "Manage Users", icon: User },
  { to: "/admin/crop-records", label: "Crop Records", icon: Leaf },
  { to: "/admin/information-hub", label: "Information Hub", icon: BookOpen },
  { to: "/admin/weather-logs", label: "Weather & SMS Logs", icon: Cloud },
  {
    to: "/admin/assistant-logs",
    label: "AI Assistant Logs",
    icon: MessageSquare,
  },
  { to: "/admin/reports", label: "Reports", icon: FileText },
];

const titleByPath: Record<string, string> = {
  "/admin": "Admin Overview",
  "/admin/users": "Manage Users",
  "/admin/crop-records": "Crop Records",
  "/admin/information-hub": "Information Hub",
  "/admin/weather-logs": "Weather & SMS Logs",
  "/admin/assistant-logs": "AI Assistant Logs",
  "/admin/reports": "Reports",
};

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const title = titleByPath[location.pathname] ?? "Admin Overview";

  return (
    <div className="app-shell">
      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-brand admin-brand">
          <button
            className="icon-button mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
          <div>
            <div className="admin-brand-row">
              <Leaf size={22} />
              <span>AgriCool-Tools</span>
            </div>
            <span className="admin-badge">ADMIN</span>
          </div>
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
              <Icon size={20} />
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
          <span className="topbar-title">{title}</span>
          <div className="topbar-actions">
            <div className="search-box admin-search">
              <Search size={19} />
              <input placeholder="Search user, crops..." />
            </div>
            <div className="admin-avatar">
              {(user?.name ?? "Admin").slice(0, 1).toUpperCase()}
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
