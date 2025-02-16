import Image from "next/image"

const LogoSection = () => {
    const logo = "/icons/Layout/logoMain.svg";
    const logoYtb = "/icons/Layout/logoYtb.svg";
    const logoIg = "/icons/Layout/logoIg.svg";
    const logoX = "/icons/Layout/logoX.svg";
    const logoLinked = "/icons/Layout/logoLinked.svg";

    return (
        <div className="flex flex-row lg:flex-col lg:w-[11rem] h-[10rem] mt-10 justify-between lg:justify-center px-4 lg:pl-8 gap-4">
            <Image src={logo} alt="footer main logo" width={95} height={95} className="hidden lg:block" />
             <Image src={logo} alt="footer main logo" width={75} height={75} className=" lg:hidden" />

            <div className="flex gap-2 hidden lg:block ">
                <Image src={logoX} alt="X logo" width={25} height={25} />
                <Image src={logoIg} alt="instagram logo" width={25} height={25} />

                <Image src={logoYtb} alt="youtube logo" width={25} height={25} />
                <Image src={logoLinked} alt="linked in logo" width={25} height={25} />

            </div>
            <div className="flex gap-6 lg:hidden">
                <Image src={logoX} alt="X logo" width={40} height={40} />
                <Image src={logoIg} alt="instagram logo" width={40} height={40} />

                <Image src={logoYtb} alt="youtube logo" width={40} height={40} />
                <Image src={logoLinked} alt="linked in logo" width={40} height={40} />

            </div>
        </div>
    )
}

export default LogoSection