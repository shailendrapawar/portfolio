import { Outlet } from "react-router"
import Navbar from "./components/navbar/Navbar"

function RootLayout() {
  return (
    <div className="bg- min-h-screen w-screen relative flex flex-col items-center">

      <Navbar/>
      <div className=" w-[100%]">
        <Outlet/>
      </div>

    </div>
  )
}
export default RootLayout