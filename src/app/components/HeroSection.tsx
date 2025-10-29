"use client";
import { Button } from "@/src/components/ui/button";
import { useUser } from "@/src/context/usercontext";
import { Download, MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { user } = useUser();
  return (
    <motion.section
      className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 m-auto min-h-screen max-w-5xl"
      id="top"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img
        src={user?.profile_picture_url}
        alt="profile"
        width={112}
        height={80}
        className="rounded-full mt-16"
      />
      <div className="text-center">
        <p className="my-6 text-2xl md:text-3xl font-normal">
          Hi! I’m {user?.full_name}
        </p>
        <p className="text-2xl md:text-4xl font-semibold leading-snug mb-4 ">
          Passionate frontend web developer who loves clean code
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          I have a strong interest in building engaging and user-friendly web
          experiences, with a keen focus on modern technologies like React,
          TypeScript, and the latest frontend frameworks. I love exploring new
          tools, creating interactive interfaces, and continuously learning to
          stay at the forefront of web development. My goal is to craft seamless
          and visually appealing applications while contributing to innovative
          tech projects.
        </p>
      </div>
      <div className="mt-8 flex gap-x-4">
        <Button className="py-6 font-normal hover:scale-105 duration-200">
          <a href={"#projects"} className="flex items-center gap-2">
            view my work
            <MoveRight />
          </a>
        </Button>
        <Button className="py-6 font-normal hover:scale-105 duration-200">
          <a
            href={user?.resume_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            my resume <Download />
          </a>
        </Button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
