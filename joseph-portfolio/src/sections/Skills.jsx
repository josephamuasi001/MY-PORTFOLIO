import {
  siFigma,
  siCanva,
  siReact,
  siJavascript,
  siHtml5,
  siCss3,
  siVite,
  siPython,
  siFastapi,
  siSupabase,
  siGit,
  siGithub,
  siVercel,
  siRender,
} from "simple-icons";

import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "DESIGN",
    description:
      "Designing interfaces and digital experiences with a focus on clarity, usability, and visual consistency.",
    skills: [
      { name: "Figma", icon: siFigma },
      { name: "Canva", icon: siCanva },
    ],
  },

  {
    number: "02",
    title: "FRONTEND",
    description:
      "Building responsive and interactive interfaces that turn ideas and designs into functional web experiences.",
    skills: [
      { name: "React", icon: siReact },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss3 },
      { name: "Vite", icon: siVite },
    ],
  },

  {
    number: "03",
    title: "BACKEND",
    description:
      "Developing APIs, server-side logic, and application infrastructure that power real-world web applications.",
    skills: [
      { name: "Python", icon: siPython },
      { name: "FastAPI", icon: siFastapi },
      { name: "Supabase", icon: siSupabase },
    ],
  },

  {
    number: "04",
    title: "TOOLS & WORKFLOW",
    description:
      "Using modern development tools to collaborate, manage code, deploy applications, and maintain projects.",
    skills: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Render", icon: siRender },
      { name: "Vercel", icon: siVercel },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Section Label */}
        <div className="section-label skills-label">
          <span>05</span>
          SKILLS & STACK
        </div>


        {/* Header */}
        <div className="skills-header">

          <div>
            <p className="skills-eyebrow">
              TECHNOLOGIES & TOOLS
            </p>

            <h2>
              The tools
              <br />
              <span>behind the work.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A combination of design thinking, frontend
            development, backend engineering, and modern
            development workflows.
          </p>

        </div>


        {/* Skill Groups */}
        <div className="skills-groups">

          {skillGroups.map((group) => (
            <article
              className="skill-group"
              key={group.number}
            >

              {/* Group Header */}
              <div className="skill-group-header">

                <span className="skill-group-number">
                  {group.number}
                </span>

                <h3>
                  {group.title}
                </h3>

              </div>


              {/* Group Content */}
              <div className="skill-group-content">

                <p>
                  {group.description}
                </p>


                {/* Technology Cards */}
                <div className="technology-grid">

                  {group.skills.map((skill) => {
                    const icon = skill.icon;

                    return (
                      <div
                        className="technology-card"
                        key={skill.name}
                      >

                        <div
                          className="technology-icon"
                          dangerouslySetInnerHTML={{
                            __html: icon.svg,
                          }}
                        />

                        <span>
                          {skill.name}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Currently Exploring */}
        <div className="exploring">

          <div className="exploring-label">
            <span className="exploring-dot"></span>
            CURRENTLY EXPLORING
          </div>

          <div className="exploring-content">

            <h3>
              Always building.
              <br />
              Always learning.
            </h3>

            <p>
              I'm continuously expanding my knowledge across
              software engineering, system design, modern
              web technologies, and product development.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;