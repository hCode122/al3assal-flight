'use client'
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import "./mobileGrid.css"
import { useEffect } from "react";
const images = [
  "/imgs/Landing/Hero/mobile-card.png",
  "/imgs/Landing/Hero/mobile-card.png",
  "/imgs/Landing/Hero/mobile-card.png",
  "/imgs/Landing/Hero/mobile-card.png"
];

const MobileGrid = () => {

    return (
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          pagination: true,
          arrows: false,
          autoplay: true,
          interval: 3000,
          gap: "20px",
        }}
        className=" h-[24rem] sm:h-[30rem] md:h-[35rem] lg:hidden text-black pb-14"
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-[80%] md:w[75%] h-[23rem] sm:h-[28rem] md:h-[33rem] mx-auto" />
          </SplideSlide>
        ))}
      </Splide>
    );
  };
  
  export default MobileGrid;
  