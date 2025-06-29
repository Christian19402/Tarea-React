import { Home, Settings } from "lucide-react";
import "../styles/Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
       <img src="./public/vite.svg" alt="Logo" className="logo-imgS" />
      <h1 className="logo">Mi Empresa</h1>
      <nav className="nav">
        <a href="#" className="nav-link active">
          <Home size={20} /> <span>Dashboard</span>
        </a>
        <a href="#" className="nav-link">
          <Settings size={20} /> <span>Settings</span>
        </a>
      </nav>
    </div>
  );
}