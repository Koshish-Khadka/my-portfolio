import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const tools = [
    "/expo.svg",
    "/docker.svg",
    "/git.svg",
    "/nextjs.svg",
    "/react.svg",
    "/github.svg",
    "/framer.svg",
    "/css.svg",
    "/nodejs.svg",
    "/typescript.svg",
  ];

  return (
    <section
      className="text-center flex flex-col px-4 md:px-8 lg:px-16 m-auto min-h-screen max-w-5xl pt-20"
      id="about"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-base md:text-lg mb-4">
          After completing my Bachelor’s degree from{" "}
          <strong>Herald College Kathmandu</strong>, I have dedicated myself to
          advancing my career in technology. My passion lies in developing
          innovative solutions, solving challenging problems, and delivering
          seamless user experiences.
        </p>
        <p className="text-base md:text-lg mb-4">
          Beyond coding, I enjoy <strong>travelling</strong> and{" "}
          <strong>bike riding</strong>, exploring new places and experiences.
          These hobbies fuel my creativity and inspire me to approach challenges
          from different perspectives.
        </p>
        <p className="text-base md:text-lg">
          Currently, I am focused on building my skills further and contributing
          to exciting tech projects that make a meaningful impact.
        </p>
      </motion.div>

      <div className="mt-16">
        <p className="text-2xl underline">Tools I use</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-2 border rounded-full hover:transition-all hover:bg-gray-200 dark:hover:bg-slate-900 duration-200 hover:scale-110"
            >
              <Image
                src={tool}
                width={40}
                height={40}
                alt="icon"
                className="dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
