
import Image from "next/image";
const SearchButton = ({isCancel}) => {
    const searchButton = '/icons/Landing/Hero/search.svg';
    return (
        
           
        <button className="flex  mt-4 lg:mt-0 w-full lg:max-w-[5.5rem] h-[4rem]  px-8 py-1 items-center justify-center bg-[#1C2B59] 
        text-white text-[1rem] font-[400] rounded-[8px] ">
            <Image src={searchButton} alt="search button " className="hidden lg:block" width={25} height={25} />
            <Image src={searchButton} alt="search button " className="block lg:hidden" width={35} height={35} />

        </button>
         
        
    )
}

export default SearchButton