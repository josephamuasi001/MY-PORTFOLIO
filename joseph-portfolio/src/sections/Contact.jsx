import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Label */}
        <div className="section-label contact-label">
          <span>06</span>
          CONTACT
        </div>


        {/* Main Contact */}
        <div className="contact-main">

          <div className="contact-heading">

            <p className="contact-eyebrow">
              HAVE A PROJECT OR OPPORTUNITY?
            </p>

            <h2>
              Let's build
              <br />
              <span>something great.</span>
            </h2>

          </div>


          <div className="contact-description">

            <p>
              Whether you have a project in mind, a freelance
              opportunity, or you're looking for a developer
              to join your team, I'd love to hear from you.
            </p>

            <a
              href="mailto:jamuasi001@st.ug.edu.gh"
              className="contact-email"
            >
              <Mail size={18} />
              joseph@example.com
            </a>

          </div>

        </div>


        {/* Contact Actions */}
        <div className="contact-actions">

          <a
            href="mailto:jamuasi001@st.ug.edu.gh"
            className="contact-primary"
          >
            Start a conversation
            <ArrowUpRight size={20} />
          </a>


          <div className="contact-socials">

            <a
              href="https://github.com/josephamuasi001"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Availability */}
        <div className="contact-availability">

          <div className="availability-status">
            <span></span>
            AVAILABLE FOR SELECTED PROJECTS
          </div>

          <p>
            Based in Ghana · Open to remote opportunities
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;