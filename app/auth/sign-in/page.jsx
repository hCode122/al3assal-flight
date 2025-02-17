'use client'
import { Checkbox } from "@mui/material"
import AuthTitle from "@/app/components/auth/AuthTitle"
import TextInput from "@/app/components/auth/TextInput"
import SubButton from "@/app/components/auth/SubButton"
import { useState } from "react"
import { useDirection } from "../DirectionContext";
import { useEffect } from "react"
import Link from "next/link"
const SignIn = ({setDirection}) => {
    const [rememberMe, setRememberMe] = useState(false);
    const {  setBackArrow } = useDirection();

    useEffect(() => {
        setBackArrow(null)
    }, []);
    return (
        <div className="flex flex-col mt-2  lg:mt-8 gap-4 w-[80%] mx-auto lg:mr-auto lg:ml-8 h-full">
            <AuthTitle title="Login" welcome={true} />

            <form className="flex flex-col mt-4 lg:mt-6 gap-4 h-[64%]">
                <TextInput placeholder="youremail@example.com" label={'Email'} />
                <TextInput placeholder="Password" label={'Password'} isPW={true} isForgot={true} />

                <div className="flex items-center gap-1">
                    <Checkbox id="rememberMe" sx={{color: 'black', padding: '0'}} />
                    <label htmlFor="rememberMe" className=" block text-[0.9rem] font-[300]">
                    Remember my password
                    </label>
                </div>

                <SubButton text="Login" />
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-auto">
                <span className="text-[1rem] font-[300]">Dont have an account?
                </span>
                <Link className="font-[600]" href={'/auth/sign-up'}>Signup</Link>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn