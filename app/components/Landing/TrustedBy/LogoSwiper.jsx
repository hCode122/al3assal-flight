'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide's default styles
import { useRef } from 'react';
import Image from 'next/image';

const LogoSwiper = () => {
  const tempLogo = '/icons/Landing/Hero/tmpLogo.svg';
  const splideRef = useRef(null);

  return (
    <div className="w-[100%] mx-auto max-w-[90%] mt-10">
      <Splide
        ref={splideRef}
        options={{
          type: 'loop', // Enable looping
          perPage: 5, // Show 4 slides at a time
          gap: '10px', // Space between slides
          autoplay: true, // Enable autoplay
          interval: 1500, // Slow interval for autoplay (1500ms per slide)
          pauseOnHover: false, // Disable pause on hover (continuous rotation)
          arrows: false, // Optional: hide arrows
          pagination: false, // Optional: hide pagination
          perMove: 1, // Move one slide at a time (no jumps)
          breakpoints: {
            768: { // For screens below 768px (tablets & mobile)
              perPage: 2, // Show 2 images per page
              gap: "15px", // Reduce gap for smaller screens
            },
          },
        }}
      >
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <Image src={tempLogo} alt="company logo" height={85} width={85} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default LogoSwiper;
