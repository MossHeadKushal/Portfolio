import ecommerceImage from "../assets/projects/e-commerce.png";
import netflixImage from "../assets/projects/netflix.png";
import ticTacToeImage from "../assets/projects/tic-tac-toe.png";
import chatAppImage from "../assets/projects/chatapp.png";

export const HERO_CONTENT = `I am a passionate Frontend Developer with expertise in React and Next.js. I create dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in JavaScript and a keen eye for design, I am dedicated to building high-quality, efficient, and visually appealing websites. Let's work together to bring your ideas to life!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Frontend Developer",
    company: "Multiplai Technologies",
    description: `Designed and developed user interfaces for web applications using React.js and Next.js, ensuring responsive design and optimal performance. Collaborated with backend developers to integrate APIs and enhance application functionality. Implemented best practices for code quality, maintainability, and scalability.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2025 - Present",
    role: "React Native Developer",
    company: "Multiplai Technologies",
    description: `Designed and developed mobile applications using React Native, ensuring cross-platform compatibility and optimal performance. Worked closely with UI/UX designers to create intuitive user interfaces and enhance user experience. Integrated third-party APIs and services to extend application functionality.`,
    technologies: ["React Native", "JavaScript", "Node.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Store",
    image: ecommerceImage,
    description:
      "A modern e-commerce store with a product catalog, shopping cart, checkout workflow, and secure authentication.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Netflix Clone",
    image: netflixImage,
    description:
      "A streaming UI clone featuring movie browsing, responsive media cards, and a polished playback interface.",
    technologies: ["React", "JavaScript", "CSS", "TMDB API", "Firebase"],
  },
  {
    title: "Tic Tac Toe Game",
    image: ticTacToeImage,
    description:
      "A classic Tic Tac Toe game with interactive player turns, win detection, and responsive gameplay.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Chat App",
    image: chatAppImage,
    description:
      "A real-time chat application that supports instant messaging, multiple conversations, and a clean interface.",
    technologies: ["React", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Mid Baneshwor Kathmandu, Nepal",
  phoneNo: "+977-9860575731",
  email: "kharel.kushal69@gmail.com",
};
