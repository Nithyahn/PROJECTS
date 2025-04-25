import React from "react";
import logo from '../../assets/logo.png'; 
import starimg1 from '../../assets/star.png';
import email from '../../assets/email.png'; 
import call from '../../assets/call.png'; 

const NavLinks = [
 
  {

    title: 'Help@Frybix.com',
    link: "Help@Frybix.com",
  },
  {

    title: '+1 234 456 678 89',
    link: "+1 234 456 678 89",
  },
];

const NavLinks1 = [
  {
    title: 'Home',
    link: "Home",
  },
  {
    title: 'Terms Of Use',
    link: "Terms Of Use",
  },
  {

    title: 'Take Tour',
    link: "Take Tour",
  },
  {

    title: 'Stay Up To Date',
    link: "Stay Up To Date",
  },
];
const NavLinks2 = [
 
  {
   
    name: 'Terms Of Use',
    link: "Terms Of Use",
  },
  {
  
    name: 'Privacy Policy',
    link: "Privacy Policy",
  },
  {

    name: 'Cookie Policy',
    link: "Cookie Policy",
  },
];
const NavLinks3 = [
 
  {
    
    name: 'Take Tour',
    link: "Take Tour",
  },
  {

    name: 'Live Chat',
    link: "Live Chat",
  },
  {
   
    name: 'Reviews',
    link: "Reviews",
  },
];
const NavLinks4 = [
  {
 
    name: 'Stay Up To Date',
    link: "Stay Up To Date",
  },
  
  
];

const Paart6 = () => {
  return (
    <div className>
      <div className="container flex justify-between py-[17px] px-6 sm:py-[123px] clash-display mt-340px mb-9">
{/*        
      <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10  mt-[160px] ">
      </div> */}
  
      <div className="py-8 px-4">
      <img src={logo} alt="logo_img" className="w-9 bottom-20 transform translate-x-[-105%] translate-y-[12%] z-[-1]"  />
      <h1 className= " text-4xl sm:text-left font-bold mb-5 clash-display mt-[-32px]">Uifry <sup style={{ fontSize: '0.6em' }}>™</sup> </h1>
            <ul className="mb-9">
              {
                NavLinks.map((data,index)=> (
                  <li key={index}>
                    <a href={data.title}>{data.link}</a>
                  </li>
                ))
              }
            </ul>
        </div>
      <div className="py-8 px-4">
          <h1 className="text-4xl sm:text-left mb-5 clash-display"> Links</h1>
            <ul>
              {
                NavLinks1.map((data,index)=> (
                  <li key={index} className="mb-4">
                    <a href={data.title}>{data.link}</a>
                  </li>
                ))
              }
            </ul>
        </div>
      <div className="py-8 px-4">
          <h1 className="text-4xl sm:text-left mb-5 clash-display"> Legal</h1>
            <ul>
              {
                NavLinks2.map((data,index)=> (
                  <li key={index} className="mb-4">
                    <a href={data.title}>{data.link}</a>
                  </li>
                ))
              }
            </ul>
        </div>

      <div className="py-8 px-4">
          <h1 className="text-4xl sm:text-left mb-5 clash-display"> Product</h1>
            <ul>
              {
                NavLinks3.map((data,index)=> (
                  <li key={index} className="mb-4">
                    <a href={data.title}>{data.link}</a>
                  </li>
                ))
              }
            </ul>
        </div>
        <div className="py-8 px-4">
          <h1 className="text-4xl sm:text-left mb-5 clash-display "> NewsLetter</h1>
            <ul>
              {
                NavLinks4.map((data,index)=> (
                  <li key={index} className="mb-4 text-1xl clash-display font-[3px] ">
                    <a href={data.title}>{data.link}</a>
                  </li>
                ))
              }
            </ul>
            <div className="flex items-start justify-evenly gap-5 mr-8  ">
          <button style={{ borderRadius: '5px' }} className="flex items-center gap-20 bg-black text-xl h-[60px] text-white px-7 py-7 mr-[14px] mt-3 right-[10px]">
            Subscribe
          </button>
          
        </div>
        </div>
      
      </div> 
      <hr style={{border:'0',
      height: '1px',
      background: '#333', /* Line color */
      margin: '10px 0',top :'120px'}}></hr>
      <h1 className="items center justify-center ml-[740px] mt-[-50px] mb-[240px] clash-diplay text-2xl">Copyright 2022 uifry.com all rights reserved</h1>
    </div>
  );
};

export default Paart6;

