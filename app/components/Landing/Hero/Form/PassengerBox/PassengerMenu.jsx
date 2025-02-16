import { useState, useRef, useEffect } from "react";
import PassengerCard from "./PassengerCard";

const PassengerMenu = ({ passengerData, setIsOpen, setPassenger }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (location) => {
        setPassenger(location);
        setIsOpen(false);
    };

    return (
        <div className="absolute left-[0] bottom-[12] w-full lg:w-[12rem]  rounded-[16px] " ref={dropdownRef}>
          
                <ul className="dropdown absolute flex flex-col gap-2 left-0 mt-1 w-full border rounded bg-[#F7F7FA] p-1 shadow-md z-10 max-h-[27rem] overflow-auto">
                    {passengerData.map((passenger, index) => (
                        <PassengerCard
                            passenger={passenger}
                        />
                    ))}
                </ul>
        </div>
    );
};

export default PassengerMenu;