'use client'

import { Checkbox } from "@mui/material"
import AuthTitle from "@/app/components/auth/AuthTitle"
import TextInput from "@/app/components/auth/TextInput"
import SubButton from "@/app/components/auth/SubButton"
import { useDirection } from "../DirectionContext";
import { useEffect } from "react"
import Link from "next/link"
const Forgot = () => {

    const {  setBackArrow } = useDirection();

    useEffect(() => {
        setBackArrow("/auth/sign-in")
    }, []);

    return (
        <div className="flex flex-col mt-8 gap-4 w-[80%] mr-auto ml-8 h-full">
            <AuthTitle title="Forgot Password" welcome={false} />

            <form className="flex flex-col mt-6 gap-4 h-[66%]">
                <TextInput placeholder={"Old Password"} label={'Old Password'} isPW={true} />
                <TextInput placeholder={"New Password"} label={'New Password'} isPW={true} />
                <TextInput placeholder={"Rewrite the new Password"} label={'Confirm New Password'} isPW={true} />

               

                <SubButton text="Go To Login Page" />
                
                <div className="flex justify-center gap-2 mt-auto">
                <span className="text-[1rem] font-[300]">Dont have an account?
                </span>
                <Link className="font-[600]" href={'/sign-up'}>Signup</Link>
                </div>
                
            </form>
        </div>
    )
}

export default Forgot