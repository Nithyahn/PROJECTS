import React from "react";
import dtLogo from "../../assets/dt.jpeg"; // adjust path based on your file location
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
  FaGitAlt,
  FaGithub,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { SiRedis, SiMongodb, SiMysql, SiC, SiCplusplus } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";

const techStack = [
  { icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML" },
  { icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS" },
  { icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" size={40} />, name: "React" },
  { icon: <SiMongodb color="#47A248" size={40} />, name: "MongoDB" },
  { icon: <SiMysql color="#00758F" size={40} />, name: "MySQL" },
  { icon: <FaGitAlt color="#F05032" size={40} />, name: "Git" },
  { icon: <FaGithub color="#fff" size={40} />, name: "GitHub" },
  { icon: <FaNode color="#339933" size={40} />, name: "Node.js" },
  { icon: <SiC color="#A8B9CC" size={40} />, name: "C" },
  { icon: <SiCplusplus color="#00599C" size={40} />, name: "C++" },
  { icon: <FaPython color="#3776AB" size={40} />, name: "Python" },
];

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Skills - Left Side */}
        <div className="flex flex-wrap gap-6 md:w-1/2 justify-center">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="p-4 bg-zinc-950 rounded-xl transform transition-transform hover:scale-110 shadow-md"
              title={tech.name}
            >
              {tech.icon}
            </span>
          ))}
        </div>

        {/* Experience - Right Side */}
        <div className="flex flex-col gap-6 md:w-1/2">
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center transform transition-transform hover:scale-105 hover:shadow-lg">
        <img
  src={dtLogo}
  alt="DeepThought Logo"
  className="w-14 h-14 rounded-full object-cover"
/>

  <span className="text-white">
    <h2 className="leading-tight font-semibold">Software Developer Intern</h2>
    <p className="text-sm leading-tight font-thin">DeepThought</p>
    <p className="text-sm p-2">Worked as a Software Developer Intern at DeepThought (June–July 2024), contributing to React-based development. Completed only one-month due to college commitments.</p>
  </span>
</div>



  <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center transform transition-transform hover:scale-105 hover:shadow-lg">
    <span className="text-white text-3xl font-bold px-3 py-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full">S</span>
    <span className="text-white">
      <h2 className="leading-tight font-semibold">Campus Ambassador</h2>
      <p className="text-sm leading-tight font-thin">Sharpener</p>
      <p className="text-sm p-2">Served as a Campus Ambassador at Sharpener (May–June 2024). Enjoyed collaborating with peers and promoting tech learning initiatives within the student community.</p>
    </span>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
