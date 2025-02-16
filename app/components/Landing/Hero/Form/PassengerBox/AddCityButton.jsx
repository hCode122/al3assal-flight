import Image from "next/image";

const AddCityButton = ({ onClick }) => {
    const plus = "/icons/Landing/Hero/addBtn.svg";

    return (
        <div className="flex gap-2 items-center ml-4 cursor-pointer" onClick={onClick}>
            <Image src={plus} alt="add city button" width={20} height={20} />
            <p className="font-[600] text-[1rem] text-[#253A7B]">Add City</p>
        </div>
    );
};


export default AddCityButton