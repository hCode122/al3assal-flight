'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav") && !event.target.closest("button")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const getLinkClass = (href) => {
    return pathname === href
        ? "text-white bg-[#253A7B] rounded-[32px] w-[8rem]"
        : "text-[#0A0A0B] hover:text-[#253A7B] transition duration-300";

};


  return (
    <header className="fixed w-full flex lg:hidden items-center justify-between p-4  shadow-md lg:hidden
    rounded-b-[16px] mobileHeader z-[500]">
      <Image src="/icons/Layout/logoMain.svg" alt="Logo" width={40} height={40} />
      
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
      <Image src="/icons/Layout/burger.svg" alt="Logo" width={40} height={40} />

      </button>
      
      {isOpen && (
        <nav className="absolute top-16 right-4 bg-white shadow-md p-4 h-[20rem] w-[15rem] rounded-md mheader-animate">
          <ul className="space-y-4">
            <li><Link href="/" onClick={() => setIsOpen(false)} className={`${getLinkClass("/")} block text-[1.1rem] p-2`} >Home</Link></li>
            <li><Link href="/about-us" onClick={() => setIsOpen(false)} className={`${getLinkClass("/about-us")} block text-[1.1rem] p-2`}>About Us</Link></li>
            <li><Link href="/trips" onClick={() => setIsOpen(false)} className={`${getLinkClass("/trips")} block text-[1.1rem] p-2`}>Trips</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className={`${getLinkClass("/contact")} block text-[1.1rem] p-2`}>Contact Us</Link></li>
            <li><Link href="/auth/sign-in" onClick={() => setIsOpen(false)} className="block mt-10 text-center text-[1.5rem]">Login</Link></li>

          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
