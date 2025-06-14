import { useSelector } from "react-redux"
// import {}
import "./landing.css"

import lightWizzard from "../../assets/blue-wizard.png"
import darkWizzard from "../../assets/white-wizard.png"
import MagicBall from "../../components/magicBall/MagicBall";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const urls={
  linkedin:"https://www.linkedin.com/in/shailendra-pawar792/",
  github:"https://github.com/shailendrapawar/",
  facebook:"https://www.facebook.com/shailendra.pawar.50159",
  leetcode:"https://leetcode.com/u/shailendrapawar/",

  resume:"https://drive.google.com/drive/folders/1-OdardWOtvSyZfOf8WlEV3P45mQkgqAH?usp=drive_link",



}

function Landing() {
  const { currentTheme } = useSelector(s => s.theme);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex justify-center ">
      <section className=" min-h-[calc(100vh-80px)] w-full max-w-250 grid-background flex flex-col sm:flex-row">



        <main className="h-[50%] w-full p-3 flex flex-col justify-center items-start gap-8 sm:h-full sm:w-[50%] sm:gap-15 sm:pl-10 ">
          <h3 className="text-xl sm:text-2xl md:text-4xl" style={{ color: currentTheme.textPrimary }}>Hi, I'm <span style={{ color: currentTheme.accent }}>Shailendra Pawar</span></h3>

          <h1 className="text-3xl sm:text-5xl md:text-6xl " style={{ color: currentTheme.secondaryAccent }}>Full Stack Developer</h1>

          <p className="w-[80%] text-sm sm:text-lg md:text-xl" style={{ color: currentTheme.textSecondary }}>MERN stack wizard ,
            with a knack for real-time features,
            and seemless user experience</p>

          <div className="h-10 w-55 sm:w-65 sm:h-12 md:w-80 md:h-14 flex gap-2 " style={{ color: currentTheme.textPrimary }}>
            <button className="w-[50%] h-full cursor-pointer rounded-tl-3xl text-white transition-all hover:w-[70%] sm:text-lg md:text-2xl " style={{ backgroundColor: currentTheme.primary }}><a href={urls.resume} target="_blank">Resume</a></button>
            <button className="w-[50%] h-full cursor-pointer rounded-br-3xl sm:text-lg  md:text-2xl transition-all hover:w-[70%]" style={{ border: ` 2px solid ${currentTheme.primary}` }}>Let's talk?</button>
          </div>
        </main>


        <aside className="h-[50%] w-full relative flex justify-center items-center   sm:h-full sm:w-[50%] sm:pr-10">
          <div className="h-60 w-50 relative flex items-center justify-center sm:h-80 sm:w-65 md:h-95 md:w-80">
            <MagicBall extraClasses={"-top-8 left-2 magicBall-anime "}  delay={0.7} icon={<a href={urls.github} target="_blank" className="h-full w-full"><FaGithub className="h-full w-full text-black"/></a>}/>
            <MagicBall extraClasses={"-top-2 -right-5 magicBall-anime  "} delay={0.1} icon={<a href={urls.linkedin} target="_blank" className="h-full w-full"><FaLinkedin className="h-full w-full text-black"/></a>}  />

            <img src={currentTheme.name == "light" ? `${lightWizzard}` : `${darkWizzard}`}
              className=" h-full w-full  "
            ></img>

            <MagicBall extraClasses={"-right-4 bottom-2 magicBall-anime"}  delay={0.2} icon={<a href={urls.leetcode} target="_blank" className="h-full w-full"><SiLeetcode className="h-full w-full text-black"/></a>}/>
            <MagicBall extraClasses={"-left-8 bottom-10 magicBall-anime "}  delay={0.5} icon={<a href={urls.facebook} target="_blank" className="h-full w-full"><FaFacebook className="h-full w-full text-black"/></a>} />
          </div>
        </aside>



      </section>
    </div>
  )
}
export default Landing