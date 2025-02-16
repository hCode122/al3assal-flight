const add = "/icons/Landing/Hero/down.svg";
const subtract = "/icons/Landing/Hero/up.svg";
import Image from "next/image";
import { useState } from "react";
const PassengerCard = ({passenger}) => {
    const [passengerNum, setNumber] = useState(1)
    const handlePassengerChange = (order) => {
        if (order == 'add') {

        }
    }

    return (
        <div className="flex px-1 justify-between items-center bg-transparent border-b-[1px] border-[#7A7A7A] last:border-0 py-1">
            <div className="flex flex-col gap-1 items-start text-left">
                <p className="text-[0.8rem]">{passenger.title}</p>
                <p className="text-[0.7rem] text-[#7C7C7D] font-[400]">{passenger.desc}</p>
            </div>
            <div className="flex gap-2 items-center max-w-initial">
                <Image onClick={() => setNumber(passengerNum+1)} src={add} alt="add button" height={29} width={27} 
                className="px-2 py-[0.6rem] border-[#1C2B59] border-[1px] rounded-[8px]" />
                <p className="text-[0.8rem] font-[400] text-[#0A0A0B]">{passengerNum}</p>
                <Image onClick={() => passengerNum!= 0 && setNumber(passengerNum-1)} src={subtract} alt="subtract button" height={29} width={27} 
                className="px-2 py-[0.6rem] border-[#1C2B59] border-[1px] rounded-[8px]" />
            </div>
        </div>
    )
}

export default PassengerCard;