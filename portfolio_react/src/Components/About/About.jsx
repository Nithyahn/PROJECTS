import React from "react";
import mypic from "../../assets/mypic.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaTools, FaLightbulb } from "react-icons/fa"; // You can choose either
import { PiStudentFill } from "react-icons/pi";


const About = () => {
  return (
    <div id="About" className="bg-[#171d32] min-h-screen px-6 md:px-16 py-16">
      {/* Card-style container */}
      <div className="bg-[#121212] rounded-2xl p-8 md:p-12 shadow-lg text-white">
        {/* About section - two columns */}
        <div className="md:flex items-start md:justify-between gap-12">
          {/* Left - Text */}
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold">About</h2>
            <h3 className="text-2xl font-semibold text-purple-400">Nithya HN</h3>
            <p className="text-gray-300 leading-relaxed">
              I’m from the beautiful town of Chikkamagaluru, known for its greenery, hills, and fresh coffee ☕. Growing up there made me really appreciate nature and the peaceful environment around me. It also taught me the value of staying connected with people and being part of a supportive community.
            </p>
            <p className="text-gray-300">
              With a strong inclination toward practical problem-solving, I aim to explore diverse opportunities across industries where I can apply my skills to meaningful projects. I enjoy turning ideas into solutions that make a difference.
            </p>
            <p className="text-gray-300">
              I'm always curious to learn emerging technologies and stay aligned with the evolving tech world. I value collaboration, continuous growth, and creating impact through consistent efforts and innovation.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
  <PiStudentFill className="text-xl text-green-300" />
  Education
</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { degree: "B.Tech - CSE", years: "2022 – 2026", cgpa: "8.49", school: "PES University" },
              { degree: "12th Grade", years: "2020 – 2022", cgpa: "97.5%", school: "BGS Science and Commerce PU College" },
              { degree: "10th Grade", years: "2015 – 2020", cgpa: "93.92%", school: "Barathiya Coffee Vidyalaya" }
            ].map((edu, i) => (
              <div key={i} className="border border-purple-400 bg-black bg-opacity-30 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-purple-400 text-xl" />
                  <p className="font-semibold text-lg">{edu.degree}</p>
                </div>
                <p className="text-gray-400 text-sm">{edu.years}</p>
                <p className="text-gray-400 text-sm">CGPA / Score: <span className="text-white">{edu.cgpa}</span></p>
                <p className="text-purple-300 text-sm mt-1">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
    <FaTools className="text-xl text-green-400" /> Skills
  </h3> 
          <div className="flex flex-wrap gap-3">
            {[
              "Html", "CSS", "JavaScript",
              "React", "Mysql", "MongoDB",
              "C++", "C", "Python",
              "MERN Stack", "Git", "Github"
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800 hover:bg-gray-700 transition-all px-4 py-1 text-sm rounded-full border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
    <FaBriefcase className="text-xl text-yellow-400" /> Work Experience
  </h3>
          <div className="border-l-2 border-purple-500 pl-6 space-y-8">
            {[
              {
                date: "June 2024 - July 2024 (1month)",
                title: "Software Development Intern",
                company: "DeepThought(Startup)",
                type: "Internship (Remote)",
              },
              {
                date: "May 2024 – June 2024 (1 month)",
                title: "Campus Ambassador",
                company: "Sharpener",
                type: "(Remote)",
              },
            ].map((job, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.15rem] top-1 w-3 h-3 bg-purple-500 rounded-full" />
                <div>
                  <p className="text-sm text-gray-400">{job.date}</p>
                  <h4 className="font-semibold text-white">{job.title}</h4>
                  <p className="text-sm text-purple-300">{job.company} | {job.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">🏆 Achievements</h3>
          <div className="border-l-2 border-purple-500 pl-6 space-y-8">
            {[
              {
                title: "Salesforce Product Jam Winner",
                desc: "ME and my team won first in the product Jam",
                date: "February 2025",
              },
              {
                title: "Won National Library Week 2024",
                desc: "Won quiz conducted by grimmreaders club PES university",
                date: "March 2025",
              },
              {
                title: "CNR Rao Scholarship",
                desc: "Won CNR award for securing 8.96cgpa in third sem ",
                date : "2024"
              },
            ].map((cert, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.15rem] top-1 w-3 h-3 bg-purple-500 rounded-full" />
                <div>
                  <h4 className="font-semibold text-white">{cert.title}</h4>
                  <p className="text-sm text-gray-400">{cert.desc} <span className="text-white">({cert.date})</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* Soft Skills */}
<div className="mt-12">
  <h3 className="text-2xl font-semibold mb-4 text-purple-400">💡 Soft Skills</h3>
  <div className="flex flex-wrap gap-4">
    {[
      { skill: "🤝 Teamwork" },
      { skill: "🗣 Communication" },
      { skill: "🧩 Problem Solving" },
      { skill: "⏳ Time Management" },
      { skill: "🧠 Critical Thinking" },
      { skill: "🎨 Creativity" },
    ].map((item, i) => (
      <span
        key={i}
        className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-4 py-2 text-sm rounded-full shadow-md transform transition-transform hover:scale-105 hover:shadow-lg cursor-default"
      >
        {item.skill}
      </span>
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default About;
