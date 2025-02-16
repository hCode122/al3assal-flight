import Image from "next/image";

const WhoSection = () => {
    const aboutBanner = "/imgs/about/aboutBanner.png";
    const whoBanner = "/imgs/about/whoBanner.png";

    return (
        <div className="flex flex-col lg:px-14  items-center gap-10">
            <img src={aboutBanner} alt="About section banner" className="w-full min-h-[24rem] lg:h-[30rem] flex-1 lg:flex-0"  />
            <div className="flex flex-col lg:flex-row-reverse gap-8 px-6 lg:px-0">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-[2rem] text-[#1C2B59] font-[700]">Who We Are?</p>

                    <p className="text-[1.5rem] text-[#1C2B59] font-[400] text-center">
                    Lorem ipsum dolor sit amet consectetur. Purus nisi odio faucibus a hendrerit auctor purus. Vel turpis faucibus sed facilisi erat viverra id. Libero feugiat odio urna nibh placerat laoreet. Lorem ipsum dolor sit amet consectetur. Purus nisi odio faucibus a hendrerit auctor purus. Vel turpis faucibus sed facilisi erat viverra id. Libero feugiat odio urna nibh placerat laoreet.Purus nisi odio faucibus a hendrerit auctor purus. Vel turpis faucibus sed facilisi erat viverra id. Libero feugiat odio urna nibh placerat laoreet.
                    </p>
                </div>
                <img src={whoBanner} alt="About section banner" className="lg:w-[50rem] lg:h-[25rem] h-[35rem] w-full rounded-[16px]" />
            </div>
        </div>
    )
}

export default WhoSection