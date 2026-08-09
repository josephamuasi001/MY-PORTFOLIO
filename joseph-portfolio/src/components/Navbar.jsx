import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          JOSEPH<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="navbar-cta">
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#work" onClick={closeMenu}>
          Work
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#contact" onClick={closeMenu}>
          Let's Talk
          <ArrowUpRight size={18} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;