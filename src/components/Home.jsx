import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll'
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div name="home" className="bg-[#85dbcf] w-full h-screen">
      {/*....Container.....*/}
      <div className="max-w-[1050px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#e27d60] text-2xl">Hello, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#e8a87c]">
          Jash Sharma
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e27d60]">
          <TypeAnimation
            sequence={[
              "Data Scientist",
              1000,
              "Full Stack Web Developer",
              1000,
              "Machine Learning",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "text-8xl", display: "inline" }}
            repeat={Infinity}
          />
          |
        </h2>
        <p className=" text-[#e27d60] py-4 max-w-[700px]">
          I am a computer science student with good level of expertise in data
          science and web development. I have in-hand experience, working on an
          number of different projects....
        </p>
        <div>
          <Link to="project" smooth={true} duration={500}>
            <button className="text-[#e8a87c] group border-2 px-6 py-3 my-2 border-[#e8a87c] flex items-center hover:bg-[#c36d9e] hover:border-[#c36d9e]">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
