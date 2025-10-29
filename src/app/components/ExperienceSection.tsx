import React from "react";
import { TimelineLayout } from "./timeline/timeline-layout";
import { TimelineElement } from "../../../types";
import {
  BookOpenText,
  Briefcase,
  GraduationCap,
  NotebookPen,
} from "lucide-react";
import { motion } from "framer-motion";
const ExperienceSection = () => {
  const timelineItems: TimelineElement[] = [
    {
      date: "2014-2019",
      title: "Secondary Education",
      description:
        "Completed Secondary level education from Valley public high school",
      icon: <BookOpenText />,
      color: "muted",
    },
    {
      date: "2019 - 2021",
      title: "Higher Secondary School",
      description: "Completed Higher Secondary School from Uniglobe Ss college",
      icon: <NotebookPen />,
      color: "secondary",
    },
    {
      date: "2021 - 2024",
      title: "Bachelor of Science (Hons) in Computer Science",
      description:
        "Completed Bachelor's degree in Computer Science from Herald College Kathmandu",
      icon: <GraduationCap />,
      color: "muted",
    },
    {
      date: "2025",
      title: "Internship in Software Engineering",
      description:
        "I did an Internship with Aman Technologies, in Software Engineering. I worked on a projects that involved developing web applications (map based) using React/Nextjs which were deployed on Vercel ",
      icon: <Briefcase />,
      color: "muted",
    },
  ];
  return (
    <motion.main
      className="flex flex-col min-h-screen items-center justify-center pt-20"
      id="experience"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <p className="text-base text-center mb-4 px-4 ">
        Here is a brief overview of my educational and professional journey.
      </p>
      <div className="w-full flex justify-center px-4 sm:px-12">
        <TimelineLayout
          items={timelineItems}
          size="lg"
          className="max-w-xl sm:max-w-3xl text-xl [&_svg]:w-10 [&_svg]:h-10 [&_li]:py-6"
        />
      </div>
    </motion.main>
  );
};

export default ExperienceSection;
