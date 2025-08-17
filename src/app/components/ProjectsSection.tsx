import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <main className="flex flex-col min-h-screen pt-16" id="projects">
      <div className="text-center p-6">
        <h2 className=" text-2xl md:text-4xl font-semibold mb-6">
          My projects
        </h2>

        <p className=" text-base md:text-lg  mb-4 ">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in web development.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-6 space-y-5 md:max-w-11/12 md:m-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          image="https://cdn.dribbble.com/userupload/6983412/file/original-6880f4422a5e8d6ec43d1a8b08bf945a.jpg?resize=752x&vertical=center"
          title="Job Portal App"
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />
        <ProjectCard
          image="https://cdn.dribbble.com/userupload/6983412/file/original-6880f4422a5e8d6ec43d1a8b08bf945a.jpg?resize=752x&vertical=center"
          title="Job Portal App"
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />
        <ProjectCard
          image="https://cdn.dribbble.com/userupload/6983412/file/original-6880f4422a5e8d6ec43d1a8b08bf945a.jpg?resize=752x&vertical=center"
          title="Job Portal App"
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />
        <ProjectCard
          image="https://cdn.dribbble.com/userupload/6983412/file/original-6880f4422a5e8d6ec43d1a8b08bf945a.jpg?resize=752x&vertical=center"
          title="Job Portal App"
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat. lore
          lore
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />
      </div>
    </main>
  );
};

export default ProjectsSection;
