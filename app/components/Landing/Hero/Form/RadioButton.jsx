import Image from "next/image";
import { useState, useEffect } from "react";

const RadioButton = ({ onClick, text, value, selectedVal, noBg }) => {
    const activeImg = "/icons/Landing/Hero/radioActive.svg";
    const inActiveImg = "/icons/Landing/Hero/radioInActive.svg";
    const activeClass = "bg-[#253A7B] text-white";
    const inActiveClass = "bg-[#F7F7FA] Lg:bg-white text-[#253A7B]";
    const noBgClass = "bg-white !important text-[#253A7B]"
    const selected = selectedVal || value;
    const [active, setActive] = useState(selected === value);

    useEffect(() => {
        setActive(selectedVal === value);
    }, [selectedVal]);

    return (
        <div 
            onClick={() => onClick(value)} 
            data-value={value} 
            className={`cursor-pointer border-[1px] rounded-[7.6px] px-3 py-2 flex gap-2 justify-center items-center
                
              
                ${active ? activeClass : inActiveClass}`}
        >
            <Image width={30} height={30} alt="checkbox Icon" src={active ? activeImg : inActiveImg} />
            <p className="font-[600] w-[7rem]">{text}</p>
        </div>
    );
};

export default RadioButton;
