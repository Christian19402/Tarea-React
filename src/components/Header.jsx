import { useState } from "react";
import "../styles/Header.css";
import '@fontsource/inter/600.css';


export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="logo-section">
       
        <span className="logo-text">Mi Empresa</span>
      </div>
      <div className="profile-section">
        <img
          src="./public/Avatar.jpg"
          alt="User"
          className="profile-img"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="menu">
            <button className="menu-btn">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}