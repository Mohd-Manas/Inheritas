import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1E73BE",
        color: "white",
        padding: "2rem 4rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        <div style={{ flex: "1 1 250px" }}>
          <h4 style={{ marginBottom: "1rem", fontWeight: "700" }}>Inheritas</h4>
          <p>
            A unit of Three Keys Consulting FZ LLC<br />
            Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE<br />
            18th Floor, Sheikh Rashid Tower, DWTC, Dubai, UAE
          </p>
        </div>

        <div style={{ flex: "1 1 200px" }}>
          <h4 style={{ marginBottom: "1rem", fontWeight: "700" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
            <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
            <li><a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
            <li><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>

        <div style={{ flex: "1 1 250px" }}>
          <h4 style={{ marginBottom: "1rem", fontWeight: "700" }}>Contact Us</h4>
          <p>Email: <a href="mailto:Sanjana.inheritas@gmail.com" style={{ color: "white", textDecoration: "underline" }}>Sanjana.inheritas@gmail.com</a></p>
          <p>Phone: 0585944811</p>
          <p>Working Hours: Mon – Fri : 09:00 AM – 06:00 PM</p>
        </div>
      </div>

      <hr style={{ margin: "2rem 0", borderColor: "rgba(255,255,255,0.3)" }} />

      <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Inheritas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
