import React from "react";
import ContactImg from "../../assets/contact-us.png";
import "./Contact.css";  // Import the new CSS file

const Contact = () => {
  return (
    <section id="contact">
      {/* Left Column */}
      <div className="contact-left">
        <h2>Contact</h2>

        <h3>Main Contact Details:</h3>
        <p>
          Email:{" "}
          <a href="mailto:Sanjana.inheritas@gmail.com">
            Sanjana.inheritas@gmail.com
          </a>
        </p>
        
        <p>Working Hours: Mon – Fri: 09:00 AM – 06:00 PM</p>

        <p>
          Inheritas is a unit of Three Keys Consulting FZ LLC
          <br />
          Website:{" "}
          <a href="https://www.tkcfzllc.com/" target="_blank" rel="noopener noreferrer">
            https://www.tkcfzllc.com
          </a>
        </p>

        <h3>Address:</h3>
        <p>
          Dubai Address: 18th Floor, Sheikh Rashid Tower, DWTC, Dubai, United Arab Emirates
        </p>

        <h3>Contact:</h3>
        <p>0585944811</p>
      </div>

      {/* Right Column */}
      <div className="contact-right">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us!");
          }}
          noValidate
        >
          <img src={ContactImg} alt="Contact Us" className="contact-img" />
          <p className="support-text">Get in touch with us for support now</p>

          <input type="text" name="name" placeholder="Name" required className="form-input" />
          <input type="email" name="email" placeholder="Email" required className="form-input" />
          <input type="tel" name="phone" placeholder="Phone" className="form-input" />
          <textarea name="message" rows="5" placeholder="Message" required className="form-textarea"></textarea>

          <button type="submit" className="form-submit-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
