import Image from "next/image"
import { useState, useRef, useEffect } from "react";
import LocationMenu from "./LocationMenu";
const switchImg = "/icons/Landing/Hero/switch.svg";
import SearchButton from "./SearchButton";
import ReactDOM from 'react-dom';

const DropdownPortal = ({ children, position }) => {
    const style = {
      position: 'absolute',
      top: position.top,
      left: position.left,
      zIndex: 1000, // Ensure it's on top
    };
  
    return ReactDOM.createPortal(
      <div style={style}>
        {children}
      </div>,
      document.body
    );
  };
const LocationBox = ({setFormData, formData}) => {
    const [isOriginOpen, setIsOriginOpen] = useState(false);
    const [isDestinationOpen, setIsDestinationOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [dropdownPosition2, setDropdownPosition2] = useState({ top: 0, left: 0 });

    const originButtonRef = useRef(null);
    const originButtonRef2 = useRef(null);

    const setSelectedLocation = (location) => {
        setFormData({...formData, ['from']: location})
    }

    useEffect(() => {
        if (isOriginOpen && originButtonRef.current) {
          const rect = originButtonRef.current.getBoundingClientRect();
          setDropdownPosition({
            top: rect.bottom + window.scrollY, // dropdown appears below the trigger
            left: rect.left + window.scrollX,    // aligns left edge
          });
        }
      }, [isOriginOpen]);
      useEffect(() => {
        if (isDestinationOpen && originButtonRef2.current) {
          const rect = originButtonRef2.current.getBoundingClientRect();
          setDropdownPosition2({
            top: rect.bottom + window.scrollY, // dropdown appears below the trigger
            left: rect.left + window.scrollX,    // aligns left edge
          });
        }
      }, [isDestinationOpen]);

      
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
            <div ref={originButtonRef} onClick={() => setIsOriginOpen( true)} className="relative w-full lg:w-auto flex flex-1 flex-col bg-[#F7F7FA] pl-4 py-2
             rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1rem] font-[]">From</p>
                <p className="text-[#BFBFBF] text-[1.4rem] font-[400]">{selectedO ? selectedO : 'Origin'}</p>
                {isOriginOpen ?  <DropdownPortal position={dropdownPosition}>
    <LocationMenu
      setSelectedLocation={setSelectedO}
      locationData={locationData['origin']}
      setIsOpen={setIsOriginOpen}
    />
  </DropdownPortal> : null}
            </div>
                <Image onClick={() => flipValues()}
                alt="switch button" className="cursor-pointer hidden lg:block absolute left-[48%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[55]" src={switchImg}
                 height={50} width={50} />
            <div ref={originButtonRef2} onClick={() => setIsDestinationOpen(true)} className="relative w-full lg:w-auto flex flex-col bg-[#F7F7FA] flex-1 pl-4 lg:pl-12 py-2 rounded-[8px] cursor-pointer">
                <p className="text-[#7A7A7A] text-[1rem] font-[]">To</p>
                <p className="text-[#BFBFBF] text-[1.4rem] font-[400]">{selectedT ? selectedT : 'Destination'}</p>
                {isDestinationOpen ? 
                    <DropdownPortal position={dropdownPosition2}>
                <LocationMenu setSelectedLocation={setSelectedT} locationData={locationData['destination']} setIsOpen={setIsDestinationOpen} /> </DropdownPortal> : null}
                
            </div>
        </div>
    )
}

export default LocationBox