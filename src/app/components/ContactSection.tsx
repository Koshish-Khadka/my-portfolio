"use client";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <main
      id="contact"
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

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 w-full max-w-4xl text-center md:text-left"
      >
        {/* Email */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md transition">
          <Mail className="w-8 h-8 mb-3 text-blue-700 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Mail
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            koshishkhadka364@gmail.com
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md transition">
          <MapPinHouse className="w-8 h-8 mb-3 text-blue-700 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Address
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Kapan, Kathmandu
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md transition">
          <Phone className="w-8 h-8 mb-3 text-blue-700 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Phone
          </h3>
          <p className="text-gray-700 dark:text-gray-300">9843023686</p>
        </div>
      </motion.div>

      {/* Footer Line */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center">
        Let’s work together to build something amazing 🚀
      </p>
    </main>
  );
};

export default ContactSection;
