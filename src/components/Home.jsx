import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Typed from "react-typed";
import Profile from "../assets/profile.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl"> Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {" "}
          Tolulope Ogunnusi
        </h1>

        <Typed
          className="text-3xl sm:text-7xl font-bold text-[#8892b0]"
          strings={[
            "A Product Analyst 🧐",
            " A Data Analyst 🔢",
            "A Front-end Developer 💻",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Product and/or Data Analyst. I specialize in analyzing, cleaning
          and generating insights with Data and also automating business
          processes. Currently i'm focused on building and working on products
          with real-life applications.
        </p>
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-pink-600
                hover:border-pink-600 ease-in-out duration-300"
          >
            View Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-3" />
            </span>
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
