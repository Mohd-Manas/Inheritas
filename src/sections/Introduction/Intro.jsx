import React from 'react';
import IntroImg from '../../assets/intro-img.png'; // Adjust path as needed

const Intro = () => {
    
  return (
    <section
      id="introduction"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1rem 4rem',  // top-bottom 1rem, left-right 4rem for start and end space
        gap: '5rem',
        alignItems: 'flex-start',
        minHeight: '300px',
      }}
    >
        
      {/* Left Content */}
      <div style={{ flex: '1 1 45%', maxWidth: '45%' }}>
        <h2>Introduction</h2>
        <p>
          Inheritance in the United Arab Emirates is governed by a unique blend of UAE Federal Laws,
          local emirate regulations, and Sharia principles. While the UAE is home to a large expatriate
          population, its legal system applies Sharia principles to inheritance cases by default,
          regardless of the deceased’s nationality or religion — unless there is a registered Will in place.
        </p>
        <p>
          This means that without proper planning, your assets may not be distributed according to your personal wishes,
          and your family could face legal complexities and delays during an already difficult time.
        </p>
        <p>
          Having a legally prepared and registered Will or estate plan ensures your wishes are respected and your family
          is spared unnecessary emotional and legal burden. Careful estate planning helps safeguard your legacy for future
          generations and provides clear guidance to executors and beneficiaries.
        </p>
        <ul>
          <li>Your estate is managed according to your specific instructions</li>
          <li>Your loved ones are financially protected</li>
          <li>Potential disputes are minimized</li>
          <li>Your children’s guardianship is decided by you, not the court</li>
          <li>Your assets are distributed quickly and efficiently without unnecessary delays</li>
        </ul>
      </div>

      {/* Right Image */}
      <div style={{ flex: '1 1 45%', maxWidth: '45%', marginLeft: '2rem' }}>
        <img
          src={IntroImg}
          alt="Introduction Visual"
          style={{
            width: '60%',
            height: 'auto',
            borderRadius: '8px',
            objectFit: 'cover',
            border: '2px solid #1E73BE'
          }}
        />
      </div>
    </section>
  );
};

export default Intro;
