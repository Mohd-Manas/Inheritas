import React from "react";
import './About.css';
import AboutImg from "../../assets/About-Us.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Inheritas, we believe in the power of a well-planned future. Founded in August 2024 by a mother-daughter team, our company was born from the desire to simplify the complexities of financial planning and legal legacy. With a solid foundation in the banking and legal sectors, we bring a unique blend of financial expertise and legal insight to our clients in the UAE.
          </p>
          <p>
            Our mission is to empower you to protect what matters most. We understand that your family and assets are your most valuable legacy, and we're dedicated to helping you secure them. We offer two key services: professional will registration to ensure your wishes are legally recognized, and expert financial consultation to help you make informed decisions for a prosperous future.
          </p>
          <p>
            Our core values of integrity, trust, and excellence are at the heart of everything we do. We're more than just advisors; we are partners on your journey to peace of mind. We take the time to understand your unique situation and provide tailored solutions that are both clear and effective. As a family-run business with a deep commitment to our clients, we're not just building a company—we're helping you build a lasting legacy.
          </p>
        </div>
        <div className="about-img-wrapper">
          <img
            className="about-img"
            src={AboutImg}
            alt="About Inheritas"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
