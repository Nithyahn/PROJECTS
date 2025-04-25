import React from 'react';
import starimg from '../../assets/star.png';
const Paart7 = () => {

  const alternateBgClass = (index) => {
    return index % 2 === 0 ? "bg-gray-100" : "bg-gray-200";
  };

  const questions = [
    {
      id: 1,
      question: "The Best Financial Accounting <br/> App Ever!",
      answer: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br/> Accumsan, Ultricies. In Ultrices Malesuada Elit mauris.",
    },
    {
      id: 2,
      question: "The Best Financial Accounting <br/> App Ever!",
      answer: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br/> Accumsan, Ultricies. In Ultrices Malesuada Elit mauris.",
    },
    {
      id: 3,
      question: "The Best Financial Accounting <br/> App Ever!",
      answer: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br/> Accumsan, Ultricies. In Ultrices Malesuada Elit mauris.",
    },
    {
      id: 4,
      question: "The Best Financial Accounting <br/> App Ever!",
      answer: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br/> Accumsan, Ultricies. In Ultrices Malesuada Elit mauris.",
    },
    {
      id: 5,
      question: "The Best Financial Accounting <br/> App Ever!",
      answer: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br/> Accumsan, Ultricies. In Ultrices Malesuada Elit mauris.”",
    },
    {
      id: 6,
      question: "The Best Financial Accounting <br/> App Ever!",
      answer: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br/> Accumsan, Ultricies. In Ultrices Malesuada Elit mauris.",
    },
  ];
 
  return (
    <div id="Paart7" className="py-44 px-10 lg:px-20 ml-[150px] mr-[150px]">
      <div>
      <h3 className="uppercase w-full tracking-widest text-red-500 ml-1 mb-2 text-xl clash-display">FAQ</h3>
      <h1 className="text-4xl lg:text-7xl font-extrabold capitalize lg:w-1/2 clash-display">frequently asked questions</h1>
      <img src={starimg} alt="star1" className="absolute top-[4400px] left-[100px] z-50 transform rotate-[0deg] h-auto w-[48px]" />
      <img src={starimg} alt="star1" className="absolute top-[4300px] left-[1050px] z-50 transform rotate-[28deg] h-auto w-[68px]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-full clash-display">
        {questions.map(({ id, question, answer }, index) => {
          let bgColor = (id === 1 || id === 4 || id === 5) ? '#FF5555' : 'white'; 
          let text = (id === 1 || id === 4 || id === 5) ? 'white' : 'black';
          let text1 = (id === 2 || id === 3 || id === 6) ? '#808080' : 'white'; // Additional color for certain ids
          return (
            <div
              key={id}
              className={`p-10 rounded-md ${alternateBgClass(index)} mr-[130px]`}
              style={{ backgroundColor: bgColor, color: text,borderRadius: '15px', px: '20px'  }}
            >
              <h3 className="font-bold text-4xl mb-4" dangerouslySetInnerHTML={{ __html: question }}></h3>
              <p className="text-xl tracking-wide " style={{ color: text1 }} dangerouslySetInnerHTML={{ __html: answer }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Paart7;
