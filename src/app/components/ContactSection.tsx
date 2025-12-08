"use client";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.main
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-white dark:bg-neutral-950"
    >
      {/* Header Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Say Hello 👋
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
          You can reach out to me directly at{" "}
          <a
            href="mailto:koshishkhadka364@gmail.com"
            className="text-blue-700 dark:text-blue-400 underline"
          >
            koshishkhadka364@gmail.com
          </a>{" "}
          or use the contact details below.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid gap-8 md:grid-cols-3 w-full max-w-4xl text-center md:text-left items-stretch"
      >
        {/* Email */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition h-full">
          <Mail className="w-8 h-8 mb-3 text-blue-700 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Mail
          </h3>
          <a
            href="mailto:koshishkhadka364@gmail.com"
            className="text-gray-700 dark:text-gray-300 underline"
          >
            koshishkhadka364@gmail.com
          </a>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition h-full">
          <MapPinHouse className="w-8 h-8 mb-3 text-blue-700 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Address
          </h3>
          <p className="text-gray-700 dark:text-gray-300">Kapan, Kathmandu</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition h-full">
          <Phone className="w-8 h-8 mb-3 text-blue-700 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Phone
          </h3>
          <a
            href="tel:9843023686"
            className="text-gray-700 dark:text-gray-300 underline"
          >
            9843023686
          </a>
        </div>
      </motion.div>

      {/* Footer Line */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center">
        Let’s work together to build something amazing 🚀
      </p>
    </motion.main>
  );
};

export default ContactSection;
