import TitleSection from "./TitleSection"
import MobileInput from "./Form/MobileInput"
const MobileHero = () => {
    return (
        <div className="flex flex-col lg:hidden">
            <TitleSection />
            <MobileInput />
        </div>
    )
}

export default MobileHero