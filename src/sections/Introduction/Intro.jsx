import React from "react";
import IntroImg from "../../assets/intro-img.png";
import './Intro.css';  // Import the CSS file for image container styling

const Intro = () => {
  return (
    <section
      id="home"
      className="container py-4"
      style={{
        minHeight: "300px",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        background: "linear-gradient(135deg, #e0efff 0%, #c1d8f7 100%)",
      }}
    >
      <div className="row align-items-start g-4">
        {/* Left Content */}
        <div
          className="col-12 col-lg-6"
          style={{
            color: "#374151",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <h2
            style={{
              color: "#1E73BE",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Introduction
          </h2>
          <p>
            Inheritance in the United Arab Emirates is governed by a unique blend of UAE
            Federal Laws, local emirate regulations, and Sharia principles. While the UAE
            is home to a large expatriate population, its legal system applies Sharia
            principles to inheritance cases by default, regardless of the deceased’s
            nationality or religion — unless there is a registered Will in place.
          </p>
          <p>
            This means that without proper planning, your assets may not be distributed
            according to your personal wishes, and your family could face legal
            complexities and delays during an already difficult time.
          </p>
          <p>
            Having a legally prepared and registered Will or estate plan ensures your
            wishes are respected and your family is spared unnecessary emotional and legal
            burden. Careful estate planning helps safeguard your legacy for future
            generations and provides clear guidance to executors and beneficiaries.
          </p>
          <ul style={{ paddingLeft: "1.2rem", color: "#374151" }}>
            <li>Your estate is managed according to your specific instructions</li>
            <li>Your loved ones are financially protected</li>
            <li>Potential disputes are minimized</li>
            <li>Your children’s guardianship is decided by you, not the court</li>
            <li>Your assets are distributed quickly and efficiently without unnecessary delays</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-12 col-lg-6 intro-image-container">
          <img
            src={IntroImg}
            alt="Introduction Visual"
            className="intro-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
