import React from "react";
import dashboard from "../assets/projects/dashboard.png";
import wordcounter from "../assets/projects/wordcounter.png";
import olympic from '../assets/projects/olympic.png';

const Project = () => {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-[#ffffff] bg-[#08100c]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#55595d]">
            Projects
          </p>
          <p className="py-6">Check out my projects....</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid items */}
          <div className="shadow-lg shadow-[#55595d] bg-[#55595d] rounded-sm container justify-center text-center items-center">
            <div
              style={{ backgroundImage: `url(${olympic})` }}
              className=" group container flex justify-center rounded-sm opacity-50 items-center mx-auto content-div"
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#ffffff] tracking-wider">
                  Olympic Data Analysis
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://olympics-data-analysis-1.streamlit.app/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#55595d] text-[#ffffff] font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Jash-Sharma/OlympicDataAnalysis"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#55595d] text-[#ffffff] font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-l text-[#e8d2c4] ">
              This is a Data Science project consisting of various analysis on the olympics data to find out interesting patterns in the data. Do check it out..
            </div>
          </div>
          <div className="shadow-lg shadow-[#55595d] bg-[#55595d] rounded-sm container justify-center text-center items-center">
            <div
              style={{ backgroundImage: `url(${dashboard})` }}
              className=" group container flex justify-center rounded-sm opacity-50 items-center mx-auto content-div"
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#ffffff] tracking-wider">
                  SpaceX Launch Data Prediction
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://spacexlaunchdata.onrender.com/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#55595d] text-[#ffffff] font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Jash-Sharma/IBM-Data-Science-Capstone-Project"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#55595d] text-[#ffffff] font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-l text-[#e8d2c4] ">
              This is a Data Science project in which I have worked on the SpaceX's
              Launch Data to visualize and predict the success-to-failure ratio
              of launches.
            </div>
          </div>
          <div className="shadow-lg shadow-[#55595d] bg-[#55595d] rounded-sm container justify-center text-center items-center">
            <div
              style={{ backgroundImage: `url(${wordcounter})` }}
              className="group container  flex justify-center opacity-50 items-center mx-auto content-div"
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#f1f1f1] tracking-wider">
                  Responsive Word Counter
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://jash-sharma.github.io/React-Task-1/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#55595d] text-[#ffffff] font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Jash-Sharma/React-Task-1/tree/master"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#55595d] text-[#ffffff] font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-l text-[#e8d2c4] ">
              This is a Word Counter which can count the number of words in a
              given text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
