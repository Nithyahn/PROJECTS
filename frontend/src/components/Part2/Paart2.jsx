import React from 'react';
import Urifyimg1 from '../../assets/phone2.png';
import starimg from '../../assets/star.png';
import Bell from '../../assets/bell.png';
import Rupee from "../../assets/rupee.png"

import ellipse from '../../assets/ellipse.png';
import color from '../../assets/color.png';

const Paart2 = () => {
  return (
    <div className="container py-50 relative">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="py-20">
          <h2 className="text-orange-600 text-xl font-sans mb-2 -ml-3 clash-display">ADVANTAGES</h2>
          <h1 className="text-6xl font-bold font-sans mb-5 mr-1 clash-display tracking-tighter -ml-3">Why Choose Ufiry?</h1>

          <div className="relative">
            <img src={Bell} alt="star" className="w-18  h-21 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/3 z-[-1] ml-1" />
            <h2 className="left-7 font-bold text-2xl mb-2 relative clash-display">Clever Notifications</h2>
            <p className="mb-1 relative clash-display text-gray-500 text-xl">
            Arcu at Dictum Sapien, Mollis. Vulputate Sit Id  Accumsan,<br/>  Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br/> Tristique Lacus, Et Blandit VIverra Nisl Velit. Sed Mattis Rhoncus, <br/> Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac <br/> Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center sm:order-3 mb-90"> 
          {/* <img src={Urifyimg1} alt="Phone" className=" top-70 right-0 w-249.59 h-505.02 mr-26 transform rotate-[15deg] z-index:3" />
           <img src={Rupee} alt="rupee" className="absolute top-60 right-20 w-54 h-55 mr-2 transform rotate-[0deg] z-index:2" />  */}
           <img src={ellipse} alt="Phone" className="absolute top-[-2px] left-[-6px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[260px]" />
          <img src={ellipse} alt="Phone" className="relative top-[45px] left-[-62px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[260px]" />
          <img src={ellipse} alt="Phone" className="absolute top-[-35px] left-[42px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[260px]" />
          <img src={Urifyimg1} alt="star1" className="absolute top-[-90px] left-[250px] z-50 transform rotate-[15deg] w-[627px] h-[837px]" />
          <img src={color} alt="s1" className="absolute top-[100px] left-[125px] z-50 transform rotate-[0deg] h-auto w-[327px]h-[237px]" />
          <img src={Rupee} alt="star1" className="absolute top-[200px] left-[450px] z-50 transform rotate-[0deg] w-[327px] h-[200px]" />
          <img src={starimg} alt="star1" className="absolute top-0 right-0 z-50 transform rotate-[0deg] h-auto w-10" />
        </div>
      </div>
    </div>
  );
};

export default Paart2;
