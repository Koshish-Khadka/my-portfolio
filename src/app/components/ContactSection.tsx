import { Mail, MapPinHouse, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <main className="flex flex-col min-h-screen pt-16" id="contact">
      <div className="text-center p-6">
        <h2 className=" text-2xl md:text-4xl font-semibold mb-6">Say Hello!</h2>

        <p className=" text-base md:text-lg  mb-4 ">
          connect me through{" "}
          <a href="gmail.com" className="text-blue-800 underline">
            koshishkhadka364@gmail.com
          </a>{" "}
          or through this form.
        </p>
      </div>
      <div className=" mt-8 w-2/3 m-auto md:flex items-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-4 md:w-1/2 flex flex-col md:items-start "
        >
          <p className="text-3xl font-bold md:text-6xl pb-4">Lets work</p>
          <p className="text-3xl font-bold md:text-6xl">together</p>
          <div className="mt-8 flex flex-col justify-center items-center md:items-start space-y-2">
            <Mail />
            <p>Mail</p>
            <p>koshishkhadka364@gmail.com</p>
          </div>
          <div className="mt-8 flex flex-col justify-center items-center md:items-start space-y-2">
            <MapPinHouse />
            <p>Address</p>
            <p>Kapan,kathmandu</p>
          </div>
          <div className="mt-8 flex flex-col justify-center items-center md:items-start space-y-2">
            <Phone />
            <p>Phone</p>
            <p>9843023686</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col mt-6 pt-4 space-y-5 md:w-1/2 "
        >
          <input
            placeholder="Name"
            className="bg-white text-black py-2 rounded-md pl-4 border"
          />
          <input
            placeholder="Email"
            className="bg-white text-black py-2 rounded-md pl-4 border"
          />
          <input
            placeholder="Message"
            className="bg-white text-black py-2 rounded-md pl-4 h-28 border"
          />
          <button className="text-white py-3 bg-[#0C2340] hover:bg-white hover:text-black transition-all ease-in duration-300 delay-100">
            Submit
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactSection;
