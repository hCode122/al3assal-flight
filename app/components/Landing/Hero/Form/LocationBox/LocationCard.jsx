import Image from "next/image"
const originCard = "/icons/Landing/Hero/originImg.svg";
const destinationCard = "/icons/Landing/Hero/destinationCard.svg";

const LocationCard = ({cardData, type}) => {

    return (
        <div className="flex gap-2 items-center  px-2 py-2 bg-[#F7F7FA] border-b-[1px] last:border-0 border-[#7A7A7A] hover:bg-blue-200">
            <Image src={type ? destinationCard : originCard} alt="plane icon" width={40} height={40} />
            <p className="text-[1.4rem] font-[400] text-[#1C2B59]">{cardData.plane}</p>
            <p className="text-[1rem] text-[#7A7A7A]">{cardData.location}</p>
        </div>
    )
}

export default LocationCard