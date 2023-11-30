import React from "react";
import pandas from "../assets/pandas.png";
import python from "../assets/python.png";
import matplotlib from "../assets/matplotlib.png";
import ReactImg from "../assets/react.png";
import mysql from "../assets/Mysql.png";
// import FireBase from "../assets/firebase.png";
import Mongo from "../assets/mongo.png";
const Skill = () => {
  return (
    <div name="skill" className="w-fill h-screen bg-[#85dbcf] text-[#e27d60]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#c36d9e]">Skills</p>
          <p className="py-4 text-xl">These are the skills I have worked with....</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#41b3a3] hover:scale-110 duration-500">
            <img src={pandas} alt="pandas Icon" className="w-20 mx-auto"></img>
            <p>pandas</p>
          </div>
          <div className="shadow-md shadow-[#41b3a3] hover:scale-110 duration-500">
            <img src={python} alt="Python Icon" className="w-20 mx-auto"></img>
            <p>Python</p>
          </div>
          <div className="shadow-md shadow-[#41b3a3] hover:scale-110 duration-500">
            <img
              src={matplotlib}
              alt="MatplotLib Icon"
              className="w-20 mx-auto"
            ></img>
            <p>MatplotLib</p>
          </div>
          <div className="shadow-md shadow-[#41b3a3] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React Icon" className="w-20 mx-auto"></img>
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#41b3a3] hover:scale-110 duration-500">
            <img src={Mongo} alt="Mongo Icon" className="w-20 mx-auto"></img>
            <p>Mongo</p>
          </div>
          <div className="shadow-md shadow-[#41b3a3] hover:scale-110 duration-500">
            <img src={mysql} alt="MySQL Icon" className="w-20 h-20 mx-auto"></img>
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
