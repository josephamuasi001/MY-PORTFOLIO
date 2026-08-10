import {
  FaReact,
  FaJs,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";

import {
  Code2,
  Database,
  Server,
  PenTool,
} from "lucide-react";

import "./Skills.css";


const skillGroups = [
  {
    number: "01",
    title: "DESIGN",
    description:
      "Designing interfaces and digital experiences with a focus on clarity, usability, and visual consistency.",

    skills: [
      {
        name: "Figma",
        icon: PenTool,
      },
    ],
  },

  {
    number: "02",
    title: "FRONTEND",

    description:
      "Building responsive and interactive interfaces that turn ideas and designs into functional web experiences.",

    skills: [
      {
        name: "React",
        icon: FaReact,
      },

      {
        name: "JavaScript",
        icon: FaJs,
      },

      {
        name: "HTML5",
        icon: FaHtml5,
      },

      {
        name: "CSS3",
        icon: Code2,
      },
    ],
  },

  {
    number: "03",
    title: "BACKEND",

    description:
      "Developing APIs, server-side logic, and application infrastructure that power real-world web applications.",

    skills: [
      {
        name: "Python",
        icon: FaPython,
      },

      {
        name: "FastAPI",
        icon: Server,
      },

      {
        name: "Supabase",
        icon: Database,
      },
    ],
  },

  {
    number: "04",
    title: "TOOLS & WORKFLOW",

    description:
      "Using modern development tools to collaborate, manage code, deploy applications, and maintain projects.",

    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },

      {
        name: "GitHub",
        icon: FaGithub,
      },

      {
        name: "Vite",
        icon: Code2,
      },

      {
        name: "REST APIs",
        icon: Server,
      },
    ],
  },
];


function Skills() {

  return (

    <section
      className="skills"
      id="skills"
    >

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

              <span>
                behind the work.
              </span>
            </h2>

          </div>


          <p className="skills-intro">

            A combination of design thinking,
            frontend development, backend
            engineering, and modern development
            workflows.

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

                    const Icon = skill.icon;

                    return (

                      <div
                        className="technology-card"
                        key={skill.name}
                      >

                        <div className="technology-icon">

                          <Icon size={32} />

                        </div>


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

              I'm continuously expanding
              my knowledge across software
              engineering, system design,
              modern web technologies,
              and product development.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}


export default Skills;