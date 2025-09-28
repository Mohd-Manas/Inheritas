import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.png'; // Your logo image path
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    setIsMobileMenuOpen(false);
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

  // Close the drawer when clicking outside on mobile
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnOutside = (e) => {
      if (!e.target.closest('.mobile-drawer') && !e.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', closeOnOutside);
    return () => document.removeEventListener('mousedown', closeOnOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => handleClick('/')}>
          <img src={Logo} alt="Inheritas Logo" className="logo-img" />
        </div>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-icon${isMobileMenuOpen ? " open" : ""}`} />
        </button>
        <nav className="desktop-nav-menu" aria-label="Primary navigation">
          {menuItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleClick(sectionId)}
              type="button"
              className={`header__nav-button${activePath === sectionId ? " active" : ""}`}
              aria-label={`Navigate to ${label}`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
      {/* Mobile Drawer */}
      <div className={`mobile-drawer${isMobileMenuOpen ? ' open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {menuItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleClick(sectionId)}
              type="button"
              className={`header__nav-button${activePath === sectionId ? " active" : ""}`}
              aria-label={`Navigate to ${label}`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
      {/* Drawer background overlay */}
      {isMobileMenuOpen && <div className="drawer-overlay" />}
    </header>
  );
};

export default Header;
