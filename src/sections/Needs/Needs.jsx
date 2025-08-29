import React from 'react';

const needsData = [
  {
    title: 'Ensures Asset Distribution According to Your Wishes',
    description: 'Your Will clearly outlines who inherits what, avoiding confusion and unintended allocation of assets.',
  },
  {
    title: 'Prevents Family Disputes',
    description: 'In the absence of clear instructions, disagreements can arise among beneficiaries, causing unnecessary stress and strain on relationships.',
  },
  {
    title: 'Avoids Government Intervention',
    description: 'Without a Will, courts follow Sharia distribution rules, which may not reflect your intentions.',
  },
  {
    title: 'Secures Guardianship for Your Children',
    description: 'You can appoint legal guardians, ensuring your children are cared for by someone you trust.',
  },
  {
    title: 'Streamlines Wealth Transfer',
    description: 'A registered Will speeds up the legal process, allowing your beneficiaries to access funds and assets without prolonged delays.',
  },
];

const Needs = () => {
  return (
    <section id="needs" style={{ padding: '1rem 7rem' }}>
      <h2>Needs</h2>
      <p>
        Many people delay creating a Will, assuming it’s only necessary later in life. However, in the UAE’s legal context, having a Will is an urgent
        and essential step for anyone with assets, dependents, or business interests here.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
          justifyContent: 'center', // Center last single card row
        }}
      >
        {needsData.map((need, index) => (
          <div
            key={index}
            style={{
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxSizing: 'border-box',
              flex: index === 4 ? '0 1 50%' : '0 1 45%', // 50% width for last card, 45% for others
              maxWidth: index === 4 ? '50%' : '45%',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#1E73BE';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(1, 34, 105, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <strong>{need.title}</strong>
            <p style={{ marginTop: '0.5rem' }}>{need.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Needs;
