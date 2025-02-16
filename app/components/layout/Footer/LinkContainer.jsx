const { default: Link } = require("next/link")

const LinkContainer = ({data}) => {

    return (
        <div className="flex flex-col mt-10 gap-4 px-4 lg:px-0">
            <p className="font-bold text-[#1E1E1E]">{data.title}</p>

            <div className="flex flex-col gap-2">
            {
                data.links.map((link, index) => {
                    console.log(link)

                    return (
                        <Link key={index} href={link.url} className="text-[#1E1E1E] lg:text-md text-lg font-[400]">{link.title} </Link>
                    )
                })
            }
            </div>
        </div>
    )
}

export default LinkContainer