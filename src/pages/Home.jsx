import { useSelector } from "react-redux"
import Landing from "../components/landing/Landing"
import AboutMe from "../components/aboutMe/AboutMe"

function Home() {
  const {currentTheme}=useSelector(s=>s.theme)
  return (
    <div className="text-white w-full h-auto">

      <Landing/>

      <AboutMe/>

    </div>
  )
}
export default Home