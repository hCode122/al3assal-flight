
'use client'

import { Checkbox } from "@mui/material"
import AuthTitle from "@/app/components/auth/AuthTitle"
import VerifyInput from "@/app/components/auth/VerifyInput"
import SubButton from "@/app/components/auth/SubButton"
import { useDirection } from "../DirectionContext";
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "@/app/_contextProviders/AuthContext"
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation"
const Verify = () => {
    const { setDirection, setBackArrow } = useDirection();
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    
    const {verifyCode, reVerifyCode} = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (email) {
            setDirection("rtl");  
            setBackArrow("/auth/sign-up")
        } else {
            router.replace('/auth/sign-in')

        }   
        
    }, []);
      
    function handleSubmit(e) {
        e.preventDefault()
        verifyCode(email, code)
    }

    function handleSendCode() {
        reVerifyCode(email)
    }

    return (
        <div className="flex flex-col mt-2   gap-4 w-[90%] md:w-[80%] mx-auto lg:mr-auto lg:ml-8 relative">
            <AuthTitle title="Verfiy Your Email" welcome={false} />


            <div className="flex flex-col  items-center mt-8">
                <p className="text-[1.12rem] md:text-[1.5rem] font-[400]">Enter verification code</p>
                <div className="flex flex-col md:flex-row gap-1 items-center mt-3 flex-wrap justify-center">
                    <p className="text-[0.8rem] md:text-[1rem] font-[400] ">We've sent you a code to </p>
                    <span className="text-[0.8rem] md:text-[1rem] font-[700]">{email}</span>
                </div>
                
            </div>
          
          <VerifyInput code={code} setCode={setCode} />

          <div className="flex flex-col gap-2 mt-16 items-center">
                <p onClick={handleSendCode} className="cursor-pointer font-[300] text-[0.9rem] md:text-[1rem]">Resend Code</p>
                <SubButton onClick={handleSubmit} text="Confirm" />
          </div>
        </div>
    )
}

export default Verify