"use client";

import { Button } from "@/src/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { getUserProfile } from "@/src/actions/auth";
import { useQuery } from "@tanstack/react-query";

type userProfile = {
  id: string;
  full_name: string;
  profile_picture_url: string;
  resume_url: string;
};

const HeroSection = () => {
  const fetchUserProfile = async () => {
    try {
      const result = await getUserProfile();
      if (result?.status === "success") {
        return result.profiles?.[0] ?? null;
      } else {
        console.log("Error fetching user profile:", result?.message);
      }
    } catch (error) {
      console.log("failed to fetch user profile", error);
    }
  };

  const { data, isLoading, isError } = useQuery<userProfile | null>({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <p className="text-lg text-red-500">
          Error loading user profile. Please try again later.{" "}
        </p>{" "}
      </div>
    );
  }
  if (isLoading) {
    return (
      <section className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 m-auto min-h-screen w-full max-w-5xl">
        <div className="animate-pulse flex flex-col items-center space-y-6 mt-16">
          <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-28 w-28" />
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-48" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-80" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-72" />
          <div className="flex gap-4 mt-6 flex-col sm:flex-row">
            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="flex flex-col justify-center items-center px-4 mt-20 md:px-8 lg:px-16 w-full m-auto max-w-5xl"
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img
        src={data?.profile_picture_url}
        alt="profile"
        className="rounded-full md:mt-24 w-28 h-28 md:w-36 md:h-36"
      />
      <div className="text-center mt-6">
        <p className="my-4 text-2xl md:text-3xl font-normal">
          Hi! I’m {data?.full_name}
        </p>
        <p className="text-2xl md:text-4xl font-semibold leading-snug mb-4">
          A developer passionate about crafting clean, efficient, and modern web
          experiences.
        </p>
        <p className="text-base md:text-lg w-full sm:max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          I have a strong interest in building engaging and user-friendly web
          experiences, with a keen focus on modern technologies like React,
          TypeScript, and the latest frontend frameworks. I love exploring new
          tools, creating interactive interfaces, and continuously learning to
          stay at the forefront of web development. My goal is to craft seamless
          and visually appealing applications while contributing to innovative
          tech projects.
        </p>
      </div>
      <div className="mt-8 py-4  flex flex-col space-y-4 sm:flex-row gap-4">
        <Button className="py-6 font-normal hover:scale-105 duration-200">
          <a href={"#projects"} className="flex items-center gap-2">
            view my work
            <MoveRight />
          </a>
        </Button>
        <Button className="py-6 font-normal hover:scale-105 duration-200">
          <a
            href={data?.resume_url || "#"}
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
