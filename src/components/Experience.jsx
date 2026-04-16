import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="pb-24">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div className="space-y-6">
        {EXPERIENCES.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-stone-800 bg-stone-950/80 p-6 shadow-xl shadow-black/20"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase text-stone-500">{item.year}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm text-stone-400">{item.company}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-stone-700 bg-stone-900 px-3 py-1 text-sm text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-stone-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
