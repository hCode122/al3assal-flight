'use client'
import InputForm from "./Form/InputForm"

import "../style.css"
import HeaderTitle from "./HeaderTitle";
const Hero = () => {  

    return (
        <div className="flex w-full px-14 pt-20 justify-center hidden lg:block">
            <div className="flex flex-col gap-32  heroBg">
                <HeaderTitle />
                    <InputForm
                        
                    />
            </div>  
        </div>
    )
}

export default Hero;