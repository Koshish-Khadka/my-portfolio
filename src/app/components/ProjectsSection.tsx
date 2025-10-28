import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/src/actions/project";

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
    </main>
  );
};

export default ProjectsSection;
