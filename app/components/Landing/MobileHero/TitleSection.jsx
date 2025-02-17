import Image from "next/image"
import HeaderTitle from "../Hero/HeaderTitle"
import "../style.css"
const TitleSection = () => {
    const mobileLogo = "/icons/landing/Hero/mobileLogo.svg"
    return (
        <div className="flex flex-col h-[55rem] pt-20  gap-36 mobileBanner items-center  rounded-b-[16px]">
            <HeaderTitle />

            <Image src={mobileLogo} alt="al3asal logo" width={200} height={200} />
        </div>
    )
}

export default TitleSection