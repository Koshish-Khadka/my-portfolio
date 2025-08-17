"use client";
import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    // <section className="flex flex-col justify-center items-center w-11/12 md:w-1/2 m-auto h-screen">
    <section
      className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 m-auto min-h-screen max-w-5xl"
      id="top"
    >
      <Image
        src={"/sunset.jpg"}
        alt="profile"
        width={112}
        height={80}
        className="rounded-full mt-16"
      />
      <div className="text-center">
        <p className="my-6 text-2xl md:text-3xl font-normal">
          Hi! I’m Koshish Khadka
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
          view my work
          <MoveRight />
        </Button>
        <Button className="py-6 font-normal hover:scale-105 duration-200">
          my resume <Download />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
