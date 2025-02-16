'use client'
const { useState } = require("react")
import Image from "next/image"
import "./style.css"
import Link from "next/link"
import { DirectionProvider, useDirection } from "./DirectionContext";
const AuthLayout = ({ children }) => {
    return (
        <DirectionProvider>
            <AuthContent>{children}</AuthContent>
        </DirectionProvider>
    );
};

const AuthContent = ({ children }) => {
    const { direction, backArrow } = useDirection();
    const airplaneImg = "/imgs/auth/airplaneBanner.jpg";
    const back = "/icons/auth/backBtn.svg";
    return (
        <div className="h-screen w-full authBg flex">
            <div className={`h-[90%] w-[75%] m-auto rounded-[56px] p-4 flex gap-2 blurredBg relative
                ${direction === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
                    {backArrow ? (
                        <Link href={backArrow}> <Image src={back} className="absolute top-10 right-8" alt="back button" width={30} height={30} /></Link>

                    ) : null}
                
                <div className="flex-1 mx-auto">
                    {children}
                </div>

                <img src={airplaneImg} className="h-full w-full rounded-[56px] flex-1" alt="an image of an airplane" />
            </div>
        </div>
    );
};

export default AuthLayout