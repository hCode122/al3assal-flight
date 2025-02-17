import Image from "next/image"
import { useState } from "react";
const passenger = "/icons/Landing/Hero/person.svg";
import PassengerMenu from "./PassengerMenu";

const PassengerBox = () => {
    const [isPasOpen, setPasOpen] = useState(false);
   
    const [passengerValues, SetPassengerValues] = useState([]);

    const [passengerData, setPassengerData] = useState([
        {title: 'Held infant', desc: 'Under 2', number: 1},
        {title: 'Seated infant', desc: 'Under 2', number: 1},
        {title: 'Child', desc: 'Between 2 & 12', number: 1},
        {title: 'Young', desc: 'Above 12', number: 1},
        {title: 'Student', desc: 'Under 18', number: 1},
        {title: 'Adult', desc: 'Above 18', number: 1},
        {title: 'Senior', desc: 'Above 60', number: 1},
    ]
    )

    return (
        <div onClick={() => setPasOpen(true)}  
        className="flex gap-2 bg-[#F7F7FA] w-full lg:w-[12rem] pl-2  lg:pl-4 py-2 h-[5rem] lg:h-[4rem] relative cursor-pointer items-center rounded-[7.5px]">
                        <Image src={passenger} alt="date button" width={35} height={35} />
            <div  className=" flex flex-col 
             rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1.1rem] mb-4">Passenger</p>
            </div>
            {isPasOpen ? <PassengerMenu passengerData={passengerData} setIsOpen={setPasOpen} /> : null}
        </div>
    )
}
export default PassengerBox