import Image from "next/image"
const SupportButton = () => {
    const supportImg = "/icons/Landing/Hero/supportImg.svg";

    return (
        <div className="flex gap-3 items-center mx-auto lg:mx-0">
            <Image alt="support button" src={supportImg} height={25} width={25} />
            <p className="text-[#1C3B59] text-[1.2rem]">Customer Support</p>
        </div>
    )
}

export default SupportButton