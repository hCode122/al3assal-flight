import Image from "next/image";

const VisionSection = () => {
    const plane1 = "/icons/about/whoPlane1.svg";
    const plane2 = "/icons/about/whoPlane2.svg";

    return (
        <div className="flex flex-col gap-8 px-8 lg:px-14">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 items-center">
                <div className="flex gap-4 items-center">
                    <Image src={plane1} width={100} height={100} alt="plane who section" />
                    <p className="text-[3rem] text-[#1C2B59] font-[700] w-[26rem]">Our Vision</p>
                </div>
                <p className="text-[1.4rem] text-[#1C2B59] font-[400]"> 
                Lorem ipsum dolor sit amet consectetur. Purus nisi odio faucibus a hendrerit auctor purus. Vel turpis faucibus sed facilisi erat viverra id. Libero feugiat odio urna nibh placerat laoreet. Lorem ipsum dolor sit amet consectetur.
                </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">

                <div className="flex gap-4 items-center">
                    <Image src={plane2} width={100} height={100} alt="plane who section" />
                    <p className="text-[3rem] text-[#1C2B59] font-[700] w-[26rem]">Our Mission</p>
                </div>
                <p className="text-[1.5rem] text-[#1C2B59] font-[400]"> 
                Lorem ipsum dolor sit amet consectetur. Purus nisi odio faucibus a hendrerit auctor purus. Vel turpis faucibus sed facilisi erat viverra id. Libero feugiat odio urna nibh placerat laoreet. Lorem ipsum dolor sit amet consectetur.
                </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">

                <div className="flex gap-4 items-center">
                    <Image src={plane1} width={100} height={100} alt="plane who section" />
                    <p className="text-[3rem] text-[#1C2B59] font-[700] w-[26rem]">Our Goal</p>
                </div>
                <p className="text-[1.5rem] text-[#1C2B59] font-[400]"> 
                Lorem ipsum dolor sit amet consectetur. Purus nisi odio faucibus a hendrerit auctor purus. Vel turpis faucibus sed facilisi erat viverra id. Libero feugiat odio urna nibh placerat laoreet. Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    )
}

export default VisionSection