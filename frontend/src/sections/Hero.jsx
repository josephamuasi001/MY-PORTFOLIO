import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-main">

          {/* LEFT SIDE */}
          <div className="hero-content">

            {/* Availability */}
            <div className="hero-eyebrow">
              <span className="status-dot"></span>

              AVAILABLE FOR FREELANCE • 2026
            </div>


            {/* Main Heading */}
            <h1 className="hero-title">
              I DESIGN.
              <br />

              I BUILD.
              <br />

              <span>I CREATE.</span>
            </h1>


            {/* Bottom Content */}
            <div className="hero-bottom">

              <div className="hero-intro">

                <p className="hero-description">
                  I'm Joseph AMUASI — a creative developer and
                  UI/UX designer focused on turning ideas into
                  thoughtful digital experiences and functional
                  products.
                </p>


                <div className="hero-role">
                  UI/UX DESIGN
                  <span>•</span>
                  FRONTEND DEVELOPMENT
                  <span>•</span>
                  FULL-STACK
                </div>

              </div>


              {/* Actions */}
              <div className="hero-actions">

                <a
                  href="#projects"
                  className="hero-button primary"
                >
                  View My Work
                  <ArrowDown size={17} />
                </a>


                <a
                  href="#contact"
                  className="hero-button secondary"
                >
                  Let's Talk
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE — IMAGE */}
          <div className="hero-image-wrapper">

            <div className="hero-image-glow"></div>

            <div className="hero-image-frame">

              <div className="hero-image-overlay"></div>

              <img
                src="/images/joseph.png"
                alt="Joseph AMUASI"
                className="hero-image"
              />

              <div className="hero-image-label">
                <span className="hero-image-dot"></span>
                JOSEPH AMUASI
              </div>

            </div>

          </div>

        </div>


        {/* Scroll Indicator */}
        <a
          href="#projects"
          className="hero-scroll"
          aria-label="Scroll to projects"
        >
          <span>
            SCROLL TO EXPLORE
          </span>

          <ArrowDown size={15} />
        </a>

      </div>

    </section>
  );
}

export default Hero;