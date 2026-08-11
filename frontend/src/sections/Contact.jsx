import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import "./Contact.css";


const API_URL = "https://joseph-portfolio-api-55hi.onrender.com";



function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    budget: "",
    timeline: "",
    message: "",
  });


  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);


  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  }


  async function handleSubmit(event) {

    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);


    
    try {

      const response = await fetch(
        `${API_URL}/enquiries`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.detail ||
          "Something went wrong. Please try again."
        );

      }


      setStatus({
        type: "success",
        message:
          "Your enquiry has been sent successfully. I'll get back to you soon.",
      });


     setFormData({
      name: "",
      email: "",
      phone: "",
      project_type: "",
      budget: "",
      timeline: "",
      message: "",
    });


    } catch (error) {

      console.error(
        "Enquiry submission error:",
        error
      );


      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your enquiry. Please try again.",
      });


    } finally {

      setIsSubmitting(false);

    }

  }


  return (

    <section className="contact" id="contact">

      <div className="contact-container">


        {/* Section Label */}

        <div className="section-label contact-label">

          <span>06</span>

          CONTACT

        </div>


        {/* Main Contact */}

        <div className="contact-main">


          <div className="contact-heading">

            <p className="contact-eyebrow">

              HAVE A PROJECT OR OPPORTUNITY?

            </p>


            <h2>

              Let's build

              <br />

              <span>something great.</span>

            </h2>

          </div>


          <div className="contact-description">

            <p>

              Whether you have a project in mind,
              a freelance opportunity, or you're
              looking for a developer to join your
              team, I'd love to hear from you.

            </p>


            {/* Email Address */}

            <a
              href="mailto:jamuasi001@st.ug.edu.gh"
              className="contact-email"
            >

              <Mail size={18} />

              jamuasi001@st.ug.edu.gh

            </a>

          </div>

        </div>


        {/* Enquiry Form */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >


          <div className="contact-form-grid">


            {/* Name */}

            <div className="form-group">

              <label htmlFor="name">
                NAME
              </label>


              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                EMAIL
              </label>


              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Phone */}

            <div className="form-group">

              <label htmlFor="phone">

                PHONE

                <span> (OPTIONAL)</span>

              </label>


              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+233..."
                value={formData.phone}
                onChange={handleChange}
              />

            </div>


            {/* Project Type */}

            <div className="form-group">

              <label htmlFor="project_type">
                PROJECT TYPE
              </label>


              <select
                id="project_type"
                name="project_type"
                value={formData.project_type}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select a project type
                </option>


                <option value="Website Development">
                  Website Development
                </option>


                <option value="Full-Stack Development">
                  Full-Stack Development
                </option>


                <option value="UI/UX Design">
                  UI/UX Design
                </option>


                <option value="Website Redesign">
                  Website Redesign
                </option>


                <option value="Freelance Opportunity">
                  Freelance Opportunity
                </option>


                <option value="Collaboration">
                  Collaboration
                </option>


                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* Budget */}
            <div className="form-group">

              <label htmlFor="budget">
                BUDGET <span>(OPTIONAL)</span>
              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">
                  Select your budget
                </option>

                <option value="Below GHS 1,000">
                  Below GHS 1,000
                </option>

                <option value="GHS 1,000 - 3,000">
                  GHS 1,000 - 3,000
                </option>

                <option value="GHS 3,000 - 5,000">
                  GHS 3,000 - 5,000
                </option>

                <option value="GHS 5,000 - 10,000">
                  GHS 5,000 - 10,000
                </option>

                <option value="Above GHS 10,000">
                  Above GHS 10,000
                </option>

                <option value="Not sure yet">
                  Not sure yet
                </option>

              </select>

            </div>

            {/* Timeline */}
            <div className="form-group">

              <label htmlFor="timeline">
                TIMELINE <span>(OPTIONAL)</span>
              </label>

              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">
                  Select your timeline
                </option>

                <option value="ASAP">
                  ASAP
                </option>

                <option value="1 - 2 weeks">
                  1 - 2 weeks
                </option>

                <option value="1 month">
                  1 month
                </option>

                <option value="1 - 3 months">
                  1 - 3 months
                </option>

                <option value="3+ months">
                  3+ months
                </option>

                <option value="Flexible">
                  Flexible
                </option>

              </select>

            </div>

          </div>


          {/* Message */}

          <div className="form-group">

            <label htmlFor="message">
              MESSAGE
            </label>


            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="Tell me a little about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>


          {/* Status Message */}

          {status.message && (

            <div
              className={`form-status ${status.type}`}
              role="alert"
            >

              {status.message}

            </div>

          )}


          {/* Submit */}

          <div className="contact-form-submit">

            <button
              type="submit"
              className="contact-primary"
              disabled={isSubmitting}
            >

              {isSubmitting
                ? "Sending..."
                : "Send enquiry"
              }


              {isSubmitting ? (

                <Send size={20} />

              ) : (

                <ArrowUpRight size={20} />

              )}

            </button>

          </div>

        </form>


        {/* Contact Actions */}

        <div className="contact-actions">


          {/* Email CTA */}

          <a
            href="mailto:jamuasi001@st.ug.edu.gh"
            className="contact-secondary"
          >

            Email me directly

            <Mail size={18} />

          </a>


          {/* Social Links */}

          <div className="contact-socials">


            {/* GitHub */}

            <a
              href="https://github.com/josephamuasi001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >

              GitHub

              <ArrowUpRight size={15} />

            </a>


            {/* LinkedIn - coming later */}

            <a
              href="#"
              aria-label="LinkedIn"
            >

              LinkedIn

            </a>

          </div>

        </div>


        {/* Availability */}

        <div className="contact-availability">


          <div className="availability-status">

            <span></span>

            AVAILABLE FOR SELECTED PROJECTS

          </div>


          <p>

            Based in Ghana · Open to remote opportunities

          </p>

        </div>


      </div>

    </section>

  );

}


export default Contact;