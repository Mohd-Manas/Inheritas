import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import IntroImg from "../../assets/Homepage.jpg";
import './Intro.css';
import Button from "../../components/UI/Button";

const Intro = () => {
  const benefits = [
    "Your estate is managed according to your specific instructions",
    "Your loved ones are financially protected",
    "Potential disputes are minimized",
    "Your children's guardianship is decided by you, not the court",
    "Your assets are distributed quickly and efficiently without unnecessary delays"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="intro-section">
      <div className="intro-wrapper">
        {/* Left Content */}
        <motion.div
          className="intro-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <motion.h2 variants={fadeInUp}>Introduction</motion.h2>
          <motion.div className="intro-text" variants={fadeInUp} transition={{ delay: 0.2 }}>
            <p>
              Inheritance in the United Arab Emirates is governed by a unique blend of UAE Federal Laws,
              local emirate regulations, and Sharia principles. While the UAE is home to a large expatriate
              population, its legal system applies Sharia principles to inheritance cases by default,
              regardless of the deceased's nationality or religion — unless there is a registered Will in place.
            </p>
            <p>
              This means that without proper planning, your assets may not be distributed according to your
              personal wishes, and your family could face legal complexities and delays during an already
              difficult time.
            </p>
            <p>
              Having a legally prepared and registered Will or estate plan ensures your wishes are respected
              and your family is spared unnecessary emotional and legal burden. Careful estate planning helps
              safeguard your legacy for future generations and provides clear guidance to executors and beneficiaries.
            </p>
          </motion.div>

          <motion.ul className="intro-benefits" variants={fadeInUp} transition={{ delay: 0.3 }}>
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <FaCheckCircle className="check-icon" /> {benefit}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="intro-button" variants={fadeInUp} transition={{ delay: 0.9 }}>
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact'}>
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="intro-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={IntroImg} alt="Estate Planning in UAE" className="intro-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
