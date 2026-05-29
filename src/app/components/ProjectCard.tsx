import { ArrowUpRight, Github, Globe } from "lucide-react";
import React from "react";
import Link from "next/link";
interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  title,
  liveLink,
  githubLink,
}) => {
  const technologies = ["react", "mongodb", "expressjs", "nodejs", "vercel"];
  return (
    <div
      className="
group relative flex flex-col h-full w-full overflow-hidden rounded
bg-[#FAFAFA] border border-gray-200 shadow-sm
transition-all duration-500
hover:-translate-y-1
hover:shadow-lg md:hover:shadow-2xl
hover:shadow-black/5
dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10
"
    >
      <Link href={`/project/${id}`} className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />

          {/* Hover Button */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button className="flex w-full items-center justify-center gap-2 rounded bg-blue-900 text-xs md:text-sm px-3 md:px-4 py-2.5 md:py-3 font-bold text-white shadow-xl transition-colors duration-300 hover:bg-black">
              View Project Details
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-6 flex flex-col flex-grow">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-[11px] md:text-2xl font-bold text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h3>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-2">
            {/* Technologies */}
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
          </div>
        </div>
      </Link>

      {/* Bottom Links */}
      <div className="px-3 pb-3 md:px-6 md:pb-6 pt-0 flex gap-2 md:gap-3">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[10px] font-mono font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            <Github className="lucide lucide-github w-3 h-3 md:w-3.5 md:h-3.5" />
            REPO
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[10px] font-mono font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            <Globe className="lucide lucide-github w-3 h-3 md:w-3.5 md:h-3.5" />
            LIVE SITE
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
