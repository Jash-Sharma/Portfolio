import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#85dbcf] text-[#e27d60]">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#c36d9e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hi, I am Jash Sharma, nice to meet you. Please have a look around.
              Any suggestions are welcomed.
            </p>
          </div>
          <div className=" text-[#e29968] font-bold">
            I am a Computer Science student with a passion for technology and
            science. I want to be a full-time Data Scientist. I find it very
            interesting to solve various different real time problems with the
            help of Predictive Modelling. Besides, I like to cycle
            or walk in the neighbourhood which helps me organize my thoughts.
            Please see my skills and projects below and contact me if you have any suggestions.
            Let's connect and create something extraordinary together..!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
