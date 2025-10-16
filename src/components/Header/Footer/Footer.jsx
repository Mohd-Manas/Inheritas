import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4 text-white">Inheritas</h4>
            <p className="text-primary-100 mb-4 leading-relaxed">
              A unit of Three Keys Consulting FZ LLC
            </p>
            <div className="flex items-start gap-3 text-primary-100">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary-300" />
              <p className="text-sm leading-relaxed">
                18th Floor, Sheikh Rashid Tower, DWTC, Dubai, United Arab Emirates
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-primary-100 hover:text-white transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-100">
                <FaEnvelope className="flex-shrink-0 text-primary-300" />
                <a
                  href="mailto:Sanjana.inheritas@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sanjana.inheritas@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-100">
                <FaPhone className="flex-shrink-0 text-primary-300" />
                <a href="tel:0585944811" className="hover:text-white transition-colors duration-200">
                  0585944811
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-100">
                <FaClock className="mt-1 flex-shrink-0 text-primary-300" />
                <div>
                  <p className="font-semibold text-white mb-1">Working Hours</p>
                  <p className="text-sm">Mon – Fri: 09:00 AM – 06:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-primary-700">
        <div className="container-custom py-6">
          <p className="text-center text-primary-200 text-sm">
            &copy; {currentYear} Inheritas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
