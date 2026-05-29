"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/timeline/Footer";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/src/actions/project";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  preview_url: string;
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const technologies = ["react", "mongodb", "expressjs", "nodejs", "vercel"];

  // console.log(projectId);
  const { data, isLoading, isError } = useQuery<Project>({
    queryKey: ["ProjectDetail", projectId],
    queryFn: async () => {
      if (!projectId) {
        throw new Error("Project ID is missing");
      }
      const response = await getProjectById(projectId);
      if (response?.status === "success") {
        return response.data;
      }
      throw new Error(response?.message || "Failed to fetch project");
    },
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
    <div>
      <Navbar />
      <div className="pt-20 px-4 md:px-6 max-w-7xl m-auto min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:p-8 order-2 md:order-1">
          <Link
            href={"/"}
            className="flex items-center gap-2 border-b border-b-gray-400 pb-6"
          >
            <MoveLeft className="w-4 h-4" />
            <p className="text-[11px] font-semibold">BACK TO PROJECTS</p>
          </Link>
          <div className="pt-2 space-y-4">
            <h2 className="text-lg md:text-xl lg:text-3xl font-bold">
              {data?.title}
            </h2>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[7px] md:text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 px-1 md:px-2 py-0.5 md:py-1 rounded border border-gray-100 dark:border-white/10 uppercase transition-colors duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <img
              src={data?.image_url}
              alt={data?.title}
              className="w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
