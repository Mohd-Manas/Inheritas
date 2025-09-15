import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
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

  return (
    <>
      <header
        style={{
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          backgroundColor: "#e0efff",  // Use light Background Blue Gradient start
          position: "sticky",
          top: 0,
          zIndex: 1000,
          padding: "0.5rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {/* Logo */}
          <div style={{ flex: "0 0 auto", cursor: "pointer" }} onClick={() => handleClick('/')}>
            <img
              src={Logo}
              alt="Inheritas Logo"
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
                userSelect: "none",
                filter: "drop-shadow(0 0 2px #2563EB)", // subtle Accent Blue drop shadow
              }}
            />
          </div>

          {/* Navigation */}
          <nav
            aria-label="Primary navigation"
            style={{
              flex: "1 1 auto",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#1E73BE",         // Primary Blue for nav text
              flexWrap: "wrap",
            }}
          >
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
      </header>
      <div style={{ height: "1.5rem", background: "linear-gradient(90deg, #e0efff 0%, #c1d8f7 100%)" }} /> {/* subtle gradient spacer */}
    </>
  );
};

export default Header;
