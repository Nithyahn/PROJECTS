import React from 'react';
import ellipse from '../../assets/ellipse.png';

import people from '../../assets/people.png';
import splash from '../../assets/splash.png';
import peo from '../../assets/p1.png';
import peo1 from '../../assets/pe1.png';
import peo2 from '../../assets/pe2.png';
import peo3 from '../../assets/pe3.png';
import peo4 from '../../assets/pe4.png';
const Paart4 = () => {
  return (
    <div className="container py-14  ml-[40px] mr-[40px]">
        <div className=" py-1 relative mb-2 gap-1">
        <h2 className="py-1 tracking-wider text-1xl font-semibold text-center mb-1 gap-1 clash-display"> TESTIMONIAL</h2>
        <h1 className="py-1 tracking-wider text-7xl font-extrabold capitalize text-center clash-display"  style={{ lineHeight: '48px', fontSize: '48px', margin: '0' ,letterSpacing:'-3px'}}> What Our Users <br/>Say About Us?</h1>
    
        </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="py-20 sm:order-2"> 
          <div className="relative right-[-250px]">
            <h2 className="left-0 text-2xl mb-4 relative font- font-extrabold capitalize ml-1 clash-display">The Best Financial Accounting <br/>App Ever!</h2>
            <p className="mb-1 relative clash-display text-gray-500 text-xl tracking-wide" >
            "Arcu at dictum sapien, mollis. Vulputate Sit Id "<br/>"Accumsan, Ultricies. In Ultrices Malesuada Elit  <br/>Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit  <br/> Viverra Nisl Velit. Sed Mattis Rhoncus, Diam  <br/> Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget  <br/> Ac Dolor Neque Lorem Sapien, Suspendisse  <br/>Aliquam".
            </p>
            <br/>
            <img src={people} alt="people" className="left-0  mb-9 relative font-bold ml-1 w-50 h-10 transform rotate-[1deg]" />
            <h2 className='font-semibold clash-display'> Nick Jonas</h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center sm:order-1"> 
          <img src={ellipse} alt="Phone" className="absolute top-[-2px] left-[-6px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[90px]" />
          <img src={ellipse} alt="Phone" className="relative top-[45px] left-[-62px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[90px]" />
          <img src={ellipse} alt="Phone" className="absolute top-[-35px] left-[42px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[90px]" />
          <img src={splash} alt="s1" className="absolute top-[80px] left-[-5px] z-50 transform rotate-[0deg] h-auto w-[327px]h-[237px]" />
          <img src={peo} alt="star1" className="absolute top-[80px] left-[160px] z-50 transform rotate-[0deg] h-auto w-[327px]h-[237px]" />
          <img src={peo1} alt="star1" className="absolute top-[-60px] right-[-100px] z-50 transform rotate-[0deg] w-[410px] h-[410px]" />
          <img src={peo2} alt="star1" className="absolute top-[350px] right-[-100px] z-50 transform rotate-[0deg] w-[410px] h-[410px]" />
          <img src={peo3} alt="star1" className="absolute top-[300px] left-0 z-50 transform rotate-[0deg] w-[410px] h-[410px]" />
          <img src={peo4} alt="star1" className="absolute top-[-80px] left-0 z-50 transform rotate-[0deg] w-[410px] h-[410px]" />
          
        </div>
      </div>
    </div>
  );
};

export default Paart4;
