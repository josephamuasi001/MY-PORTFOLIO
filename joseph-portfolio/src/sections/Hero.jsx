import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Small introduction label */}
        <div className="hero-eyebrow">
          <span className="status-dot"></span>
          AVAILABLE FOR FREELANCE • 2026
        </div>

        {/* Main heading */}
        <h1 className="hero-title">
          I DESIGN.
          <br />
          I BUILD.
          <br />
          <span>I CREATE.</span>
        </h1>

        {/* Description */}
        <div className="hero-bottom">

          <p className="hero-description">
            I'm Joseph AMUASI, a creative developer and UI/UX
            designer focused on building thoughtful digital
            experiences and functional products.
          </p>

          {/* Buttons */}
          <div className="hero-actions">

            <a href="#work" className="hero-button primary">
              View My Work
              <ArrowDown size={17} />
            </a>

            <a href="#contact" className="hero-button secondary">
              Let's Talk
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </div>

      </div>
    </section>
  );
}

export default Hero;