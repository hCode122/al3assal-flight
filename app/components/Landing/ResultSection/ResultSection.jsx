import HeaderText from "./HeaderText";
import MobileGrid from "./MobileGrid";
import ResultGrid from "./ResultGrid";

const ResultSection = () => {
    return (
        <div id="trips" className="flex flex-col gap-10 px-10 lg:px-14 mt-24 lg:mt-0">
            <HeaderText text="Find Great Fares" />
            <ResultGrid />
            <MobileGrid />
        </div>
    )
}

export default ResultSection