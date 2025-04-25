import React from 'react';
import Urifyimg from '../../assets/phone.png';
import starimg from '../../assets/star.png';
import star from '../../assets/star2.png';
import cube1 from '../../assets/cube1.png';
import cube2 from '../../assets/cube2.png';
import color1 from '../../assets/color.png';
import ellipse from '../../assets/ellipse.png';
import splash from '../../assets/splash.png';

const Banner1 = () => {
  return (
    <div className="container py-14 relative"> 
  <div>
    <div className='space-y-10 py-14'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"> 
        <div className="relative flex items-center justify-center mb-90">
          <img src={ellipse} alt="Phone" className="absolute top-[-2px] left-[-6px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[80px]" />
          <img src={ellipse} alt="Phone" className="relative top-[45px] left-[-62px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[80px]" />
          <img src={ellipse} alt="Phone" className="absolute top-[-35px] left-[42px] z-[10px] mr-16 transform rotate-[5deg] w-[376.57] h-[542.07px] ml-[80px]" />
  
          <img src={splash} alt="s1" className="absolute top-[80px] left-[-5px] z-50 transform rotate-[0deg] h-auto w-[327px]h-[237px]" />
          <img src={starimg} alt="star1" className="absolute top-0 left-0 z-50 transform rotate-[0deg] h-auto w-10" />
          <img src={Urifyimg} alt="star1" className="absolute top-[-90px] left-[100px] z-50 transform rotate-[15deg] w-[627px] h-[837px]" />
        </div>
        <div className="inline-block mb-10">
          <h2 className="text-orange-600 text-xl font-sans mb-1 clash-display">FEATURES</h2>
          <h1 className="text-6xl font-extrabold capitalize mb-9 clash-display">Uifry Premium</h1>

          <div className="relative mb-8 top-50">
            <img src={star} alt="star" className="w-14 h-17 absolute top-0 left-0 transform translate-x-[-45%] translate-y-[-25%] z-[-1]" />
            <h2 className="left-7 font-semibold text-2xl font-sans mb-2 relative clash-display">Budgeting Intervals</h2>
            <p className="mb-1 relative clash-display text-xl text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="relative mb-8">
            <img src={cube1} alt="cube1" className="w-11 h-15 absolute top-0 left-0 transform translate-x-[-38%] translate-y-[-14%] z-[-1]" />
            <h2 className="left-7 font-semibold text-2xl font-sans mb-2 relative clash-display">Budgeting Intervals</h2>
            <p className="mb-1 relative clash-display text-xl text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="relative mb-8">
            <img src={cube2} alt="cube2" className="w-11 h-15 absolute top-0 left-0 transform translate-x-[-38%] translate-y-[-24%] z-[-1]" />
            <h2 className="left-7 font-semibold text-2xl font-sans mb-2 relative clash-display">Budgeting Intervals</h2>
            <p className="mb-1 relative clash-display text-xl text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className='flex items-end justify-end mr-2 h-30 w-28 '>
            <img src={color1} alt="color1" className="absolute top-80 right-[-260px] z-40 transform rotate-[0deg] " />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Banner1;
