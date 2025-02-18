"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");

    const logo = "/icons/Layout/logoMain.svg";
    const user = "/icons/Layout/user.svg";


    const getLinkClass = (href) => {
            return pathname === href
                ? "text-white bg-[#253A7B] rounded-[32px]"
                : "text-[#0A0A0B] hover:text-[#253A7B] transition duration-300";
        
    };

    return (
        <div className="fixed w-full z-[1000] flex justify-between px-14 py-2 items-center bg-white hidden lg:flex">
            <Image alt="main logo" src={logo} width={75} height={75} />

            <div className="flex gap-12">
                <Link href="/" className={`${getLinkClass("/")} px-8 py-2`}>Home</Link>
                <Link href="/about-us" className={`${getLinkClass("/about-us")} px-8 py-2`}>About us</Link>
                <Link href="#trips" className={`${getLinkClass("#trips")} px-8 py-2`}>Trips</Link>
                <Link href="#contact" className={`${getLinkClass("#contact")} px-8 py-2`}>Contact Us</Link>
            </div>

            <Link href="/auth/sign-in" className="flex gap-6">
                <Image alt="user image" src={user} width={30} height={30} />
                <p className="rounded-[6px] bg-[#253A7B] px-10 p-2 text-white">Log in</p>
            </Link>
        </div>
    );
};

export default Header;
