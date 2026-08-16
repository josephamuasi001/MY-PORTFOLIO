import {
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

import { useState } from "react";

import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
  setTheme(
    theme === "dark"
      ? "light"
      : "dark"
  );
};

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          JOSEPH<span className="navbar-name"> AMUASI </span>
        </a>


        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <a href="#projects">
            Work
          </a>

          <a href="#about">
            About
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#skills">
            Skills
          </a>

        </nav>


        {/* Desktop CTA */}
        <a
          href="#contact"
          className="navbar-cta"
        >
          Let's Talk

          <ArrowUpRight size={16} />
        </a>


        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Sun size={17} />
          ) : (
            <Moon size={17} />
          )}
        </button>


        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <a
          href="#projects"
          onClick={closeMenu}
        >
          Work
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#services"
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="#skills"
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Let's Talk

          <ArrowUpRight size={18} />
        </a>

      </div>

    </header>
  );
}

export default Navbar;