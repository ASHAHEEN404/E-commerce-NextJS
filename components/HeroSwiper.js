"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero1 from "@/public/hero-1.jpg";
import Hero2 from "@/public/hero-2.jpg";
import Hero3 from "@/public/hero-3.jpg";

const HeroSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [Hero1, Hero2, Hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides.length]);

  return (
    <div className="w-screen mt-6">
      <div className="relative ">
        {/* Slides */}
        <div className="relative h-80 md:h-[28rem]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={slide} alt={`Slide ${index + 1}`} fill />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          className="absolute top-1/2 left-3 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            )
          }
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="5 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-3 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="10 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSwiper;
