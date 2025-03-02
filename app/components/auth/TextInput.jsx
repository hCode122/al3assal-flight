import Link from "next/link"
const TextInput = ({isPW, label, value, setter, placeholder}) => {

    return (
        <div className="flex flex-col gap-2  w-full max-w-[100%] ">
            <label className="text-md text-[#1E1E1E]">{label}</label>
            <input value={value} onChange={e => setter(e.target.value)} placeholder={placeholder}
            className="border-[1px] border-[#555555] bg-transparent rounded-[8px] py-2 px-4" type={isPW ? 'password' : 'text'} />
       
                
          
            
        </div>
    )
}

export default TextInput