import React from "react";
import { PROJECTS } from "../constants";

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
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
