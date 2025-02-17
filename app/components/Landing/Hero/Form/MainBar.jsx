import LocationBox from "./LocationBox/LocationBox"
import DateBox from "./LocationBox/DateBox"
import PassengerBox from "./PassengerBox/PassengerBox"
import SearchButton from "./LocationBox/SearchButton"
import Image from "next/image"
const MainBar = ({inputData, notMain, onRemove, setFormData, id}) => {
    const cancel = '/icons/Landing/Hero/cancel.svg';

    return (
        <div className="flex flex-col lg:flex-row gap-2 items-center flex-1 w-full h-full">
                <LocationBox setFormData={setFormData} formData={inputData} />
                <div className="flex gap-2 w-full lg:w-[21rem]">
                <DateBox />
                {inputData.tripType === 'single' ? <DateBox isDisabled={true} /> : <DateBox />}
                </div>
                
                <PassengerBox />

                {notMain ? (
                    <div className="w-[5.5rem] h-[4rem] p-2 bg-transparent flex items-center justify-center">
                        <Image 
                            src={cancel} 
                            alt="cancelbutton" 
                            width={25} 
                            height={25} 
                            className="cursor-pointer hidden lg:block"
                            onClick={() => onRemove(id)}
                        />
                        <Image 
                            src={cancel} 
                            alt="cancelbutton" 
                            width={35} 
                            height={35} 
                            className="cursor-pointer block lg:hidden"
                            onClick={() => onRemove(id)}
                        />
                    </div>
                ) : (
                    <SearchButton />
                )}
            </div>
    )
}

export default MainBar