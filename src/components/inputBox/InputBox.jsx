const InputBox = ({value,onChange,name,placeholder,type,currentTheme}) => {
  return (
    <div className=" w-[100%] max-w-80 h-10  bg-white rounded-3xl  text-black"
    style={{boxShadow:`2px 2px 5px black`}}
    >
        <input className="w-full h-full outline-none text-xs p-2   bg-transparent"
        value={value}
        type={type}
        onChange={(e)=>onChange(e)}
        placeholder={placeholder}
        name={name}
        required
        >
        </input>
        
    </div>
  )
}
export default InputBox