import { useSelector } from "react-redux"
import Landing from "../sections/landing/Landing"
import AboutMe from "../sections/aboutMe/AboutMe"
import Skills from "../sections/skills/Skills"
import Services from "../sections/services/Services"
import Projects from "../sections/projects/Projects"
import Ball from "../components/ball/Ball"
import Footer from "../components/footer/Footer"

function Home() {
  const {currentTheme}=useSelector(s=>s.theme)
  
  return (
    <div className="text-white w-full h-auto flex flex-col items-center">

      <Landing/>
      <hr className="text-black h-2 w-[80%]" style={{color:currentTheme.accent+ `80`}}></hr>
      <AboutMe/>
      <hr className="text-black h-2 w-[80%]" style={{color:currentTheme.accent+ `80`}}></hr>
      <Skills/>

      <hr className="text-black h-2 w-[80%]" style={{color:currentTheme.accent+ `80`}}></hr>
      <Services/>
      <hr className="text-black h-2 w-[80%]" style={{color:currentTheme.accent+ `80`}}></hr>

      <Projects/>

      <Footer/>

    </div>
  )
}
export default Home