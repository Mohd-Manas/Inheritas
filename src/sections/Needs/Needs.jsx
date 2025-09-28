import React from 'react';
import './Needs.css'; 

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
    <section id="needs">
      <h2>Needs</h2>
      <p className="intro-text">
        Many people delay creating a Will, assuming it’s only necessary later in life. However, in the UAE’s legal context, having a Will is an urgent
        and essential step for anyone with assets, dependents, or business interests here.
      </p>
      <div className="needs-container">
        {needsData.map((need, index) => (
          <div key={index} className="need-card" tabIndex={0}>
            <strong>{need.title}</strong>
            <p>{need.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Needs;
