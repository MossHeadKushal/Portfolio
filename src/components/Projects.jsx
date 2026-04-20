import React from "react";
import { PROJECTS } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const getTechIcon = (tech) => {
  switch (tech) {
    case "React":
      return <RiReactjsLine className="text-blue-400" />;
    case "Next.js":
      return <TbBrandNextjs className="text-white" />;
    case "Node.js":
      return <FaNodeJs className="text-green-500" />;
    case "Express":
      return <SiExpress className="text-gray-400" />;
    case "MongoDB":
      return <SiMongodb className="text-green-400" />;
    case "JavaScript":
      return <SiJavascript className="text-yellow-400" />;
    case "CSS":
      return <SiCss3 className="text-blue-500" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-cyan-400" />;
    case "Firebase":
      return <SiFirebase className="text-orange-400" />;
    case "TMDB API":
      return <BiCodeAlt className="text-purple-400" />;
    default:
      return <BiCodeAlt className="text-gray-400" />;
  }
};

const Projects = () => {
  return (
    <section id="projects" className="pb-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-stone-800 bg-stone-950/80 p-8 shadow-xl shadow-black/20">
        <h2 className="mb-8 text-center text-4xl">Projects</h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded bg-stone-900 p-2 text-2xl"
                      title={tech}
                    >
                      {getTechIcon(tech)}
                    </div>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm text-blue-400 hover:underline">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
