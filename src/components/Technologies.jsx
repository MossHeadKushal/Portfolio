import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-blue-400" />, name: "React" },
    { icon: <TbBrandNextjs className="text-white" />, name: "Next.js" },
    {
      icon: <TbBrandReactNative className="text-cyan-500" />,
      name: "React Native",
    },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  ];

  return (
    <section id="technologies" className="pb-24">
      <h2 className="my-20 text-center text-4xl font-light tracking-tight">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-all hover:bg-neutral-900"
          >
            <div className="text-7xl lg:text-8xl">{tech.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
