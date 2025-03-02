'use client'

import { Checkbox } from "@mui/material"
import AuthTitle from "@/app/components/auth/AuthTitle"
import TextInput from "@/app/components/auth/TextInput"
import SubButton from "@/app/components/auth/SubButton"
import { useDirection } from "../DirectionContext";
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "@/app/_contextProviders/AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation';
const Forgot = () => {

    const [password, setPassword] = useState('')
    const [password_confirmation, setConfirm] = useState('')
    const [password_new, setNew] = useState('')
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const router = useRouter()
    if (!email) {
        router.push('/auth/sign-in')
      }
    const {forgotPassword, reForgotPassword} = useContext(AuthContext)
    const {  setBackArrow } = useDirection();
    

    useEffect(() => {
        setBackArrow("/auth/sign-in")
    }, []);

    function handleSubmit(e) {
        e.preventDefault()
        forgotPassword(email, password, password_confirmation, password_new)
    }

    return (
        <div className="flex flex-col mt-2   gap-4 w-[80%] mx-auto lg:mr-auto lg:ml-8 h-full">
            <AuthTitle title="Forgot Password" welcome={false} />

            <form className="flex flex-col mt-6 gap-4 h-[66%]">
                <TextInput placeholder={"Old Password"} label={'Old Password'} isPW={true} value={password} setter={setPassword} />
                <TextInput placeholder={"New Password"} label={'New Password'} isPW={true} value={password_confirmation}
                 setter={setConfirm} />
                <TextInput placeholder={"Rewrite the new Password"} label={'Confirm New Password'} isPW={true}
                value={password_new} setter={setNew} />

               

                <SubButton onClick={handleSubmit}  text="Go To Login Page" />
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-auto">
                <span className="text-[1rem] font-[300]">Dont have an account?
                </span>
                <Link className="font-[600]" href={'/auth/sign-up'}>Signup</Link>
                </div>
                
            </form>
        </div>
    )
}

export default Forgot