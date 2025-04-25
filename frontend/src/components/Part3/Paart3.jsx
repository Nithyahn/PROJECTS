import React from 'react';
import Urifyimg from '../../assets/phone.png';
import starimg from '../../assets/star.png';
import s from '../../assets/s.png';
import visa from '../../assets/visa.png';
import ellipse from '../../assets/ellipse.png';
import splash from '../../assets/splash.png';
const Paart3 = () => {
  return (
    <div className='py-0'>
    <div className=" container py-24 relative ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
        <div className="relative flex items-center justify-center mb-90">
        <img src={ellipse} alt="Phone" className="absolute top-[-2px] left-[-6px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[80px]" />
          <img src={ellipse} alt="Phone" className="relative top-[45px] left-[-62px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[80px]" />
          <img src={ellipse} alt="Phone" className="absolute top-[-35px] left-[42px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[80px]" />
  
          <img src={splash} alt="s1" className="absolute top-[80px] left-[-5px] z-50 transform rotate-[0deg] h-auto w-[327px]h-[237px]" />
          <img src={starimg} alt="star1" className="absolute top-0 left-0 z-50 transform rotate-[0deg] h-auto w-10" />
          <img src={Urifyimg} alt="star1" className="absolute top-[-90px] left-[100px] z-50 transform rotate-[15deg] w-[627px] h-[837px]" />
          <img src={visa} alt="star1" className="absolute top-[90px] left-[260px] z-50 transform rotate-[0deg] w-[327px] h-[200px]" />
        </div>  
        <div className="py-20">
          <div className="relative mb-8 py-20 right-[-100px]">
            <img src={s} alt="cube1" className="w-11 h-15 absolute top-0 left-0 transform translate-x-[-50%] translate-y-[85%] z-[-1]" />
            <h2 className="left-7 font-bold text-2xl  mb-4 relative clash-display">Fully Customizable</h2>
            <p className="mb-1 relative clash-display tracking-wide text-gray-500 text-xl">
            Arcu at Dictum Sapien, Mollis. Vulputate Sit Id  Accumsan,<br/>  Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br/> Tristique Lacus, Et Blandit VIverra Nisl Velit. Sed Mattis Rhoncus, <br/> Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac <br/> Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>

         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Paart3;
