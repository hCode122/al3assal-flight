import Image from "next/image"
import HeaderTitle from "../Hero/HeaderTitle"
import "../style.css"
const TitleSection = () => {
    const mobileLogo = "/icons/landing/Hero/mobileLogo.svg"
    return (
        <div className="flex flex-col h-screen pt-8 gap-24 mobileBanner items-center">
            <HeaderTitle />

            <Image src={mobileLogo} alt="al3asal logo" width={140} height={140} />
        </div>
    )
}

export default TitleSection