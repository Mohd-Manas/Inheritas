import React from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png'

const UAEFlag = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg";


const menuItems = [
  { label: "Introduction", sectionId: "introduction" },
  { label: "Why you Need a Will", sectionId: "needs" },
  { label: "Sharia Law", sectionId: "sharia-law" },
  { label: "How Can I help", sectionId: "help" },
  { label: "Registration process", sectionId: "registration" },
  { label: "Costs", sectionId: "costs" },
  { label: "Contact", sectionId: "contact" },
];

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Inheritas" className="header__logo" />

        <nav className="header__nav">
          {menuItems.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              className="header__nav-button"
              onClick={() => scrollToSection(sectionId)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="header__contact">
          <img src={UAEFlag} alt="UAE Flag" className="header__flag" />
          <span>UAE</span>
          <span className="header__phone">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#fff" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.21.9 4.21 2.35 5.62l-3.15 3.15c-.2.2-.26.51-.13.77 1.02 1.92 3.02 3.12 5.38 3.12 3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 7.5 12 7.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
            +971 800 53425
          </span>
          <button type="button" className="header__signin-button">Sign In</button>
        </div>
      </header>

      <div className="header-spacer" />
    </>
  );
};

export default Header;
