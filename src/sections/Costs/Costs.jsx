import React from 'react';

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
  residents: [
    { label: 'Single Will', price: 'AED 3,500' },
  ],
  nonResidents: [
    { label: 'Single Will', price: 'AED 5,000' },
  ],
};

const Card = ({ title, children }) => (
  <div style={{
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: '1.5rem',
    boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
    flex: '1 1 300px',
    margin: '1rem',
  }}>
    <h3 style={{ color: '#1E73BE', marginBottom: '1rem' }}>{title}</h3>
    {children}
  </div>
);

const Costs = () => {
  return (
    <section id="costs" style={{ padding: '2rem 4rem' }}>
      <h2 style={{ color: '#1E73BE' }}>Costs</h2>
      <p style={{ fontWeight: '600', marginBottom: '1rem' }}>Transparent & All-Inclusive Costs</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card title="Scope of Services (included in every package):">
          <ul style={{ paddingLeft: '1.5rem', color: '#33475b' }}>
            {costsData.scope.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Pricing:">
          <ul style={{ paddingLeft: '1.5rem', color: '#33475b' }}>
            {costsData.pricing.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                <strong>{item.label}:</strong> {item.price}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card title="For UAE Residents:">
          <ul style={{ paddingLeft: '1.5rem', color: '#33475b' }}>
            {costsData.residents.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                <strong>{item.label}:</strong> {item.price}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="For Non-Residents:">
          <ul style={{ paddingLeft: '1.5rem', color: '#33475b' }}>
            {costsData.nonResidents.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
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
