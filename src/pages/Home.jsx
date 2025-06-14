import { useSelector } from "react-redux"
import Landing from "../sections/landing/Landing"
import AboutMe from "../sections/aboutMe/AboutMe"
import Skills from "../sections/skills/Skills"

function Home() {
  const {currentTheme}=useSelector(s=>s.theme)
  return (
    <div className="text-white w-full h-auto">

      <Landing/>

      <AboutMe/>

      <Skills/>

    </div>
  )
}
export default Home