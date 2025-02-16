
import Image from "next/image";
const SearchButton = ({isCancel}) => {
    const searchButton = '/icons/Landing/Hero/search.svg';
    return (
        
           
        <button className="flex w-full mt-4 lg:mt-0 lg:w-[5.5rem] h-[4rem]  p-2 py-3 items-center justify-center bg-[#1C2B59] 
        text-white text-[1rem] font-[400] rounded-[8px] ">
            <Image src={searchButton} alt="search button" width={25} height={25} />
        </button>
         
        
    )
}

export default SearchButton