import logo from "../assets/logoo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <a href="#home" aria-label="Home">
          <img src={logo} className="mx-2" width={80} height={60} alt="Logo" />
        </a>
        <div className="hidden items-center gap-6 text-sm uppercase tracking-[0.24em] text-stone-400 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#technologies" className="hover:text-white">
            Tech
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/your-facebook-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
