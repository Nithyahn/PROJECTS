import React from 'react'
import starimg from '../../assets/white.png';
import button from "../../assets/Vector.png"
import ellipse from '../../assets/arc.png';
import sprinkle from '../../assets/sprinkle.png';
import ellipse1 from '../../assets/e4.png';
import iphone from '../../assets/iphone.png';
import s2 from '../../assets/s2.png';

const Paart5 = () => {
  return (
    <>
      <div style={{backgroundColor:'black',width: 'calc(100% - 450px)',margin: '0 auto'}} className='py-[184px] w-[1900px] '>
        <div className='container ' >
            <div className='grid grid-cols-1 sm:grid cols-2 items-center gap-4'>
                <div>
                    <h1 className='text-2xl text-center sm:text-left sm:text-5xl font-extrabold capitalizes lg:w-1/2 text-white/90 pl-4  clash-display ml-[-6px] mb-4'>Ready To Get Started?</h1>
                    <h2 className='text-1xl text-center sm:text-left mb-4 sm:text-1xl clash-display text-white/90 pl-3'>Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br/>Vulputate.</h2> 
                </div>
                <div>
                <button style={{ borderRadius: '5px' }} className="flex items-center justify-center gap-20 bg-white text-xl h-[60px] text-black px-[55px] py-7  clash-display ml-2">Download App
          </button>  
             <img src={button} alt="video" className="relative w-8 bg-white left-[195px] top-[-50px] " />
             <img src={starimg} alt="star1" style = {{backgroundColor:'black'}}  className="absolute top-[5500px] right-[800px] z-40 transform rotate-[0deg] h-auto w-18 " />
             <img src={starimg} alt="star1" style = {{backgroundColor:'black'}}  className="absolute top-[5800px] right-[1150px]  transform rotate-[0deg] h-auto w-12 z-40" />
             <img src={ellipse} alt="Phone" className="absolute top-[5720px] left-[-6px] z-[20px] mr-16 transform rotate-[-2deg] w-[576.57] h-[442.07px] ml-[90px]" />
             <img src={ellipse} alt="Phone" className="absolute top-[5790px] left-[-9px] z-[20px] mr-16 transform rotate-[5deg] w-[576.57] h-[442.07px] ml-[90px]" />
             <img src={ellipse} alt="Phone" className="absolute top-[5860px] left-[-3px] z-[20px] mr-16 transform rotate-[5deg] w-[576.57] h-[442.07px] ml-[90px]" />
             <img src={ellipse1} alt="Phone" className="absolute top-[5200px] right-[60px] z-[20px] mr-16 transform rotate-[-5deg] w-[576.57] h-[442.07px] ml-[90px]" />
             <img src={ellipse1} alt="Phone" className="absolute top-[5220px] right-[110px] z-[20px] mr-16 transform rotate-[-6deg] w-[576.57] h-[442.07px] ml-[90px]" />
             <img src={ellipse1} alt="Phone" className="absolute top-[5250px] right-[170px] z-[20px] mr-16 transform rotate-[-3deg] w-[576.57] h-[442.07px] ml-[90px]" />
             <img src={sprinkle} alt="s1" className="absolute top-[5580px] right-[220px] z-0 transform rotate-[-3deg] h-auto w-[327px]h-[237px]" />
             <img src={iphone} alt="s1" className="absolute top-[5450px] right-[225px] z-0 transform rotate-[0deg]  w-[627px] h-[540px]" />
             <img src={s2} alt="s1" className="absolute top-[5310px] left-[-75px] z-100 transform rotate-[-180deg] w-[300px] h-[437px] " />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Paart5;
