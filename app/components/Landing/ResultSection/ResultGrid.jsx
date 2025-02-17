import ResultCard from "./ResultCard"

const ResultGrid = () => {

    return (
        <div className="hidden lg:grid lg:grid-cols-8 lg:gap-x-[0.7rem] lg:gap-y-8 lg:max-w-full lg:justify-center">
    <ResultCard />
    <ResultCard />
    <ResultCard />

    <ResultCard />
    <ResultCard />
    <ResultCard />

    <ResultCard />
    <ResultCard />
    <ResultCard />
</div>
    )
}

export default ResultGrid