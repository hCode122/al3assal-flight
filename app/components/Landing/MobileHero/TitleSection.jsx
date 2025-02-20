import Image from "next/image"
import HeaderTitle from "../Hero/HeaderTitle"
import "../style.css"
const TitleSection = () => {
    const mobileLogo = "/icons/Landing/Hero/mobileLogo.svg"
    return (
        <div className="flex flex-col h-[55rem] pt-20  gap-36 mobileBanner items-center  rounded-b-[16px]">
            <HeaderTitle />

            <Image src={mobileLogo} alt="al3asal logo" width={160} height={160} />
        </div>
    )
}

export default TitleSection