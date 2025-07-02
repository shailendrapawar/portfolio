import React from "react";

const InputBox = ({value,onChange,name,placeholder,type,currentTheme,loading}) => {
  return (
    <div className=" w-[100%] max-w-120 h-10  bg-white rounded-3xl  text-black"
    style={{boxShadow:`2px 2px 5px black`}}
    >
        <input className="w-full h-full outline-none text-xs p-2 rounded-3xl   bg-transparent"
        value={value}
        type={type}
        onChange={(e)=>onChange(e)}
        placeholder={placeholder}
        name={name}
        required
        disabled={loading}
        >
        </input>
        
    </div>
  )
}
export default React.memo(InputBox);