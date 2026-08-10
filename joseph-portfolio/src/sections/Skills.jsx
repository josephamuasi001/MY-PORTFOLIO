import { ArrowUpRight } from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "DESIGN",
    description:
      "I use design to understand problems, explore ideas, and create interfaces that are clear and purposeful.",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UI Design",
      "UX Design",
      "Design Systems",
    ],
  },
  {
    number: "02",
    title: "FRONTEND",
    description:
      "I build responsive and interactive interfaces with a strong focus on usability, structure, and visual quality.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "BACKEND",
    description:
      "I build the server-side logic and APIs needed to connect frontend experiences with real application data.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Supabase",
      "Database Design",
      "Authentication",
    ],
  },
  {
    number: "04",
    title: "TOOLS & WORKFLOW",
    description:
      "I use modern development tools and workflows to manage, test, deploy, and maintain projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Render",
      "Vite",
      "Agile / Scrum",
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

          <h2>
            Tools I use
            <br />
            <span>to bring ideas to life.</span>
          </h2>

          <p>
            My workflow sits between design and development.
            I like understanding the experience first, then
            building the technology behind it.
          </p>

        </div>


        {/* Skill Groups */}
        <div className="skills-list">

          {skillGroups.map((group) => (
            <article
              className="skill-group"
              key={group.number}
            >

              <div className="skill-group-number">
                {group.number}
              </div>


              <div className="skill-group-title">
                <h3>{group.title}</h3>
              </div>


              <div className="skill-group-content">

                <p>
                  {group.description}
                </p>

                <div className="skill-tags">

                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Learning */}
        <div className="learning">

          <div className="learning-label">
            <span className="learning-dot"></span>
            CURRENTLY LEARNING
          </div>

          <div className="learning-content">
            <h3>
              Always building.
              <br />
              Always learning.
            </h3>

            <p>
              I'm continuously expanding my knowledge across
              software engineering, product development,
              system design, and modern web technologies.
            </p>
          </div>

        </div>


        {/* CTA */}
        <div className="skills-footer">

          <span>
            HAVE A TECHNICAL CHALLENGE?
          </span>

          <a href="#contact">
            Let's talk
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Skills;  