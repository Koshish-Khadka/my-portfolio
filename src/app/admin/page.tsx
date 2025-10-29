"use client";
import { deleteProjectById, getAllProjects } from "@/src/actions/project";
import { Button } from "@/src/components/ui/button";
import React, { useEffect } from "react";
type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  preview_url: string;
};

const AdminPage = () => {
  const [projectdata, setProjectdata] = React.useState<Project[]>([]);
  
  const fetchAllProjects = async () => {
    const result = await getAllProjects();
    if (result?.status === "success") {
      // console.log("Projects:", result.projects);
      setProjectdata(result.projects ?? []);
    } else {
      console.error("Error fetching projects:", result?.message);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  // handle Project Delete
  const handleDelete = async (projectID: string) => {
    // console.log("Project is", projectID);
    try {
      const result = await deleteProjectById(projectID);
      if (result?.status === "error") {
        alert("unable to deleted");
      }
      alert("Project deleted successfully");
      fetchAllProjects();
    } catch (error) {
      console.log("Failed to delete project", error);
    }
  };
  return (
    <div className="w-6xl m-auto ">
      <div className="border-b-2 py-3 mb-6">
        <h1 className="text-3xl font-extrabold">Projects</h1>
        <p className="text-lg text-gray-700 mt-3">Explore your Projects</p>
      </div>
      <div className="grid grid-cols-1 mt-6 space-y-5 md:max-w-11/12 md:m-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectdata.map((project) => (
          <div
            key={project.id} // ✅ Add a unique key
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden max-w-sm mx-auto transition-transform hover:scale-105 duration-300 ease-in-out"
          >
            {/* Project Image */}
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-between mt-4 gap-2">
                {project.preview_url && (
                  <a
                    href={project.preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Live Preview
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <div>
                <Button
                  variant={"destructive"}
                  className="w-full"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
