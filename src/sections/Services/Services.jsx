import React from "react";
import './Services.css';

const registerSteps = [
  {
    title: "Initial Consultation & Will Drafting",
    description:
      "We discuss your requirements and prepare a draft tailored to your needs.",
  },
  {
    title: "Review & Amendments",
    description: "You review the draft, and we make any changes you require.",
  },
  {
    title: "Certified Legal Translation",
    description:
      "The Will is translated into Arabic as required by UAE law.",
  },
  {
    title: "Signing the Will",
    description: "Signatures are collected from the relevant parties.",
  },
  {
    title: "Court Registration",
    description:
      "We register the Will on the Abu Dhabi Judicial Department (ADJD) portal.",
  },
  {
    title: "Video Verification",
    description:
      "You attend a short video call with the judge for final approval.",
  },
  {
    title: "Final Delivery",
    description: "A certified copy of your registered Will is sent to you via email.",
  },
];

const Register = () => {
  const groups = [
    registerSteps.slice(0, 2),
    registerSteps.slice(2, 4),
    registerSteps.slice(4, 6),
    registerSteps.slice(6, 7),
  ];

  return (
    <section id="registration" className="services-section">
      <h2>Will Registration</h2>
      <p className="title">
        Our Registration Process
      </p>
      <p className="description">
        We follow a clear, step-by-step method to ensure your Will is legally valid and recognized in the UAE:
      </p>

      <div className="steps-group">
        {groups.map((group, i) => (
          <div
            key={i}
            className={`steps-row ${group.length === 1 ? 'center' : ''}`}
          >
            {group.map((step, idx) => (
              <div 
                key={idx} 
                className={`step-card ${group.length === 1 ? 'single' : ''}`}
              >
                <div className="step-number">
                  {i * 2 + idx + 1}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <section className="financial-section" style={{ marginTop: "4rem" }}>
        <h2>Financial Consultation</h2>
        <h3 className="title">
          Your Path to Financial Peace of Mind
        </h3>
        <p className="description" >
          At Inheritas, we believe that a well-structured financial future is built on three essential pillars: comprehensive protection, strategic planning, and unbiased investment advice. As an independent financial consultant, my role is to serve as your trusted guide, providing personalized solutions designed to help you achieve your unique life goals.
        </p>

        <h3>Life Insurance: Protecting What Matters Most</h3>
        <p className="description" >
          Life is unpredictable, but your family's financial security doesn't have to be. We work with you to analyze your financial situation and identify the right life insurance policies to protect your loved ones from the unexpected. Our approach is to find solutions that provide the right level of coverage at a price that fits your budget. We help you navigate the complexities of different policy types—such as term, whole, and universal life insurance—to build a safety net that gives you and your family peace of mind.
        </p>

        <h3>Independent Investment Advisory: Strategic Growth for Your Future</h3>
        <p className="description" >
          As an independent advisor, I am not affiliated with any specific bank or investment company. This allows me to provide truly objective and unbiased advice. We conduct a thorough analysis of your financial goals, risk tolerance, and time horizon to construct a diversified investment portfolio tailored specifically for you. From retirement planning to long-term wealth accumulation, we provide ongoing advice and monitoring to help your investments grow strategically and confidently over time.
        </p>

        <h3>Estate Planning: Building a Lasting Legacy</h3>
        <p className="description" >
          A thoughtful estate plan is more than just a will; it is a roadmap for your legacy. We guide you through the process of organizing your assets and ensuring they are distributed according to your wishes. Our services include assistance with beneficiary designations, trusts, and other legal instruments that can simplify the process for your heirs and minimize tax burdens. We help you create a plan that provides clarity and confidence, ensuring your legacy is protected for future generations.
        </p>
      </section>
    </section>
  );
};

export default Register;
