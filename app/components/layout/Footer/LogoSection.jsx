import Image from "next/image"

const LogoSection = () => {
    const logo = "/icons/Layout/logoMain.svg";
    const logoYtb = "/icons/Layout/logoYtb.svg";
    const logoIg = "/icons/Layout/logoIg.svg";
    const logoX = "/icons/Layout/logoX.svg";
    const logoLinked = "/icons/Layout/logoLinked.svg";

    return (
        <div className="flex flex-row md:flex-col md:w-[11rem] h-[10rem] mt-10 justify-between md:justify-center px-4 lg:pl-8 gap-4">
            <Image src={logo} alt="footer main logo" width={95} height={95} className="hidden lg:block" />
             <Image src={logo} alt="footer main logo" width={85} height={85} className=" hidden md:block lg:hidden" />
             <Image src={logo} alt="footer main logo" width={65} height={65} className="block sm:hidden" />
             <Image src={logo} alt="footer main logo" width={70} height={70} className="hidden sm:block md:hidden" />

            <div alt="logo row" className="flex  gap-2  hidden lg:flex flex-row ">
                <Image src={logoX} alt="X logo" width={25} height={25} />
                <Image src={logoIg} alt="instagram logo" width={25} height={25} />

                <Image src={logoYtb} alt="youtube logo" width={25} height={25} />
                <Image src={logoLinked} alt="linked in logo" width={25} height={25} />

            </div>
            <div className="flex gap-6 hidden md:flex flex-row lg:hidden">
                <Image src={logoX} alt="X logo" width={45} height={45} />
                <Image src={logoIg} alt="instagram logo" width={45} height={45} />

                <Image src={logoYtb} alt="youtube logo" width={45} height={45} />
                <Image src={logoLinked} alt="linked in logo" width={45} height={45} />

            </div>
            <div className="flex gap-4 flex flex-row sm:hidden">
                <Image src={logoX} alt="X logo" width={30} height={30} />
                <Image src={logoIg} alt="instagram logo" width={30} height={30} />

                <Image src={logoYtb} alt="youtube logo" width={30} height={30} />
                <Image src={logoLinked} alt="linked in logo" width={30} height={30} />

            </div>
            <div className="flex gap-4  hidden sm:flex flex-row md:hidden">
                <Image src={logoX} alt="X logo" width={35} height={35} />
                <Image src={logoIg} alt="instagram logo" width={35} height={35} />

                <Image src={logoYtb} alt="youtube logo" width={35} height={35} />
                <Image src={logoLinked} alt="linked in logo" width={35} height={35} />

            </div>
           
        </div>
    )
}

export default LogoSection