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
              I'm Joseph AMUASI — a student developer,
              creative developer, and UI/UX designer
              who enjoys turning ideas into useful,
              engaging digital products.
            </p>


            <p>
              I work at the intersection of design and
              development. I like understanding the
              problem first, designing the experience,
              and then building the product behind it.
            </p>


            <p>
              My current stack includes React for
              frontend development, FastAPI for backend
              services, and Supabase for databases and
              authentication. I also use Figma to explore
              ideas and create interfaces before bringing
              them to life with code.
            </p>


            {/* CTA */}
            <a
              href="#contact"
              className="about-link"
            >
              Let's build something
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>


        {/* Identity / Stats */}
        <div className="about-stats">

          <div className="about-stat">

            <span className="about-stat-number">
              01
            </span>

            <span className="about-stat-label">
              DESIGN
            </span>

          </div>


          <div className="about-stat">

            <span className="about-stat-number">
              02
            </span>

            <span className="about-stat-label">
              DEVELOP
            </span>

          </div>


          <div className="about-stat">

            <span className="about-stat-number">
              03
            </span>

            <span className="about-stat-label">
              SOLVE
            </span>

          </div>


          <div className="about-stat-description">

            <p>
              I care about the details that make digital
              products feel simple, intentional, and
              enjoyable to use.
            </p>

          </div>

        </div>


        {/* Philosophy */}
        <div className="about-philosophy">

          <div className="philosophy-number">
            04
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