import {
  ArrowUpRight,
  Code2,
  Layers3,
  Palette,
  Smartphone,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "UI/UX DESIGN",
    description:
      "Designing clear, engaging, and user-focused digital experiences from early ideas to polished interfaces.",
    process: "Research → Wireframes → Prototypes → Design Systems",
  },
  {
    number: "02",
    icon: Code2,
    title: "FRONTEND DEVELOPMENT",
    description:
      "Building responsive, accessible, and interactive interfaces that turn designs into functional products.",
    process: "React → Responsive UI → APIs → Animations",
  },
  {
    number: "03",
    icon: Layers3,
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Developing complete web applications with modern frontend, backend, database, and deployment workflows.",
    process: "React → FastAPI → Supabase → Deployment",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "Creating modern websites for businesses, personal brands, organizations, and creative projects.",
    process: "Strategy → Design → Development → Launch",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* Section Header */}
        <div className="section-label services-label">
          <span>04</span>
          SERVICES
        </div>

        <div className="services-header">
          <h2>
            What I can
            <br />
            <span>help you build.</span>
          </h2>

          <p>
            From the first idea to the final product, I combine
            design and development to create digital experiences
            that are useful, intuitive, and visually engaging.
          </p>
        </div>


        {/* Services List */}
        <div className="services-list">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-item"
                key={service.number}
              >

                {/* Number */}
                <div className="service-number">
                  {service.number}
                </div>


                {/* Icon */}
                <div className="service-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>


                {/* Main Content */}
                <div className="service-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-process">
                    {service.process}
                  </span>

                </div>


                {/* Arrow */}
                <div className="service-arrow">
                  <ArrowUpRight size={20} />
                </div>

              </article>
            );
          })}

        </div>


        {/* Bottom Note */}
        <div className="services-footer">

          <span>HAVE A PROJECT IN MIND?</span>

          <a href="#contact">
            Start a conversation
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;