import React from 'react';
import './Costs.css'; // Import your CSS file

const costsData = {
  scope: [
    'Drafting and legal review',
    'One-on-one consultation',
    'ADJD court fees and registration',
    'Certified legal translation',
  ],
  pricing: [
    { label: 'Single Will', price: 'AED 3,500' },
    { label: 'Mirror Will (for spouses with reciprocal terms)', price: 'AED 6,500' },
  ],
  residents: [{ label: 'Single Will', price: 'AED 3,500' }],
  nonResidents: [{ label: 'Single Will', price: 'AED 5,000' }],
};

const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    {children}
  </div>
);

const Costs = () => {
  return (
    <section id="costs">
      <h2>Costs</h2>
      <p className="subtitle">Transparent & All-Inclusive Costs</p>

      <div className="costs-container">
        <Card title="Scope of Services (included in every package):">
          <ul>
            {costsData.scope.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Card>

        {/* <Card title="Pricing:">
          <ul>
            {costsData.pricing.map((item, idx) => (
              <li key={idx}>
                <strong>{item.label}:</strong> {item.price}
              </li>
            ))}
          </ul>
        </Card> */}
      </div>

      <div className="costs-container">
        <Card title="For UAE Residents:">
          <ul>
            {costsData.residents.map((item, idx) => (
              <li key={idx}>
                <strong>{item.label}:</strong> {item.price}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="For Non-Residents:">
          <ul>
            {costsData.nonResidents.map((item, idx) => (
              <li key={idx}>
                <strong>{item.label}:</strong> {item.price}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Costs;
