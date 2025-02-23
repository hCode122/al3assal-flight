import Image from "next/image"
import { useState, useRef, useEffect } from "react";
const passenger = "/icons/Landing/Hero/person.svg";
import PassengerMenu from "./PassengerMenu";
import ReactDOM from 'react-dom';

const DropdownPortal = ({ children, position }) => {
    const style = {
      position: 'absolute',
      top: position.top,
      left: position.left,
      zIndex: 1000,
    };
  
    return ReactDOM.createPortal(
      <div style={style}>
        {children}
      </div>,
      document.body
    );
  };

const PassengerBox = () => {
    const [isPasOpen, setPasOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const [passengerValues, SetPassengerValues] = useState([]);
    const originButtonRef = useRef(null);
    useEffect(() => {
        if (isPasOpen && originButtonRef.current) {
          const rect = originButtonRef.current.getBoundingClientRect();
          setDropdownPosition({
            top: rect.bottom + window.scrollY, // dropdown appears below the trigger
            left: rect.left + window.scrollX,    // aligns left edge
          });
        }
      }, [isPasOpen]);

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
        <div ref={originButtonRef} onClick={() => setPasOpen(true)}  
        className="flex gap-2 bg-[#F7F7FA] w-full lg:w-auto lg:flex-2 pl-2 px-4 lg:pl-4 py-2 h-[5rem] lg:h-[4rem] relative cursor-pointer items-center rounded-[7.5px]">
                        <Image src={passenger} alt="date button" width={35} height={35} />
            <div  className=" flex flex-col 
             rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[0.9rem] xl:text-[1.1rem] mb-4">Passenger</p>
            </div>
            {isPasOpen ? <DropdownPortal position={dropdownPosition}> <PassengerMenu passengerData={passengerData} setIsOpen={setPasOpen} /> </DropdownPortal> : null}
        </div>
    )
}
export default PassengerBox