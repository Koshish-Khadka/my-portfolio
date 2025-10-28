"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const AdminPage = () => {
  return (
    <div className="w-6xl m-auto ">
      <div className="border-b-2 py-3 mb-6">
        <h1 className="text-3xl font-extrabold">Projects</h1>
        <p className="text-lg text-gray-700 mt-3">Explore your Projects</p>
      </div>
      <div className="grid grid-cols-1 mt-6 space-y-5 md:max-w-11/12 md:m-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />
        <ProjectCard
          image="https://cdn.dribbble.com/userupload/6983412/file/original-6880f4422a5e8d6ec43d1a8b08bf945a.jpg?resize=752x&vertical=center"
          title="Job Portal App"
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />{" "}
        <ProjectCard
          image="https://cdn.dribbble.com/userupload/6983412/file/original-6880f4422a5e8d6ec43d1a8b08bf945a.jpg?resize=752x&vertical=center"
          title="Job Portal App"
          description="A full-stack job portal app built with React, Node.js, and MongoDB, featuring JWT auth and real-time chat."
          liveLink="https://jobportal.example.com"
          githubLink="https://github.com/koshishkhadka/job-portal"
        />
      </div>
    </div>
  );
};

export default AdminPage;
