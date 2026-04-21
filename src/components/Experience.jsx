import React from "react";
import { EXPERIENCES } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const getTechIcon = (tech) => {
  switch (tech) {
    case "React.js":
    case "React":
      return <RiReactjsLine className="text-blue-400" />;
    case "Next.js":
      return <TbBrandNextjs className="text-white" />;
    case "React Native":
      return <TbBrandReactNative className="text-cyan-500" />;
    case "Node.js":
      return <FaNodeJs className="text-green-500" />;
    case "MongoDB":
    case "mongoDB":
      return <SiMongodb className="text-green-400" />;
    case "JavaScript":
    case "Javascript":
      return <SiJavascript className="text-yellow-400" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-600" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-cyan-400" />;
    case "NativeWind CSS":
      return <BiCodeAlt className="text-purple-400" />;
    default:
      return <BiCodeAlt className="text-gray-400" />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="pb-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-stone-800 bg-stone-950/80 p-8 shadow-xl shadow-black/20">
        <h2 className="mb-8 text-center text-4xl">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCES.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-stone-800 bg-stone-950/80 p-6 shadow-xl shadow-black/20"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase text-stone-500">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-stone-400">{item.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 p-2 text-xl"
                      title={tech}
                    >
                      {getTechIcon(tech)}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-stone-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
