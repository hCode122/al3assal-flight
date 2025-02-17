import Image from "next/image"
import { useState } from "react";
import LocationMenu from "./LocationMenu";
const switchImg = "/icons/Landing/Hero/switch.svg";
import SearchButton from "./SearchButton";
const LocationBox = ({setFormData, formData}) => {
    const [isOriginOpen, setIsOriginOpen] = useState(false);
    const [isDestinationOpen, setIsDestinationOpen] = useState(false);

    const setSelectedLocation = (location) => {
        setFormData({...formData, ['from']: location})
    }
    const [selected, setSelected] = useState(null)

    const [locationData, setLocationData] = useState({origin:[
        {plane: 'JFK', location: 'USA, New York'},
        {plane: 'JFK', location: 'USA, New York'},
        {plane: 'JFK', location: 'USA, New York'},
        {plane: 'JFK', location: 'USA, New York'},
        {plane: 'JFK', location: 'USA, New York'},
        {plane: 'JFK', location: 'USA, New York'},
        {plane: 'JFK', location: 'USA, New York'}
    ]
    ,destination:[
        {plane: 'DMX', location: 'UAE, Dubai'},
        {plane: 'DMX', location: 'UAE, Dubai'},
        {plane: 'DMX', location: 'UAE, Dubai'},
        {plane: 'DMX', location: 'UAE, Dubai'},
        {plane: 'DMX', location: 'UAE, Dubai'},
        {plane: 'DMX', location: 'UAE, Dubai'},
        {plane: 'DMX', location: 'UAE, Dubai'}
    ]}
    )

    return (
        <div className="relative flex flex-col items-center lg:flex-row gap-2 lg:gap-2 w-full lg:w-[47rem]">
            <div onClick={() => setIsOriginOpen(true)} className="relative flex flex-col bg-[#F7F7FA] w-full lg:w-[23rem] pl-4 py-2
             rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1rem] font-[]">From</p>
                <p className="text-[#BFBFBF] text-[1.4rem] font-[400]">{selected ? selected : 'Origin'}</p>
                {isOriginOpen ? <LocationMenu setSelectedLocation={setSelected} locationData={locationData['origin']} setIsOpen={setIsOriginOpen} /> : null}
            </div>
                <Image className="hidden lg:block absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[55]" src={switchImg}
                 height={50} width={50} />
            <div onClick={() => setIsDestinationOpen(true)} className="relative flex flex-col bg-[#F7F7FA] w-full lg:w-[23rem] pl-4 lg:pl-12 py-2 rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1rem] font-[]">To</p>
                <p className="text-[#BFBFBF] text-[1.4rem] font-[400]">{selected ? selected : 'Destination'}</p>
                {isDestinationOpen ? <LocationMenu setSelectedLocation={setSelected} locationData={locationData['destination']} setIsOpen={setIsDestinationOpen} /> : null}
            </div>
        </div>
    )
}

export default LocationBox