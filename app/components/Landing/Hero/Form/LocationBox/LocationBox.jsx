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
    const [selectedO, setSelectedO] = useState(null)
    const [selectedT, setSelectedT] = useState(null)

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
    
    function flipValues() {
        let temp = selectedT
        setSelectedT(selectedO)
        setSelectedO(temp)
    }

    return (
        <div className="relative flex flex-col items-center w-full lg:flex-1 lg:flex-row gap-2 lg:gap-2 ">
            <div onClick={() => setIsOriginOpen( true)} className="relative w-full lg:w-auto flex flex-1 flex-col bg-[#F7F7FA] pl-4 py-2
             rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1rem] font-[]">From</p>
                <p className="text-[#BFBFBF] text-[1.4rem] font-[400]">{selectedO ? selectedO : 'Origin'}</p>
                {isOriginOpen ? <LocationMenu setSelectedLocation={setSelectedO} locationData={locationData['origin']} setIsOpen={setIsOriginOpen} /> : null}
            </div>
                <Image onClick={() => flipValues()}
                alt="switch button" className="cursor-pointer hidden lg:block absolute left-[48%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[55]" src={switchImg}
                 height={50} width={50} />
            <div onClick={() => setIsDestinationOpen(true)} className="relative w-full lg:w-auto flex flex-col bg-[#F7F7FA] flex-1 pl-4 lg:pl-12 py-2 rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1rem] font-[]">To</p>
                <p className="text-[#BFBFBF] text-[1.4rem] font-[400]">{selectedT ? selectedT : 'Destination'}</p>
                {isDestinationOpen ? <LocationMenu setSelectedLocation={setSelectedT} locationData={locationData['destination']} setIsOpen={setIsDestinationOpen} /> : null}
            </div>
        </div>
    )
}

export default LocationBox