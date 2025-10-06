import React from "react";
import "./Services.css";

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
    description: "The Will is translated into Arabic as required by UAE law.",
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
    description:
      "A certified copy of your registered Will is sent to you via email.",
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
<<<<<<< HEAD
      <h2>Will Registration</h2>
      <p className="title">
        Our Registration Process
      </p>
      <p className="description">
        We follow a clear, step-by-step method to ensure your Will is legally valid and recognized in the UAE:
      </p>
=======
      <h2>Register</h2>
      <p className="title">Our Registration Process</p>

      <div className="description-card">
        <p className="description">
          We follow a clear, step-by-step method to ensure your Will is legally valid and recognized in the UAE:
        </p>
      </div>
>>>>>>> 0345a0fcf54565f4fdeca87d1ca0693b3ae304fc

      <div className="steps-group">
        {groups.map((group, i) => (
          <div
            key={i}
            className={`steps-row ${group.length === 1 ? "center" : ""}`}
          >
            {group.map((step, idx) => (
              <div
                key={idx}
                className={`step-card ${group.length === 1 ? "single" : ""}`}
              >
                <div className="step-number">{i * 2 + idx + 1}</div>
                <h3 className="service-title">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* -------- Financial Section -------- */}
      <section className="financial-section" style={{ marginTop: "5rem" }}>
        <h2>Financial Consultation</h2>
       

        <div className="financial-card">
           <h3 style={{justifyContent:'center'}}>Your Path to Financial Peace of Mind</h3>
          <p className="description">
            At Inheritas, we believe that true financial well-being rests on three essential pillars:
            <strong> comprehensive protection, strategic planning, and independent advice.</strong>  
            As your trusted financial consultant, I’m dedicated to delivering personalized, unbiased
            strategies designed to protect your wealth and help you achieve lasting financial freedom.
          </p>
        </div>

        <div className="financial-card">
          <h3>Life Insurance — Protecting What Matters Most</h3>
          <p className="description">
            Life can be unpredictable, but your family’s financial future shouldn’t be.  
            We help you identify the right insurance coverage to safeguard your loved ones against
            unexpected challenges. From term to whole life policies, our goal is to ensure
            your plan offers meaningful protection while aligning with your financial goals.
          </p>
        </div>

        <div className="financial-card">
          <h3>Investment Advisory — Strategic Growth for Your Future</h3>
          <p className="description">
            As an independent advisor, we are not bound to any institution—allowing us to provide
            truly objective advice. We assess your goals, risk tolerance, and time horizon to
            craft a well-balanced investment portfolio. Through consistent guidance and
            performance tracking, we help your wealth grow confidently over time.
          </p>
        </div>

        <div className="financial-card">
          <h3>Estate Planning — Building a Lasting Legacy</h3>
          <p className="description">
            A thoughtful estate plan ensures that your hard-earned assets are distributed according
            to your wishes. We assist with wills, trusts, and beneficiary planning to minimize
            complexity and maximize peace of mind for your family. Together, we’ll create a clear
            legacy plan that reflects your values and secures the future for generations to come.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Register;
