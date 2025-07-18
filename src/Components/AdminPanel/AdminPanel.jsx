import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";

const AdminPanel = () => {
  const navItems = [
    { name: "Carousel", path: "/admin/carousel" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Gallery", path: "/admin/gallery" },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin-login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="h-screen text-white flex font-sans">
      {/* Mobile Hamburger */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white bg-slate-800 p-2 rounded"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-2xl border-r border-slate-700 flex flex-col justify-between transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <Link
            to="/"
            className="text-base text-slate-300 hover:text-white transition flex items-center gap-2 mb-8"
          >
            ← Back to Home
          </Link>

          <h2 className="text-2xl font-semibold mb-6 text-white">Admin Panel</h2>

          <nav className="space-y-2">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-slate-700 text-white font-semibold shadow-md"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-3 px-4 py-2 justify-center rounded-md bg-white text-slate-600 font-bold hover:bg-gray-300 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 h-screen overflow-auto p-8 bg-gradient-to-b from-slate-800 to-slate-700 scroll-smooth touch-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;