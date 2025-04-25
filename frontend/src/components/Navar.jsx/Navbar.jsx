import React from "react";
import logo from '../../assets/logo.png'; 
import starimg from '../../assets/star.png';
import starimg1 from '../../assets/star.png';


const NavLinks = [
  {
    id: 1,
    name: 'Home',
    link: "/#",
  },
  {
    id: 2,
    name: 'About Us',
    link: "/#",
  },
  {
    id: 3,
    name: 'Pricing',
    link: "/#",
  },
  {
    id: 4,
    name: 'Features',
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className>
      <div className="container flex justify-between py-6 px-6 sm:py-3 clash-display">
        <div className="flex items-center mb-16 ml-1">
          <img src={logo} alt="logo_img" className="w-9 bottom-20 transform translate-x-[-15%] translate-y-[-14%] z-[-1]"  />
          <a href="#" className="flex items-center justify-start text-xl sm:text-5xl font-bold top-0 left-0 mr-8 ">Uifry <sup style={{ fontSize: '0.6em' }}>™</sup> </a>
          <img src={starimg1} alt="star1" className="absolute top-30 left-10 z-100 transform rotate-[0deg] h-auto w-10 mr-19 mt-40 ml-10" />
          <ul className="flex items-center gap-0 mr-1">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id} className="mr-2">
                <a
                  href={link}
                  className={`inline-block py-5 px-5 ${name === 'Home' ? 'text-orange-500 font-bold' : 'hover:text-pink-400'} text-3xl`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-start justify-evenly gap-5 mr-8  ">
          <button style={{ borderRadius: '5px' }} className="flex items-center gap-20 bg-black text-xl h-[60px] text-white px-7 py-7 mr-[124px] mt-3">
            Download
          </button>
          <img src={starimg} alt="star1" className="absolute top-90 right-0 z-50 transform rotate-[0deg] h-auto w-10 mr-20 mb-1 mt-20" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

