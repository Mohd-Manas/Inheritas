import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import ContactImg from "../../assets/contact-us.png";
import Section from "../../components/UI/Section";
import Button from "../../components/UI/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "Sanjana.inheritas@gmail.com",
      link: "mailto:Sanjana.inheritas@gmail.com"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "0585944811",
      link: "tel:0585944811"
    },
    {
      icon: FaClock,
      label: "Working Hours",
      value: "Mon – Fri: 09:00 AM – 06:00 PM"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "18th Floor, Sheikh Rashid Tower, DWTC, Dubai, United Arab Emirates"
    }
  ];

  return (
    <Section className="bg-neutral-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-primary-900 font-bold mb-4">Get In Touch</h2>
            <p className="text-neutral-600 text-lg">
              Have questions about estate planning? Our team is here to help you secure your legacy.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <item.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{item.label}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-neutral-600">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6 border-t border-neutral-200"
          >
            <p className="text-sm text-neutral-600 mb-2">Inheritas is a unit of</p>
            <a
              href="https://www.tkcfzllc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              Three Keys Consulting FZ LLC
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Message Sent!</h3>
              <p className="text-neutral-600">
                Thank you for contacting us. We'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <motion.img
                  src={ContactImg}
                  alt="Contact Us"
                  className=" mx-auto mb-4 object-cover"
                  style={{ width: '500px', height: '250px' }}
                />
                <p className="text-neutral-600 font-medium">
                  Get in touch with us for support now
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Name *"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="error-text">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email *"
                    className="input-field"
                  />
                  {errors.email && (
                    <p className="error-text">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone (Optional)"
                    className="input-field"
                  />
                  {errors.phone && (
                    <p className="error-text">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows="5"
                    placeholder="Message *"
                    className="textarea-field"
                  />
                  {errors.message && (
                    <p className="error-text">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
