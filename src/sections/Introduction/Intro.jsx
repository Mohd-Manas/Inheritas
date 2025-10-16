import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import IntroImg from "../../assets/Homepage.jpg";
import Section from "../../components/UI/Section";
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
    <Section className="bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <motion.h2 
            className="text-primary-900 font-bold"
            variants={fadeInUp}
          >
            Introduction
          </motion.h2>
          
          <motion.div 
            className="space-y-4 text-neutral-700"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
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

          <motion.div 
            className="space-y-3"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-neutral-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.9 }}
            className="pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <motion.img
              src={IntroImg}
              alt="Estate Planning in UAE"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
          </div>
          
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Intro;
