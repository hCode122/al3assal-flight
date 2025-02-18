'use client'
import InputForm from "./Form/InputForm"

import "../style.css"
import HeaderTitle from "./HeaderTitle";
const Hero = () => {  

    return (
        <div className="flex  px-14   pt-20 justify-center hidden lg:block">
            <div className="w-full heroShadow pb-4">
                <div className="flex flex-col gap-32 min-h-[40rem] heroBg ">
                <HeaderTitle />
                <InputForm />
                </div>
            </div>
        </div>
    )
}

export default Hero;