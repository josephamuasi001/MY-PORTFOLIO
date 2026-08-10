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
      "Designing thoughtful interfaces and digital experiences that are clear, intuitive, and focused on real user needs.",
    process: "Research → Wireframes → Prototypes → Design Systems",
  },

  {
    number: "02",
    icon: Code2,
    title: "FRONTEND DEVELOPMENT",
    description:
      "Turning designs into responsive, interactive, and accessible interfaces using modern frontend technologies.",
    process: "React → Responsive UI → APIs → Interactions",
  },

  {
    number: "03",
    icon: Layers3,
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Building complete web applications from the interface to the backend, database, authentication, and deployment.",
    process: "React → FastAPI → Supabase → Deployment",
  },

  {
    number: "04",
    icon: Smartphone,
    title: "WEB DESIGN & DEVELOPMENT",
    description:
      "Creating modern websites for businesses, organizations, personal brands, and creative projects.",
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
            I combine design thinking and development
            skills to turn ideas into digital products
            that are useful, functional, and visually
            engaging.
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
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>


                {/* Content */}
                <div className="service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

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


        {/* How I Work */}
        <div className="services-process-section">

          <div className="process-label">
            HOW I WORK
          </div>

          <div className="process-steps">

            <div className="process-step">
              <span>01</span>
              <h3>DISCOVER</h3>
              <p>
                Understand the idea, problem, users,
                and goals.
              </p>
            </div>


            <div className="process-step">
              <span>02</span>
              <h3>DESIGN</h3>
              <p>
                Shape the experience through wireframes,
                interfaces, and prototypes.
              </p>
            </div>


            <div className="process-step">
              <span>03</span>
              <h3>BUILD</h3>
              <p>
                Turn the approved design into a
                functional digital product.
              </p>
            </div>


            <div className="process-step">
              <span>04</span>
              <h3>LAUNCH</h3>
              <p>
                Test, refine, deploy, and prepare the
                product for real users.
              </p>
            </div>

          </div>

        </div>


        {/* Bottom CTA */}
        <div className="services-footer">

          <span>
            HAVE A PROJECT IN MIND?
          </span>

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