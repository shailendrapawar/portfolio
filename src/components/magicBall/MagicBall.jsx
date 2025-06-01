import { useSelector } from "react-redux"

function MagicBall({extraClasses ,delay}) {
    const {currentTheme}=useSelector(s=>s.theme);
    const glowClass="shadow-[0_0_20px_5px_rgba(37,99,235,0.8)] animate-pulse rounded-full bg-[#2563EB]"

  return (
    <div className={`absolute ${extraClasses} h-15 w-15 rounded-full transition-all ease-in-out ${glowClass} `} style={{backgroundColor:currentTheme.accent,animationDelay:`${delay}s`}}
    s
    >

    </div>


  )
}
export default MagicBall