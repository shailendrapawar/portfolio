import "./index.css"
import { Outlet } from "react-router"
import Navbar from "./components/navbar/Navbar"
import { useSelector } from "react-redux"
import { Toaster } from "react-hot-toast"
import Footer from "./components/footer/Footer"
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange"

function RootLayout() {
  const { currentTheme } = useSelector(s => s.theme)
  // console.log(currentTheme)
  return (
    <div className={`bg- min-h-screen w-screen relative flex flex-col items-center ${currentTheme?.name == "light" ? "light-background" : "dark-background"}`}
      style={{ color: currentTheme.textPrimary }}
    >
      <ScrollToTopOnRouteChange/>
      <Toaster/>
        <Navbar />

        <div className=" w-[100%]">
          <Outlet />
        </div>

        <Footer/>

    </div>
  )
}
export default RootLayout