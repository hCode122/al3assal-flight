import "../style.css"

const ContactUs = () => {

    return (
        <div id="contact" className="flex flex-col gap-4 lg:gap-0 lg:flex-row px-10 pb-36 lg:pb-8 lg:px-14 py-6 lg:justify-between contactBanner lg:h-[26rem]">
            <div className="flex flex-col gap-2 lg:gap-0  text-white w-[80%] lg:w-[50%]" >
                <p className="text-[2.2rem] lg:text-[3rem] font-[700]">Let us hear from you</p>
                <p className="text-[1rem] lg:text-[1.4rem]">Stay one step ahead. Find the best value travel with the latest deal, tips & news.</p>
            </div>

            <form className="flex flex-col px-6 lg:px-4 lg:py-2 py-3 gap-3 rounded-[16px] contactForm lg:w-[29rem]">
                <div className="flex flex-col gap-2">
                    <p className="text-[1.3rem]">Email</p>
                    <input placeholder="mymail@example.com"
                    className="p-2 bg-[#FFFFFF] rounded-[8px]" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[1.3rem]">Message</p>
                    <textarea placeholder="Write your message here!"
                    className="px-2 bg-[#FFFFFF] rounded-[8px] h-[17rem] lg:h-[9.7rem] p-2 resize-none" ></textarea>
                </div>

                <button className='p-2 py-3 lg:py-2 rounded-[8px] bg-[#253A7B] text-[1.2rem] w-full lg:w-[6rem] text-center text-white mt-1'>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs