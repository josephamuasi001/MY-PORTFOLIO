import { ArrowUpRight } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Label */}
        <div className="section-label about-label">
          <span>03</span>
          ABOUT ME
        </div>


        {/* Main About Content */}
        <div className="about-grid">

          {/* Left Side */}
          <div className="about-heading-wrapper">

            <h2 className="about-heading">
              I turn ideas into
              <span> digital experiences.</span>
            </h2>

          </div>


          {/* Right Side */}
          <div className="about-content">

            <p className="about-lead">
              I'm Joseph AMUASI, a student developer,
              creative developer, and UI/UX designer
              passionate about turning ideas into useful,
              engaging digital products.
            </p>

            <p>
              I enjoy working across the entire product
              journey — from understanding a problem and
              designing the experience to building the
              interface and connecting the backend.
            </p>

            <p>
              My current toolkit includes React for
              frontend development, FastAPI for backend
              services, and Supabase for data and
              authentication. I also use Figma to explore
              ideas and design interfaces before bringing
              them to life with code.
            </p>


            {/* CTA */}
            <a href="#contact" className="about-link">
              Let's build something
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>


        {/* Philosophy */}
        <div className="about-philosophy">

          <div className="philosophy-number">
            01
          </div>

          <div className="philosophy-content">

            <span>MY APPROACH</span>

            <h3>
              Design with purpose.
              <br />
              Build with intention.
            </h3>

          </div>

          <p>
            I believe good digital products should not
            only look good. They should be intuitive,
            purposeful, accessible, and built to solve
            real problems.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;