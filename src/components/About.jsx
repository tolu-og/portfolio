import React from "react";
import Profile from "../assets/profile.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Tolu, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I'm passionate about building excellent software and analyzing
              data that improves the lives of people around me. I specialize in
              analyzing data from organizations ranging from individuals and
              small businesses, all the way to large enterprise corperations.
            </p>
          </div>
        </div>

        <div className="shadow-lg shadow-pink-600 w-80 h-80 mt-8 rounded-full">
          <img
            className="items-center object-cover hover:scale-105 duration-300 rounded-full w-full h-full "
            src={Profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
