import { useSelector } from "react-redux"
import Landing from "../sections/landing/Landing"
import AboutMe from "../sections/aboutMe/AboutMe"
import Skills from "../sections/skills/Skills"
import Services from "../sections/services/Services"
import Projects from "../sections/projects/Projects"

function Home() {
  const {currentTheme}=useSelector(s=>s.theme)
  return (
    <div className="text-white w-full h-auto">

      <Landing/>
      {/* <hr className="text-black h-2 w-full"></hr> */}
      <AboutMe/>
      {/* <hr className="text-black h-2 w-full"></hr> */}
      <Skills/>

      <Services/>

      <Projects/>

    </div>
  )
}
export default Home