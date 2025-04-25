import React from 'react';
import Urifyimg from '../../assets/phone.png'; 
import Urifyimg1 from '../../assets/phone2.png'; 
import RibbonImage from '../../assets/ribbon.png'; 
import starimg from '../../assets/star.png';
import videoimg from '../../assets/video.jpg';
import { FaArrowRight } from 'react-icons/fa';
import ellipse from "../../assets/ellipse.png";

const Hero = () => {
  return (
    <>
      <div className='relative   w-full'>
        <div className='container mx-auto px-4  w-full '>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center min-h-[600px] py-10">
            <div className='flex flex-col justify-center items-start mb-10'>
              <h1 className="text-6xl font-extrabold capitalize mb-6 clash-display">
                Make The Best <br/>Financial Decisions  
              </h1>
              <p className=" mb-9 clash-display text-xl text-gray-500  ">
                Cum Et Convallis Risus Placerat Aliquam, Nuno. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem Porttitor.
              </p>
              <div className='flex items-center gap-4'>
                <button className="flex items-center gap-6 bg-black text-xl h-[60px] text-white px-5 py-[6px] rounded ml-2">
                  Get Started
                  <FaArrowRight className='ml-2' />
                </button>
                <div className="flex items-center gap-[15px] left-4 ml-[39px]">
                  <img src={videoimg} alt="video" className="w-10  gap-[1px]"  />
                  <button className="bg-white text-xl h-[50px] text-black px-4 py-2 rounded font-semibold ">
                    Watch Video
                  </button>
                </div>
              </div>
              <img src={RibbonImage} alt="Ribbon" className="mt-4 w-[669px] h-[467.74px]" />
              <img src={starimg} alt="star1" className="absolute top-[350px] left-[440px] z-20 w-10" />
            </div>
            <div className='relative flex justify-center items-start  w-full'>
              <div className='relative  w-full h-auto '>
                <div className="gradient-overlay absolute top-0 left-0 z-0 w-[600px] h-[700px]"></div>
                <div className='relative top - [1000px] right-[-100px]'>
                <img src={ellipse} alt="Phone" className="absolute top-[-2px] left-[79px] z-[10px]  transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[90px]" />
          <img src={ellipse} alt="Phone" className="relative top-[45px] left-[42px] z-[10px] transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[90px]" />
          <img src={ellipse} alt="Phone" className="absolute top-[-35px] left-[122px] z-[10px] transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[90px]" />
          </div>
                <img src={Urifyimg} alt="Phone 1" className="absolute top-[-140px] left-[0px] z-40 transform rotate-[-5deg] w-[669.25px] h-[914.32px]" />
                <img src={Urifyimg1} alt="Phone 2" className="absolute top-[-92px] left-[165px] z-30 transform rotate-[-5deg] w-[669.59px] h-[924.02px]" />
                <img src={Urifyimg} alt="Phone 3" className="absolute top-[-25px] left-[320px] z-20 transform rotate-[-5deg] w-[669.75px] h-[924.00px]" /> 
              
                <img src={starimg} alt="star1" className="absolute top-[450px] right-[730px] z-10 h-auto w-10" />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Hero;
