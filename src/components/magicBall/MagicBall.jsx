import { useSelector } from "react-redux"

function MagicBall({extraClasses ,delay,icon}) {
    const {currentTheme}=useSelector(s=>s.theme);
    const glowClass="shadow-[0_0_20px_5px_rgba(37,99,235,0.8)] animate-pulse rounded-full bg-[#2563EB]"

  return (
    <div className={`absolute ${extraClasses} h-15 md:h-20  hover:scale-110  w-15 md:w-20 flex justify-center items-center p-3 md:p-5 rounded-full transition-all ease-in-out ${glowClass} `} style={{backgroundColor:currentTheme.accent,animationDelay:`${delay}s`}}
    
    >
        {icon?icon:<></>}
    </div>


  )
}
export default MagicBall