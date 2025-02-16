import Link from "next/link"
const TextInput = ({isPW, isForgot, label, value, setter, placeholder}) => {

    return (
        <div className="flex flex-col gap-2 ">
            <label className="text-md text-[#1E1E1E]">{label}</label>
            <input placeholder={placeholder}
            className="border-[1px] border-[#555555] bg-transparent rounded-[8px] py-2 px-4" type={isPW ? 'password' : 'text'} />
            {isForgot ? (
                <Link href="forgot-password" className="flex ml-auto text-[0.8rem] font-[300]">Forgot my password</Link>
            ) : null
            }
        </div>
    )
}

export default TextInput