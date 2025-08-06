// frontend/src/pages/Contact.jsx

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400 dark:text-blue-300">
        Get in Touch
      </h2>
      <div className="max-w-lg w-full bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-xl">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white dark:text-gray-900 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-md bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-600 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white dark:text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-600 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-lg font-medium text-white dark:text-gray-900 mb-2"
            >
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 rounded-md bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-600 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Subject of your message"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white dark:text-gray-900 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-3 rounded-md bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-600 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-y"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md
                       transition-all duration-300 transform hover:scale-105 shadow-md
                       dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
