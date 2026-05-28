"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/src/actions/project";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  preview_url: string;
};

const ProjectsSection = () => {
  const fetchAllProjects = async () => {
    const result = await getAllProjects();
    if (result?.status === "success") {
      return result.projects ?? [];
    } else {
      throw new Error(result?.message || "Failed to fetch projects");
    }
  };

  const { data, isLoading, isError } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchAllProjects,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading projects...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <p className="text-lg text-red-500">
          {" "}
          Error loading projects. Please try again later.{" "}
        </p>{" "}
      </div>
    );
  }

  return (
    <motion.main
      className="flex flex-col pt-20"
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
      {/* <div className="grid grid-cols-1 mt-6 p-2 md:max-w-[90%] md:m-auto md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      <div className="grid grid-cols-2 mt-6 sm:px-6 px-4 md:px-0 lg:px-8 max-w-7xl md:m-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length === 0 ? (
          <div className="col-span-full text-center">
            <p className="text-lg text-gray-500">No projects to display.</p>
          </div>
        ) : (
          data?.map((project) => {
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
          })
        )}
      </div>
    </motion.main>
  );
};

export default ProjectsSection;
