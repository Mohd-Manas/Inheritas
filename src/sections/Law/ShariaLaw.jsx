import React from 'react';

const ShariaLaw = () => {
  return (
    <section
      id="sharia-law"
      style={{
        padding: "1rem 7rem",
        maxWidth: '1800px',        // reduce overall box size a bit
        margin: '0 auto',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // smaller, lighter shadow
        transition: 'box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(1, 34, 105, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <h2>Sharia Law</h2>
      <p>
        Sharia inheritance principles differ significantly from Western inheritance laws. These rules are applied automatically if a person dies without a Will, regardless of religion or nationality.
      </p>
      <ul style={{ paddingLeft: '1.2rem' }}>
        <li>All bank accounts and assets are immediately frozen</li>
        <li>All transactions are halted until the court determines asset distribution</li>
        <li>Custody of children may not automatically go to the mother; courts will decide in accordance with Sharia principles</li>
        <li>Business and property ownership may be split in a way that impacts operations or intended succession plans</li>
      </ul>
    </section>
  );
};

export default ShariaLaw;
