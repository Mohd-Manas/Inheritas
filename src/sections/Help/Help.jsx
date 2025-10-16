import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Section from '../../components/UI/Section';

const helpData = [
  {
    title: 'Personalized Will Drafting',
    description:
      'We take the time to understand your family structure, financial situation, and specific wishes before preparing a Will that reflects your unique needs.',
  },
  {
    title: 'Expert Legal Consultation',
    description:
      'Our legal specialists guide you through every aspect of UAE inheritance laws, ensuring your Will is both valid and enforceable.',
  },
  {
    title: 'Seamless Will Registration',
    description:
      'We manage the entire submission process with the relevant UAE authorities, ensuring every step is completed without delays.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From your initial consultation to the moment your Will is registered, we\'re with you every step of the way - providing clarity, reassurance, and complete peace of mind.',
  },
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section className="bg-gradient-to-br from-primary-50/30 to-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary-900 font-bold mb-4">How INHERITAS Can Help</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            At INHERITAS, we understand that preparing a Will is a deeply personal matter - but also a critical legal safeguard. Our role is to make the
            process simple, transparent, and fully compliant with UAE laws.
          </p>
        </motion.div>

        <div className="space-y-4">
          {helpData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors duration-200"
                  aria-expanded={isActive}
                  aria-controls={`accordion-content-${index}`}
                >
                  <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-primary-600 flex-shrink-0" size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`accordion-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Help;
