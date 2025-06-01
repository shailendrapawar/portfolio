import "./index.css"
import { Outlet } from "react-router"
import Navbar from "./components/navbar/Navbar"
import { useSelector } from "react-redux"

function RootLayout() {
  const {currentTheme}=useSelector(s=>s.theme)
  // console.log(currentTheme)
  return (
    <div className={`bg- min-h-screen w-screen relative flex flex-col items-center ${currentTheme?.name=="light"?"light-background":"dark-background"}`}
    style={{color:currentTheme.textPrimary}}
    >
      <Navbar/>
      
      <div className=" w-[100%]">
        <Outlet/>
      </div>

    </div>
  )
}
export default RootLayout