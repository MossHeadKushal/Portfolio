import React from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section id="about" className="pb-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-stone-800 bg-stone-950/80 p-8 shadow-xl shadow-black/20">
        <h2 className="mb-8 text-center text-4xl">About Me</h2>
        <p className="text-lg leading-8 text-stone-300">{ABOUT_TEXT}</p>
      </div>
    </section>
  );
};

export default About;
