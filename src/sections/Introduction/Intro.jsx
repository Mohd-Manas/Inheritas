// Intro.jsx
import React from "react";
import IntroImg from "../../assets/Homepage.jpg"; // Your image path
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro-wrapper">
        {/* Left half: Content */}
        <div className="intro-content">
          <h2>Introduction</h2>
          <p>
            Inheritance in the United Arab Emirates is governed by a unique blend of UAE Federal Laws,
            local emirate regulations, and Sharia principles. While the UAE is home to a large expatriate
            population, its legal system applies Sharia principles to inheritance cases by default,
            regardless of the deceased’s nationality or religion — unless there is a registered Will in place.
          </p>
          <p>
            This means that without proper planning, your assets may not be distributed according to your
            personal wishes, and your family could face legal complexities and delays during an already
            difficult time.
          </p>
          <p>
            Having a legally prepared and registered Will or estate plan ensures your wishes are respected
            and your family is spared unnecessary emotional and legal burden. Careful estate planning helps
            safeguard your legacy for future generations and provides clear guidance to executors and beneficiaries.
          </p>
          <ul>
            <li>Your estate is managed according to your specific instructions</li>
            <li>Your loved ones are financially protected</li>
            <li>Potential disputes are minimized</li>
            <li>Your children’s guardianship is decided by you, not the court</li>
            <li>Your assets are distributed quickly and efficiently without unnecessary delays</li>
          </ul>
        </div>

        {/* Right half: Image */}
        <div className="intro-image-wrapper">
          <img
            src={IntroImg}
            alt="Introduction Visual"
            className="intro-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
