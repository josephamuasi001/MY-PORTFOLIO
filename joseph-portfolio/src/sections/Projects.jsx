import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Urban Bite",
    category: "Restaurant Ordering & Management Platform",
    description:
      "A modern restaurant platform designed to improve the way customers discover meals, place orders, and interact with a restaurant.",
    tags: ["UI/UX", "React", "FastAPI", "Supabase"],
    type: "FULL-STACK",
    image: "/projects/urban-bite.png",
  },

  {
    number: "02",
    title: "WFWMA",
    category: "Medical Website Redesign",
    description:
      "A design-focused website redesign aimed at improving visual hierarchy, usability, accessibility, and the overall digital experience.",
    tags: ["UI/UX", "Figma", "Frontend"],
    type: "REDESIGN",
    image: "/projects/wfwma.png",
  },

  {
    number: "03",
    title: "Task Management",
    category: "Full-Stack Productivity Application",
    description:
      "A task management application that allows users to create, update, complete, filter, and delete tasks through a responsive interface.",
    tags: ["React", "FastAPI", "Supabase"],
    type: "FULL-STACK",
    image: "/projects/task-management.png",
  },

  {
    number: "04",
    title: "Birthday Experience",
    category: "Interactive Creative Web Experience",
    description:
      "An interactive birthday website combining storytelling, animation, music, photography, and a playful terminal-inspired experience.",
    tags: ["HTML", "CSS", "JavaScript", "Creative"],
    type: "CREATIVE",
    image: "/projects/birthday.png",
  },
];


function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* Section Header */}
        <div className="projects-header">

          <div className="section-label">
            <span>02</span>
            SELECTED WORK
          </div>


          <div className="projects-heading-wrapper">

            <h2 className="projects-heading">
              Things I've
              <br />
              <span>designed & built.</span>
            </h2>


            <p className="projects-intro">
              A selection of projects where design,
              development, and problem-solving come
              together.
            </p>

          </div>

        </div>


        {/* Project List */}
        <div className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              {/* Project Visual */}
              <div className="project-visual">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="project-image"
                />
                <div className="project-visual-overlay">
                    <span className="project-type">
                      {project.type}
                    </span>

                    <span className="project-number">
                      {project.number}
                    </span>
                </div>
                
                <div className="project-visual-content">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <span className="project-number">
                    {project.number}
                  </span>

                </div>


                <div className="project-visual-grid"></div>


                {/* Project Visual Label */}
                <div className="project-visual-label">

                  <span>
                    {project.title}
                  </span>

                  <ArrowUpRight size={18} />

                </div>

              </div>


              {/* Project Information */}
              <div className="project-info">

                <div className="project-meta">

                  <span className="project-index">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>


                <div className="project-main">

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                  </div>


                  <div className="project-arrow">
                    <ArrowUpRight size={22} />
                  </div>

                </div>


                {/* Technology Tags */}
                <div className="project-tags">

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>


                {/* Case Study Link */}
                <div className="project-link-wrapper">

                  <span>
                    CASE STUDY
                  </span>

                  <span className="project-link-arrow">
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* Bottom CTA */}
        <div className="projects-footer">

          <p>
            Want to see how I approach a project?
          </p>

          <a href="#contact">

            Let's work together

            <ArrowUpRight size={17} />

          </a>

        </div>

      </div>

    </section>
  );
}


export default Projects;