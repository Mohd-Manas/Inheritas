import React from "react";

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
    description: "A certified copy of your registered Will is sent to you via email.",
  },
];

const Register = () => {
  // Group steps into 2 + 2 + 2 + 1
  const groups = [
    registerSteps.slice(0, 2),
    registerSteps.slice(2, 4),
    registerSteps.slice(4, 6),
    registerSteps.slice(6, 7),
  ];

  return (
    <section
      id="registration"
      style={{
        padding: "1rem 7rem",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Register</h2>
      <p style={{ color: "#333", fontWeight: "600", marginBottom: "0.5rem" }}>
        Our Registration Process
      </p>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        We follow a clear, step-by-step method to ensure your Will is legally
        valid and recognized in the UAE:
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {groups.map((group, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: group.length === 1 ? "center" : "flex-start",
              flexWrap: "wrap",
            }}
          >
            {group.map((step, idx) => (
              <div
                key={idx}
                style={{
                  flex: group.length === 1 ? "0 0 30%" : "0 0 45%",
                  background: `linear-gradient(135deg, #a8c0ff, #1E73BE)`,
                  borderRadius: "10px",
                  padding: "1.2rem 1.5rem",
                  boxShadow: "0 6px 10px rgba(63, 43, 150, 0.3)",
                  color: "white",
                  boxSizing: "border-box",
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at center, #ffffffdd, #3f2b961a)",
                    color: "#1E73BE",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginBottom: "0.8rem",
                    boxShadow: "0 2px 6px #1E73BE",
                  }}
                >
                  {i * 2 + idx + 1}
                </div>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.3", color: "#e0e6ff" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Register;
