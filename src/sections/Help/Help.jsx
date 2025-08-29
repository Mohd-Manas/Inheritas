import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const helpData = [
  {
    title: 'Personalized Will Drafting',
    description: 'We take the time to understand your family structure, financial situation, and specific wishes before preparing a Will that reflects your unique needs.',
  },
  {
    title: 'Expert Legal Consultation',
    description: 'Our legal specialists guide you through every aspect of UAE inheritance laws, ensuring your Will is both valid and enforceable.',
  },
  {
    title: 'Seamless Will Registration',
    description: 'We manage the entire submission process with the relevant UAE authorities, ensuring every step is completed without delays.',
  },
  {
    title: 'End-to-End Support',
    description: 'From your initial consultation to the moment your Will is registered, we’re with you every step of the way — providing clarity, reassurance, and complete peace of mind.',
  },
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="help" style={{ padding: '1rem 7rem' }}>
      <h2>Help</h2>
      <p>How INHERITAS Can Help</p>
      <p>
        At INHERITAS, we understand that preparing a Will is a deeply personal matter — but also a critical legal safeguard. Our role is to make the process simple, transparent, and fully compliant with UAE laws.
      </p>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {helpData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              style={{
                flex: '0 0 48%',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: isActive ? '0 4px 12px rgba(1,34,105,0.3)' : 'none',
                transition: 'box-shadow 0.3s ease',
                backgroundColor: isActive ? '#1E73BE' : '#e7ecf9',
                color: isActive ? 'white' : '#1a202c',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => toggleAccordion(index)}
            >
              <div
                style={{
                  padding: '1rem',
                  fontWeight: 'bold',
                  userSelect: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: isActive ? 'white' : '#1a202c',
                }}
              >
                {item.title}
                <BsChevronDown
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  size={20}
                />
              </div>
              {isActive && (
                <div style={{ padding: '1rem', backgroundColor: '#fff', color: '#333', flexGrow: 1 }}>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Help;
