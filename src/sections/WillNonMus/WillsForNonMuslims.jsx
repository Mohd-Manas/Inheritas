// WillsForNonMuslims.jsx
import React, { useState } from "react";
import './WillsForNonMuslims.css';
import WillsImg from "../../assets/Wills for Non-Muslims.jpg"; // Replace with your image path

const faqs = [
  {
    question: "What is the process for registering a will?",
    answer: `The process for registering a will in the UAE for non-Muslims typically involves several key steps: a professional consultation to discuss your specific needs and wishes, drafting the will document, and ensuring it is legally translated into Arabic as required. You'll then have a remote video call with an authorized registration body, such as the DIFC Courts or the Abu Dhabi Judicial Department, to finalize the registration. Once complete, you will receive a legally recognized and enforceable electronic copy of your will.`,
  },
  {
    question: "Why should I register a will professionally?",
    answer: `Having a professionally registered will ensures your final wishes regarding asset distribution and guardianship of minors are legally binding and respected. It provides clarity to your heirs, simplifies the legal process, and helps to avoid potential disputes among family members. Without a registered will, your estate could be subject to default local inheritance laws, which may not align with your wishes.`,
  },
  {
    question: "What documents are required to register a will?",
    answer: `The primary documents generally required are a valid passport and, if you are a resident, your Emirates ID.`,
  },
  {
    question: "How long does the will registration process take?",
    answer: `The entire process, from the initial consultation to receiving the final registered document, can typically be completed within 7 to 10 working days. The timeline can vary depending on the complexity of the will and the specific Court procedures for registry.`,
  },
  {
    question: "Is the will registration process confidential?",
    answer: `Yes, the process is confidential. The details of your will are kept private and are only accessible by the authorized legal and judicial departments involved in the registration process.`,
  },
  {
    question: "Do I have to be a UAE resident to register a will?",
    answer: `No, you do not have to be a resident of the UAE to register a will. Non-residents who own assets in the UAE can also register a will to ensure their assets are protected and distributed according to their wishes.`,
  },
  {
    question: "Can a single will cover assets in multiple emirates?",
    answer: `Yes, a single will registered with the Abu Dhabi Judicial Department (ADJD) can cover assets located in all seven emirates. A will registered with the DIFC Courts typically covers assets in Dubai and Ras Al Khaimah. However, as of June 2019, DIFC Wills can now cover worldwide assets, not just those in Dubai and RAK. The guardianship provisions, however, continue to be valid for minors habitually residing in either Dubai or Ras Al Khaimah.`,
  },
];

const WillsForNonMuslims = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wills-section" aria-label="Frequently Asked Questions about non-Muslim Wills in the UAE">
      <img 
        src={WillsImg}
        alt="Wills Registration Process"
        className="wills-header-img"
      />
      <h2 tabIndex={-1}>Frequently Asked Questions about non-Muslim Wills in the UAE</h2>

      {faqs.map(({ question, answer }, idx) => (
        <div key={idx} className="faq-item">
          <h3 
            id={`faq-header-${idx}`}
            className="faq-question" 
            onClick={() => toggleFaq(idx)} 
            tabIndex={0} 
            onKeyDown={e => { if(e.key === 'Enter' || e.key === ' ') toggleFaq(idx); }}
            role="button"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            {idx + 1}. {question}
          </h3>
          {openIndex === idx && (
            <div
              id={`faq-panel-${idx}`}
              className="faq-answer"
              role="region"
              aria-labelledby={`faq-header-${idx}`}
            >
              <p>{answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default WillsForNonMuslims;
