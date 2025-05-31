import { useSelector } from "react-redux"
import { NavLink } from "react-router"

function Navbar() {
  const {currentTheme}=useSelector(s=>s.theme)
  return (
    <nav className="h-13 w-[90%] max-w-200 bg-white mt-5 rounded-4xl flex justify-center items-center"
    style={{backgroundColor:currentTheme.cardBackground,border:`1px solid ${currentTheme.border}`,boxShadow:` 2px 2px 10px ${currentTheme.shadow}`}}
    >
      
      <nav className="web-nav flex justify-center items-center gap-5">
        <NavLink to={"/"} className={({isActive})=>`w-20 h-8 flex justify-center items-center`} style={({isActive})=>isActive?{borderBottom:`3px solid ${currentTheme.accent}`}:{borderBottom:`3px solid transparent`}}>Home</NavLink>
        <NavLink to={"/projects"} className={({isActive})=>`w-20 h-8 flex justify-center items-center`} style={({isActive})=>isActive?{borderBottom:`3px solid ${currentTheme.accent}`}:{borderBottom:`3px solid transparent`}}>Projects</NavLink>
        <NavLink to={"/contact"} className={({isActive})=>`w-20 h-8 flex justify-center items-center`} style={({isActive})=>isActive?{borderBottom:`3px solid ${currentTheme.accent}`}:{borderBottom:`3px solid transparent`}}>Contact</NavLink>
      </nav>


      
    </nav>
  )
}
export default Navbar