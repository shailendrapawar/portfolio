import "./navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router"


import { toggleTheme } from "../../store/slices/themeSlice.js"
import { useEffect, useState } from "react";

import { FaDollarSign } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";

import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";


function Navbar() {


  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const { currentTheme } = useSelector(s => s.theme)

  useEffect(() => {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18; // Daytime between 6 AM and 6 PM

    // console.log(isDay);

    if (isDay) {

    }
    // dispatch(setTheme(isDay ? "light" : "dark"));
  }, []);


  return (
    <nav className={` cursor-pointer h-13 w-[90%] max-w-200 mt-5 rounded-4xl flex justify-center items-center relative shadow-black shadow-md `}
      style={{ backgroundColor:currentTheme.secondaryAccent, border: `0px solid ${currentTheme.border}`}}
      onClick={() => setToggle(false)}
    >

      <FiDollarSign className="h-10 w-9  text-white absolute left-5" onClick={(e) => { e.stopPropagation(); navigate("/") }} />

      <nav className="web-nav flex justify-center items-center gap-5 ">
        <NavLink to={"/"} className={({ isActive }) => `w-20 h-8 flex justify-center items-center text-white transition-all ease-in-out duration-300`} style={({ isActive }) => isActive ? { borderBottom: `3px solid white` } : { borderBottom: `3px solid transparent` }}>Home</NavLink>
        <NavLink to={"/projects"} className={({ isActive }) => `w-20 h-8 flex justify-center items-center text-white transition-all ease-in-out duration-300`} style={({ isActive }) => isActive ? { borderBottom: ` 3px solid white` } : { borderBottom: `3px solid transparent` }}>Projects</NavLink>
        <NavLink to={"/contact"} className={({ isActive }) => `w-20 h-8 flex justify-center items-center text-white transition-all ease-in-out duration-300`} style={({ isActive }) => isActive ? { borderBottom: `3px solid white` } : { borderBottom: `3px solid transparent` }}>Contact</NavLink>
      </nav>


      <nav className={`mobile-nav flex-col items-center justify-evenly z-10 h-30 w-[80%] absolute -bottom-30 rounded-b-2xl hidden transition-all ease-in-out duration-300`} style={toggle ? { backgroundColor: currentTheme.secondaryAccent, } : { display: "none" }}>
        <NavLink to={"/"} className={({ isActive }) => `w-20 h-8 flex justify-center items-center transition-all ease-in-out duration-300`} style={({ isActive }) => isActive ? { borderBottom: `3px solid ${currentTheme.accent}` } : { borderBottom: `3px solid transparent` }}>Home</NavLink>
        <NavLink to={"/projects"} className={({ isActive }) => `w-20 h-8 flex justify-center items-center transition-all ease-in-out duration-300`} style={({ isActive }) => isActive ? { borderBottom: `3px solid ${currentTheme.accent}` } : { borderBottom: `3px solid transparent` }}>Projects</NavLink>
        <NavLink to={"/contact"} className={({ isActive }) => `w-20 h-8 flex justify-center items-center transition-all ease-in-out duration-300`} style={({ isActive }) => isActive ? { borderBottom: `3px solid ${currentTheme.accent}` } : { borderBottom: `3px solid transparent` }}>Contact</NavLink>
      </nav>



      <span className={` theme-toggle h-5 w-10 rounded-xl flex items-center absolute right-10 ${currentTheme.name == "light" ? "justify-start" : "justify-end"} pl-1 pr-1`}
        onClick={(e) => { e.stopPropagation(); dispatch(toggleTheme()) }}
        style={{ backgroundColor:"white" }}
      >
        {currentTheme.name == "light" && (<MdSunny className={`text-yellow-400 rotateRight `} />)}
        {currentTheme.name == "dark" && (<HiMiniMoon className={`text-black rotateLeft `} />)}
      </span>

      {!toggle && (<CgMenuRight className=" rotateRight mobileNav-toggler absolute right-5 h-7 w-7 " onClick={(e) => { e.stopPropagation(); setToggle(!toggle) }} />)}
      {toggle && (<RxCross2 className=" rotateLeft mobileNav-toggler absolute right-5 h-7 w-7" onClick={(e) => { e.stopPropagation(); setToggle(!toggle) }} />)}


    </nav>
  )
}
export default Navbar