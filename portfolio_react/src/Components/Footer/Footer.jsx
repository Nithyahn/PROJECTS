import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465687] text-white p-10 md:p-12 items-center"
    >
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact Me!</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out..
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a 
            href="mailto:nithyahn8@gmail.com"
            className="hover:underline"
          >
            nithyahn8@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/nithya-h-n-62682b2b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/Nithyahn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
