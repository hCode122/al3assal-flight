
'use client'
import { Checkbox } from "@mui/material"
import AuthTitle from "@/app/components/auth/AuthTitle"
import TextInput from "@/app/components/auth/TextInput"
import SubButton from "@/app/components/auth/SubButton"
import { useDirection } from "../DirectionContext";
import { useEffect } from "react"
import Link from "next/link"
const SignUp = () => {

    const {  setBackArrow } = useDirection();

    useEffect(() => {
        setBackArrow(null)
    }, []);

    return (
        <div className="flex flex-col sm:mt-2 gap-4 w-[80%] mx-auto lg:mr-auto lg:ml-8 h-full max-h-[100%] flex-shrink-1">
            <AuthTitle title="Sign up" welcome={true} />

            <form className="flex flex-col sm:mt-3 mt-4 lg:mt-6 sm:gap-4 gap-4 h-[64%]">
                <TextInput placeholder={"yourmail@example.com"} label={'Email'} />
                <TextInput placeholder={"Password"} label={'Password'} isPW={true} />
                <TextInput placeholder={"Confim Password"} label={'Confirm Password'} isPW={true} />

               

                <SubButton text="Sign up" />
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-auto">
                <span className="text-[1rem] font-[300]">Already have an account?
                </span>
                <Link className="font-[600]" href={'/auth/sign-in'}>Log in</Link>
                </div>
                
            </form>
        </div>
    )
}

export default SignUp