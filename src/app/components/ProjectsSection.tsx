"use client";

import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/src/actions/project";
import { motion } from "framer-motion";
type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  preview_url: string;
};

const ProjectsSection = () => {
  const [projectdata, setProjectdata] = React.useState<Project[]>([]);
  useEffect(() => {
    const fetchAllProjects = async () => {
      const result = await getAllProjects();
      if (result?.status === "success") {
        // console.log("Projects:", result.projects);
        setProjectdata(result.projects ?? []);
      } else {
        console.error("Error fetching projects:", result?.message);
      }
    };
    fetchAllProjects();
  }, []);

  // console.log("Project Datas", projectdata);

  return (
    <motion.main
      className="flex flex-col min-h-screen pt-12"
      id="projects"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center p-6">
        <h2 className=" text-2xl md:text-4xl font-semibold mb-6">
          My projects
        </h2>

        <p className=" text-base md:text-lg  mb-4 ">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in web development.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-6 p-2 md:max-w-[90%] md:m-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectdata.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.image_url}
              title={project.title}
              description={project.description}
              liveLink={project.preview_url}
              githubLink={project.github_url}
            />
          );
        })}
      </div>
    </motion.main>
  );
};

export default ProjectsSection;
