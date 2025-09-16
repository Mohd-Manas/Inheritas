import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import './Header.css'; // external CSS file

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const menuItems = [
    { label: "Home", sectionId: "/" },
    { label: "Wills for Non-Muslims", sectionId: "/wills-non-muslims" },
    { label: "Sharia-Compliant Wills", sectionId: "/sharia-wills" },
    { label: "Services", sectionId: "/services" },
    { label: "About", sectionId: "/about" },
    { label: "Contacts", sectionId: "/contact" },
  ];

  const handleClick = (path) => {
    setActivePath(path);
    navigate(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => handleClick('/')}>
          <img
            src={Logo}
            alt="Inheritas Logo"
            className="logo-img"
          />
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>

        <nav
          aria-label="Primary navigation"
          className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
        >
          {menuItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleClick(sectionId)}
              type="button"
              className={`nav-button${activePath === sectionId ? " active" : ""}`}
              aria-label={`Navigate to ${label}`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
