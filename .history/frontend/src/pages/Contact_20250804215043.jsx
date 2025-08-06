// frontend/src/pages/Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would send the form data to your backend API.
    console.log("Form submitted with data:", formData);
    alert(
      "Thank you for your message! (Form submission is not yet functional)"
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const contactDetails = [
    {
      icon: <FaPhone size={24} className="text-blue-600 dark:text-blue-400" />,
      text: "+95 9448023128",
      link: "tel:+1234567890",
    },
    {
      icon: (
        <FaEnvelope size={24} className="text-blue-600 dark:text-blue-400" />
      ),
      text: "sleepytothehead@gmail.com",
      link: "mailto:sleepytothehead@gmail.com",
    },
    {
      icon: (
        <FaMapMarkerAlt
          size={24}
          className="text-blue-600 dark:text-blue-400"
        />
      ),
      text: "City, Country",
      link: "#", // No link for location
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-8 pt-24 md:pt-16 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-montserrat font-bold text-black dark:text-white mb-12 tracking-tight"
      >
        Get In Touch
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg backdrop-saturate-150 p-8 rounded-lg shadow-xl border border-gray-300/50 dark:border-gray-700/50 text-left"
        >
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Send me a message
          </h3>
          <p className="font-raleway text-gray-800 dark:text-gray-200 mb-6">
            I'm currently open to new opportunities. Let's connect!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors font-montserrat"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Details and Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg backdrop-saturate-150 p-8 rounded-lg shadow-xl border border-gray-300/50 dark:border-gray-700/50 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-left">
              My Information
            </h3>
            <div className="space-y-6 text-left">
              {contactDetails.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-center gap-4 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  <span className="font-raleway text-lg">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-start gap-6 mt-12"
          >
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 dark:bg-gray-700/80 hover:bg-gray-700 dark:hover:bg-gray-600 text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 dark:bg-gray-700/80 hover:bg-gray-700 dark:hover:bg-gray-600 text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
