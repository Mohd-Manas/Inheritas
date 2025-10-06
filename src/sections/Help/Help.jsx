import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import './Help.css';

const helpData = [
  {
    title: 'Personalized Will Drafting',
    description:
      'We take the time to understand your family structure, financial situation, and specific wishes before preparing a Will that reflects your unique needs.',
  },
  {
    title: 'Expert Legal Consultation',
    description:
      'Our legal specialists guide you through every aspect of UAE inheritance laws, ensuring your Will is both valid and enforceable.',
  },
  {
    title: 'Seamless Will Registration',
    description:
      'We manage the entire submission process with the relevant UAE authorities, ensuring every step is completed without delays.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From your initial consultation to the moment your Will is registered, we’re with you every step of the way — providing clarity, reassurance, and complete peace of mind.',
  },
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <section id="help" className="help-section">
      <h2>Help</h2>
      <p className="subtitle">How INHERITAS Can Help</p>
      <p className="description">
        At INHERITAS, we understand that preparing a Will is a deeply personal matter — but also a critical legal safeguard. Our role is to make the
        process simple, transparent, and fully compliant with UAE laws.
      </p>

      <div className="accordion-container">
        {helpData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`accordion-card${isActive ? ' active' : ''}`}
              onClick={() => toggleAccordion(index)}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-controls={`accordion-content-${index}`}
            >
              <div className="accordion-header">
                {item.title}
                <BsChevronDown
                  className={`accordion-icon${isActive ? ' rotated' : ''}`}
                  size={20}
                  aria-hidden="true"
                />
              </div>
              <div
                id={`accordion-content-${index}`}
                className={`accordion-content${isActive ? ' show' : ''}`}
              >
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Help;
