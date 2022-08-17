import React from "react";
import BabcockLogo from "../assets/babcocklogo.jpeg";
import GoogleData from "../assets/googledata.png";
import Hull from "../assets/hull.webp";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-screen text-gray-300  pt-[200px] md:pt-3"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Education and Certifications
          </p>
          <p className="py-4">//These are my current education and learning</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-orange-500 hover:scale-110 duration-500 ">
            <img
              className="w-60 mx-auto mt-3 h-40 object-cover"
              src={Hull}
              alt="Hull Logo"
            />
            <p className="my-4 font-bold">
              Msc Data Science and Artificial Intelligence{" "}
              <span className="text-xs text-gray-500">...in view</span>
              <p className="text-xs">2022 -2023</p>
            </p>
          </div>
          <div className="shadow-md shadow-[#0056d2] hover:scale-110 duration-500 ">
            <img
              className="w-60 mx-auto mt-3 h-40 object-cover"
              src={GoogleData}
              alt="HTML Icon"
            />
            <p className="my-4 font-bold"> Google Data Analytics Certificate</p>
            <p className="text-xs">April 2022</p>
          </div>

          <div className="shadow-md shadow-[#fd9a01] hover:scale-110 duration-500">
            <img
              className="w-60 h-40 object-fill mx-auto mt-3"
              src={BabcockLogo}
              alt="HTML Icon"
            />
            <p className="my-4 font-bold">
              BSC Computer Science (Information Systems)
            </p>
            <p className="text-xs text-gray-500">
              September 2010 - August 2014
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
