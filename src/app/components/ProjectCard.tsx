import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden w-full max-w-sm md:max-w-xs mx-auto transition-transform hover:scale-105 duration-300 ease-in-out">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-40 object-cover rounded-lg mb-4"
      />

      {/* Card Content */}
      <div className="p-4 md:p-6 flex flex-col gap-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base line-clamp-3">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-3 gap-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Live Preview
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;