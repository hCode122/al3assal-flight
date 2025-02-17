import Image from "next/image";

const AddCityButton = ({ onClick }) => {
    const plus = "/icons/Landing/Hero/addBtn.svg";

    return (
        <div className="flex gap-2 items-center ml-4 cursor-pointer mx-auto lg:mx-0 py-6" onClick={onClick}>
            <Image src={plus} alt="add city button" className="hidden lg:block" width={20} height={20} />
            <Image src={plus} alt="add city button" className="block lg:hidden" width={30} height={30} />

            <p className="font-[600] text-[1.4rem] lg:text-[1rem] text-[#253A7B]">Add City</p>
        </div>
    );
};


export default AddCityButton