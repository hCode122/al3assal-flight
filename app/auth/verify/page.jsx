
'use client'

import { Checkbox } from "@mui/material"
import AuthTitle from "@/app/components/auth/AuthTitle"
import VerifyInput from "@/app/components/auth/VerifyInput"
import SubButton from "@/app/components/auth/SubButton"
import { useDirection } from "../DirectionContext";
import { useEffect } from "react"

const Verify = () => {
    const email = "yourmail@example.com"

    const { setDirection, setBackArrow } = useDirection();

    useEffect(() => {
        setDirection("rtl");  
        setBackArrow("/auth/sign-up")
    }, []);
    return (
        <div className="flex flex-col mt-2  lg:mt-8 gap-4 w-[90%] md:w-[80%] mx-auto lg:mr-auto lg:ml-8 relative">
            <AuthTitle title="Verfiy Your Email" welcome={false} />


            <div className="flex flex-col  items-center mt-8">
                <p className="text-[1.12rem] md:text-[1.5rem] font-[400]">Enter verification code</p>
                <div className="flex flex-col md:flex-row gap-1 items-center mt-3 flex-wrap justify-center">
                    <p className="text-[0.8rem] md:text-[1rem] font-[400] ">We've sent you a code to </p>
                    <span className="text-[0.8rem] md:text-[1rem] font-[700]">{email}</span>
                </div>
                
            </div>
          
          <VerifyInput />

          <div className="flex flex-col gap-2 mt-16 items-center">
                <p className="cursor-pointer font-[300] text-[0.9rem] md:text-[1rem]">Resend Code</p>
                <SubButton text="Confirm" />
          </div>
        </div>
    )
}

export default Verify