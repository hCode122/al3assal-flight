import "../style.css"
const ResultCard = ({economy}) => {

    return (
        <div className="flex  resultCard grid-item  h-[22rem]  justify-between px-1 rounded-[8px]">
            <p className="mt-auto mb-1 ml-4 text-white font-[400] text-[1.4rem] flex">Dubai</p>
            <div className="flex gap-1 justify-center items-center mt-auto mb-1 mr-4">
            {economy ? 
                <p className="  text-white font-[300] text-[0.8rem] flex"> Economy for</p>
                : null}
                <p className=" text-white font-[500] text-[1.1rem] flex"> $ 210</p>
           
            </div>
        </div>
    )
}

export default ResultCard