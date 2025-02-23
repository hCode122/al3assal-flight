import { useState, useRef, useEffect } from "react";
import LocationCard from "./LocationCard";
const LocationMenu = ({ locationData, setIsOpen, setSelectedLocation, type }) => {
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
        setIsOpen(false);
        setSelectedLocation(location);
       
    };

    return (
        <div className="absolute left-[0] bottom-[12] w-full lg:w-[23rem]" ref={dropdownRef}>
          
                <ul className="absolute  left-0 mt-1 w-full  rounded-[16px]  shadow-md z-[110] max-h-[24rem] overflow-auto">
                    {locationData.map((cardData, index) => (
                        <LocationCard
                            key={index}
                            onClick={() => handleSelect(cardData.location)}
                            cardData={cardData}
                            type={type}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        />
                    ))}
                </ul>
        </div>
    );
};

export default LocationMenu;