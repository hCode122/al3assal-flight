
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
        <div className="flex flex-col mt-8 gap-4 w-[80%] mr-auto ml-8 relative">
            <AuthTitle title="Verfiy Your Email" welcome={false} />


            <div className="flex flex-col  items-center mt-8">
                <p className="text-[1.5rem] font-[400]">Enter verification code</p>
                <p className="text-[1rem] font-[400]">We've sent you a code to <span className="font-[700]">{email}</span></p>
            </div>
          
          <VerifyInput />

          <div className="flex flex-col gap-2 mt-16 items-center">
                <p className="cursor-pointer font-[300]">Resend Code</p>
                <SubButton text="Confirm" />
          </div>
        </div>
    )
}

export default Verify