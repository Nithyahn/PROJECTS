import React from "react";
const ProjectCard = ({ title, main, imgSrc, animation, demoLink, sourceLink }) => {
    return (
      <div className={`p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 ${animation}`}>
        <img className="p-2 rounded-xl" src={imgSrc} alt="Project banner" />
  
        <h3 className="px-4 text-xl md:text-2xl font-semibold leading-normal">{title}</h3>
  
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
  
        <div className="mt-2 p-2 md:p-3 flex gap-2 md:gap-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                Demo
              </button>
            </a>
          )}
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        </div>
      </div>
    );
  };
  

export default ProjectCard;
