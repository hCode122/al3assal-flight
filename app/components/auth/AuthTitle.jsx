import Image from "next/image"

const AuthTitle = ({title, welcome}) => {
    const logo = "/icons/Layout/logoMain.svg";

    return (
        <div className="flex flex-col  items-center justiy-center">
            <Image src={logo} alt="al3assal logo" height={60} width={60} />
            <p className=" text-[1.7rem] md:text-[2rem] xlg:text-[2.4rem] font-[700]">{title}</p>
            {welcome ? <p className="text-[0.9rem] font-[400]">Welcome Back!</p> : null}
        </div>
    )
}

export default AuthTitle