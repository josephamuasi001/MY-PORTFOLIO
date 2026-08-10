import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

import { ArrowUpRight } from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-cta">
          <p className="footer-eyebrow">
            HAVE AN IDEA?
          </p>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <a
            href="mailto:joseph@example.com"
            className="footer-cta-button"
          >
            Start a conversation
          </a>
        </div>

        <div className="footer-main">

          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
            >
              JOSEPH
              <span>AMUASI</span>
            </a>

            <p>
              Student developer, frontend engineer,
              UI/UX designer, and aspiring full-stack
              software engineer.
            </p>
          </div>

          <div className="footer-links">
            <p className="footer-links-label">
              CONNECT
            </p>

            <a href="#">
                <FaGithub size={16} />
                GitHub
                <ArrowUpRight size={14} />
            </a>

            <a href="#">
            <FaLinkedin size={16} />
            LinkedIn
            <ArrowUpRight size={14} />
            </a>



            <a href="mailto:joseph@example.com">
                <FaEnvelope size={16} />
                Email
                <ArrowUpRight size={14} />
            </a>

            
          </div>

          <div className="footer-links">
            <p className="footer-links-label">
              NAVIGATE
            </p>

            <a href="#home">
              Home
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} JOSEPH AMUASI
          </p>

          <p>
            BUILT WITH REACT · FASTAPI · SUPABASE
          </p>

          <a href="#home">
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;