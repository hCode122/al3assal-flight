const { default: Link } = require("next/link")

const LinkContainer = ({data}) => {

    return (
        <div className="flex flex-col mt-10 gap-4 px-4 md:px-0">
            <p className="font-bold md:text-[1rem] text-lg sm:text-2xl text-[#1E1E1E]">{data.title}</p>

            <div className="flex flex-col gap-2">
            {
                data.links.map((link, index) => {

                    return (
                        <Link key={index} href={link.url} className="text-[#1E1E1E] md:text-[1rem] text-lg sm:text-2xl font-[400]">{link.title} </Link>
                    )
                })
            }
            </div>
        </div>
    )
}

export default LinkContainer