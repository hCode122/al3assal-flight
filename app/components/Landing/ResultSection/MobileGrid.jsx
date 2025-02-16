'use client'
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./mobileGrid.css"
const images = [
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
        className="w-full h-[85%] lg:hidden"
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full " />
          </SplideSlide>
        ))}
      </Splide>
    );
  };
  
  export default MobileGrid;
  