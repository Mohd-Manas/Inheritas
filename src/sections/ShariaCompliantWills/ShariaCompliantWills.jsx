import React, { useState } from "react";

const shariaFaqs = [
  {
    question: `What is a "Muslim Will" or 'Wasiya' in the UAE?`,
    answer: `A Muslim will, often referred to as a 'Wasiya', is a legal document that allows a Muslim to make a bequest of up to one-third (1/3) of their estate. This portion can be left to non-family members, a charitable cause, or specific individuals who are not legal heirs. The remaining two-thirds (2/3) of the estate must be distributed according to the fixed shares outlined in Islamic Sharia law. It's a way to provide clarity on your wishes while respecting Islamic inheritance principles.`,
  },
  {
    question: `Why should a Muslim register a will in the UAE?`,
    answer: `While Sharia law dictates inheritance for Muslims, a registered will can be very beneficial. It allows you to:
    \n- Appoint a guardian for your minor children.
    \n- Appoint an executor to administer your estate.
    \n- Make specific bequests of up to one-third of your estate.
    \n- Provide instructions for funeral arrangements.
    \n- Streamline the probate process for your heirs, reducing potential delays and disputes.`,
  },
  {
    question: `What are the key differences between a Muslim and a non-Muslim will in the UAE?`,
    answer: `The main difference lies in the distribution of the estate. For Muslims, the distribution of the majority of the estate is predetermined by Sharia law. A will can only govern the discretionary one-third portion. For non-Muslims, a will can be used to govern the distribution of their entire estate, as it allows them to choose the law of their home country to apply to their assets.`,
  },
  {
    question: `What assets can be covered by a Muslim will?`,
    answer: `A Muslim will can cover a range of assets located in the UAE, including real estate, bank accounts, business shares, and other financial interests. A will registered with the Abu Dhabi Judicial Department (ADJD) can cover assets in all seven emirates.`,
  },
  {
    question: `How is the one-third portion distributed, and who are the fixed heirs for the remaining two-thirds?`,
    answer: `The one-third (1/3) portion can be distributed to anyone who is not a legal heir, such as a charity or a needy relative. The remaining two-thirds (2/3) is distributed among legal heirs (parents, spouse, and children) according to specific shares defined by Sharia principles. Generally, male heirs receive double the share of female heirs, but this can vary depending on the family structure.`,
  },
  {
    question: `Do I have to be a UAE resident to register a Muslim will?`,
    answer: `No, you do not have to be a UAE resident to register a Muslim will. Muslim expats who own assets in the UAE can register a will to ensure their assets are protected and distributed according to their wishes within the framework of Sharia law.`,
  },
];

const ShariaCompliantWills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "2rem 4rem", maxWidth: "900px", margin: "auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ marginBottom: "1.5rem", color: "#1E73BE" }}>
        Frequently Asked Questions about Sharia-Compliant Wills in the UAE
      </h2>
      {shariaFaqs.map(({ question, answer }, idx) => (
        <div
          key={idx}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "1rem 0",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => toggleIndex(idx)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggleIndex(idx) : null)}
          tabIndex={0}
          aria-expanded={openIndex === idx}
          role="button"
          aria-controls={`faq-answer-${idx}`}
          id={`faq-question-${idx}`}
        >
          <h3 style={{ margin: 0, fontWeight: "600", fontSize: "1.1rem" }}>
            {idx + 1}. {question}
          </h3>
          <div
            id={`faq-answer-${idx}`}
            role="region"
            aria-labelledby={`faq-question-${idx}`}
            style={{
              maxHeight: openIndex === idx ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
              marginTop: openIndex === idx ? "0.5rem" : "0",
              color: "#374151",
              fontSize: "1rem",
              whiteSpace: "pre-line",
            }}
          >
            <p style={{ margin: 0 }}>{answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShariaCompliantWills;
