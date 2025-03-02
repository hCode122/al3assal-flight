'use client'
const { useState } = require("react")
import Image from "next/image"
import "./style.css"
import Link from "next/link"
import { DirectionProvider, useDirection } from "./DirectionContext";
import { AuthProvider } from "../_contextProviders/AuthContext"
const AuthLayout = ({ children }) => {
    return (
        <DirectionProvider>
            <AuthProvider>
            <AuthContent>{children}</AuthContent>
            </AuthProvider>
        </DirectionProvider>
    );
};

const AuthContent = ({ children }) => {
    const { direction, backArrow } = useDirection();
    const airplaneImg = "/imgs/auth/airplaneBanner.jpg";
    const back = "/icons/auth/backBtn.svg";
    return (
        <div className="h-screen w-full authBg flex">
            <div className={` h-[93%] md:h-[90%] w-[95%] sm:w-[85%] md:w-[75%] m-auto rounded-[56px] sm:p-4 flex gap-2 blurredBg relative
                ${direction === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
                    {backArrow ? (
                        <Link href={backArrow}> <Image 
                        src={back} 
                        className={`absolute top-8 sm:top-10 right-8 ${direction === "ltr" ? "invertArrow" : ""}`}
                        alt="back button" 
                        width={30} 
                        height={30} 
                      /></Link>

                    ) : null}
                
                <div className="flex-1 mx-auto w-full ">
                    {children}
                </div>

                <img src={airplaneImg} className="h-full w-full rounded-[56px] flex-1 hidden lg:block" alt="an image of an airplane" />
            </div>
        </div>
    );
};

export default AuthLayout