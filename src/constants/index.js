import ecommerceImage from "../assets/projects/e-commerce.png";
import netflixImage from "../assets/projects/netflix.png";
import ticTacToeImage from "../assets/projects/tic-tac-toe.png";
import chatAppImage from "../assets/projects/chatapp.png";

export const HERO_CONTENT = `I am a passionate Frontend Developer with expertise in React and Next.js. I create dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in JavaScript and a keen eye for design, I am dedicated to building high-quality, efficient, and visually appealing websites. Let's work together to bring your ideas to life!`;

export const ABOUT_TEXT = `I am a passionate Frontend and Mobile App Developer with expertise in React, Next.js, and React Native. I specialize in creating dynamic, responsive web and mobile applications that provide seamless user experiences across all platforms.

With a strong foundation in JavaScript/TypeScript and a keen eye for design, I am dedicated to building high-quality, efficient, and visually appealing interfaces. Whether it’s a web dashboard or a cross-platform mobile app, I focus on delivering performance and polish. Let’s work together to bring your ideas to life!`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Frontend Developer",
    company: "Multiplai Technologies",
    description: `Designed and developed user interfaces for web applications using React.js and Next.js, ensuring responsive design and optimal performance. Collaborated with backend developers to integrate APIs and enhance application functionality. Implemented best practices for code quality, maintainability, and scalability.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","TypeScript","Tailwind CSS"],
  },
  {
    year: "2025 - Present",
    role: "React Native Developer",
    company: "Multiplai Technologies",
    description: `Designed and developed mobile applications using React Native, ensuring cross-platform compatibility and optimal performance. Worked closely with UI/UX designers to create intuitive user interfaces and enhance user experience. Integrated third-party APIs and services to extend application functionality.`,
    technologies: ["React Native", "JavaScript", "Node.js", "TypeScript","NativeWind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Store",
    image: ecommerceImage,
    description:
      "A modern e-commerce store with a product catalog, shopping cart, checkout workflow, and secure authentication.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link:"https://kushalwears.kharel-kushal57.workers.dev/",
  },
  {
    title: "Netflix Clone",
    image: netflixImage,
    description:
      "A streaming UI clone featuring movie browsing, responsive media cards, and a polished playback interface.",
    technologies: ["React", "JavaScript", "CSS", "TMDB API", "Firebase"],
    link:"https://netflix-clone.kharel-kushal57.workers.dev/",
  },
  {
    title: "Tic Tac Toe Game",
    image: ticTacToeImage,
    description:
      "A classic Tic Tac Toe game with interactive player turns, win detection, and responsive gameplay.",
    technologies: ["React", "JavaScript", "CSS"],
    link:"https://tic-tac-toe-game.kharel-kushal57.workers.dev/",
  },
  {
    title: "Chat App",
    image: chatAppImage,
    description:
      "A real-time chat application that supports instant messaging, multiple conversations, and a clean interface.",
    technologies: ["React", "JavaScript"],
    link:"https://chatapp.kharel-kushal57.workers.dev/",
  },
];

export const CONTACT = {
  address: "Mid Baneshwor Kathmandu, Nepal",
  phoneNo: "+977-9860575731",
  email: "kharel.kushal69@gmail.com",
};
