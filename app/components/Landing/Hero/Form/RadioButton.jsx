import Image from "next/image";
import { useState, useEffect } from "react";

const RadioButton = ({ onClick, text, value, tripType, noBg }) => {
    const activeImg = "/icons/Landing/Hero/radioActive.svg";
    const inActiveImg = "/icons/Landing/Hero/radioInActive.svg";
    const activeClass = "bg-[#253A7B] text-white";
    const inActiveClass = "bg-white text-[#253A7B]";
    const noBgClass = "bg-white !important text-[#253A7B]"
    const selected = tripType || value;
    const [active, setActive] = useState(selected === value);

    useEffect(() => {
        setActive(tripType === value);
    }, [tripType]);

    return (
        <div 
            onClick={() => onClick(value)} 
            data-value={value} 
            className={`cursor-pointer border-[1px] rounded-[7.6px] px-2 py-2 flex gap-2 justify-center items-center
                
              
                ${noBg ? noBgClass : active ? activeClass : inActiveClass}`}
        >
            <Image width={30} height={30} alt="checkbox Icon" src={active ? activeImg : inActiveImg} />
            <p>{text}</p>
        </div>
    );
};

export default RadioButton;
