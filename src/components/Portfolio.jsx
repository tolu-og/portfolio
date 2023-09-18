import React from "react";
import WorkImg from "../assets/workImg.jpeg";

import foodApp from "../assets/foodApp.png";
import hulu from "../assets/hulu.png";
import analytics from "../assets/analytics.png";
import todoApp from "../assets/todoApp.png";
import twichclone from "../assets/twitchclone.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-gray-300 md:pt-12 pt-[200px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Portfolio
          </p>
          <p className="py-6">/Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crypto Price Watchlist
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://crypto-watchlist-five.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>TailWind CSS Light and Dark Mode</li>
                  <li>Coin Gecko API</li>
                  <li>Firebase Auth, Firestore </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${foodApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Ordering App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://besteats.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo{" "}
                  </button>
                </a>
                <a
                  href="https://github.com/tolzydrill/besteats"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>TailWind CSS</li>
                  <li>React Filtering</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${hulu})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Hulu 2.0 App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://hulu-clone.tolulabs.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo{" "}
                  </button>
                </a>
                <a
                  href="https://github.com/tolzydrill/hulu2.0-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>Next JS</li>
                  <li>Tailwind CSS</li>

                  <li> REST API (TMDB Database)</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${analytics})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Data Analytics UI
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://data-react.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tolzydrill/data-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>ReactJS</li>
                  <li>Tailwind CSS</li>
                  <li> Card Components</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${todoApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://todo-app-rust-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tolu-og/todo-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>ReactJS</li>
                  <li>Tailwind CSS</li>
                  <li>Firebase Firestore</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${twichclone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Twitch Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://twitch-clone-livid.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tolu-og/twitch-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>NextJS</li>
                  <li>Tailwind CSS</li>
                  <li>Headless UI</li>
                  <li>Next, Github & Google Auth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
