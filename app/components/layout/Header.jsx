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

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]"); 
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } 
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const getLinkClass = (href) => {
        if (href.startsWith("#")) {
            return activeSection === href.substring(1)
                ? "text-[#253A7B] font-bold border-b-2 border-[#253A7B] pb-1"
                : "text-[#0A0A0B] hover:text-[#253A7B] transition duration-300";
        }
        return pathname === href
            ? "text-[#253A7B] font-bold border-b-2 border-[#253A7B] pb-1"
            : "text-[#0A0A0B] hover:text-[#253A7B] transition duration-300";
    };

    return (
        <div className="fixed w-full z-[1000] flex justify-between px-14 py-2 items-center bg-white hidden lg:flex">
            <Image alt="main logo" src={logo} width={75} height={75} />

            <div className="flex gap-24">
                <Link href="/" className={getLinkClass("/")}>Home</Link>
                <Link href="/about-us" className={getLinkClass("/about-us")}>About us</Link>
                <Link href="#trips" className={getLinkClass("#trips")}>Trips</Link>
                <Link href="#contact" className={getLinkClass("#contact")}>Contact Us</Link>
            </div>

            <Link href="/auth/sign-in" className="flex gap-6">
                <Image alt="user image" src={user} width={30} height={30} />
                <p className="rounded-[6px] bg-[#253A7B] px-10 p-2 text-white">Log in</p>
            </Link>
        </div>
    );
};

export default Header;
