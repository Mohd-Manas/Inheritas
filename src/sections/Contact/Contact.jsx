import React from "react";
import ContactImg from "../../assets/contact-us.png";
const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "2rem 4rem",
        backgroundColor: "#f4f7ff",
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {/* Left Column */}
      <div
        style={{
          flex: "1 1 0",
          minWidth: "280px",
          maxWidth: "600px",
          textAlign: "left",
          color: "#1d2b54",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>Contact</h2>

          <h3>Main Contact Details:</h3>
          <p>
            Email:{" "}
            <a href="mailto:Sanjana.inheritas@gmail.com" style={{ color: "#1E73BE", textDecoration: "underline" }}>
              Sanjana.inheritas@gmail.com
            </a>
          </p>
          <p>
            RAK Address: Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
          </p>
          <p>
            Dubai Address: 18th Floor, Sheikh Rashid Tower, DWTC, Dubai, United Arab Emirates
          </p>
          <p>Working Hours: Mon – Fri : 09:00 AM – 06:00 PM</p>

          <p>
            Inheritas is a unit of Three Keys Consulting FZ LLC
            <br />
            Website:{" "}
            <a href="https://www.tkcfzllc.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1E73BE", textDecoration: "underline" }}>
              https://www.tkcfzllc.com/
            </a>
          </p>

          <h3>Address:</h3>
          <address style={{ lineHeight: "1.5", marginBottom: "1.5rem", fontStyle: "normal" }}>
            FDAU0021
            <br />
            Compass Building,
            <br />
            Al Shohada Road,
            <br />
            Al Hamra Industrial Zone-FZ,
            <br />
            Ras Al Khaimah, United Arab Emirates
          </address>

          <h3>Contact:</h3>
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>0585944811</p>
        </div>
      </div>

      {/* Right Column */}
      <div
        style={{
          flex: "1 1 0",
          minWidth: "320px",
          maxWidth: "600px",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us!");
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "100%",
            marginLeft: "auto",
            flexGrow: 1,
          }}
          noValidate
        >
          <img
            src={ContactImg}
            alt="Contact Us"
            style={{
              width: "100%",
              maxHeight: "250px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
          <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
            Get in touch with us for  support now
          </p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outlineColor: "#1E73BE",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outlineColor: "#1E73BE",
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outlineColor: "#1E73BE",
            }}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              resize: "vertical",
              outlineColor: "#1E73BE",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#1E73BE",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#014aad")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E73BE")}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
