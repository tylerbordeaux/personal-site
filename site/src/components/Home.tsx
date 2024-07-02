import React, { useState, useEffect } from "react";
import Memoji from "../assets/memoji.png";
import Heart from "../assets/heart.svg";
import Handshake from "../assets/handshake.svg";
import Wallpaper from "../assets/wallpaper.png";

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    let period = "AM";
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-roboto overflow-hidden">
      <img
        src={Memoji}
        alt="Tyler's Memoji"
        className="w-40 mb-6 mt-40"
      />
      <div className="text-center max-w-md px-4 mb-8">
        <h1 className="text-4xl font-bold text-black my-8">Hi, I'm Tyler</h1>
        <p className="text-xl text-gray-700 flex flex-col items-center">
          <span className="flex items-center">
            I'm passionate
            <span className="mx-1 inline-block transition-all duration-300 hover:scale-110 group">
              <img
                src={Heart}
                alt="Heart"
                className="w-6 h-6 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.7)]"
              />
            </span>
            about making
          </span>
          <span>software that brings people</span>
          <span className="flex items-center">
            together
            <span className="ml-1 inline-block transition-all duration-300 hover:scale-110 group">
              <img
                src={Handshake}
                alt="Handshake"
                className="w-8 h-8 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.7)]"
              />
            </span>
          </span>
        </p>
      </div>
      <div className="w-64 h-128 relative overflow-hidden group">
        <svg viewBox="0 0 320 640" className="w-full h-full">
          <defs>
            <pattern id="wallpaperPattern" patternUnits="userSpaceOnUse" width="280" height="600">
              <image href={Wallpaper} width="280" height="600" />
            </pattern>
          </defs>
          <rect
            x="10"
            y="10"
            width="300"
            height="620"
            rx="40"
            fill="#f1f1f1"
            stroke="#000"
            strokeWidth="2"
          />
          <rect
            x="20"
            y="20"
            width="280"
            height="600"
            rx="30"
            fill="#000"
            className="transition-all duration-300 group-hover:fill-[url(#wallpaperPattern)]"
          />
          <rect x="130" y="40" width="60" height="5" rx="2.5" fill="#444" />
          <circle cx="160" cy="30" r="5" fill="#444" />
          <text
            x="160"
            y="150"
            textAnchor="middle"
            fill="#fff"
            fontSize="36"
            fontWeight="bold"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {formatTime(currentTime)}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Home;
