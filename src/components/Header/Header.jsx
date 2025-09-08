import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png';

const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", sectionId: "/" },
    { label: "Wills for Non-Muslims", sectionId: "/wills-non-muslims" },
    { label: "Sharia-Compliant Wills", sectionId: "/sharia-wills" },
    { label: "Services", sectionId: "/services" },
    { label: "About", sectionId: "/about" },
    { label: "Contacts", sectionId: "/contact" },
  ];

  return (
    <>
      <header className="header">
        {/* Logo and other header content should be here */}
          <img src={Logo} alt="Inheritas Logo" className="header__logo" />

        <nav aria-label="Primary navigation">
          {menuItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              className="header__nav-button"
              onClick={() => navigate(sectionId)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Other header content like contact area can go here */}
      </header>
      <div className="header-spacer" />
    </>
  );
};

export default Header;
