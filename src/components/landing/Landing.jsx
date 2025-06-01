import { useSelector } from "react-redux"
// import {}
import "./landing.css"

import lightWizzard from "../../assets/blue-wizard.png"
import darkWizzard from "../../assets/white-wizard.png"
import MagicBall from "../magicBall/MagicBall";

function Landing() {
  const { currentTheme } = useSelector(s => s.theme);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex justify-center ">
      <section className=" min-h-[calc(100vh-80px)] w-full max-w-250 grid-background ">



        <main className="h-[45%] w-full p-3 flex flex-col justify-center items-start gap-5">
          <h3 className="text-xl" style={{ color: currentTheme.textPrimary }}>Hi, I'm <span style={{ color: currentTheme.accent }}>Shailendra Pawar</span></h3>

          <h1 className="text-3xl" style={{ color: currentTheme.secondaryAccent }}>Full Stack Developer</h1>

          <p className="w-[80%] text-sm" style={{ color: currentTheme.textSecondary }}>MERN stack wizard ,
            with a knack for real-time features,
            and seemless user experience</p>

          <div className="h-9  w-auto flex gap-2 " style={{ color: currentTheme.textPrimary }}>
            <button className="w-25 h-full cursor-pointer rounded-tl-3xl text-white" style={{ backgroundColor: currentTheme.primary }}>Resume</button>
            <button className="w-25 h-full cursor-pointer rounded-br-3xl" style={{ border: ` 2px solid ${currentTheme.primary}` }}>Let's talk?</button>
          </div>
        </main>


        <aside className="h-[55%] relative flex justify-center items-center">
          <div className="h-60 w-50 relative flex items-center justify-center">
            <MagicBall extraClasses={"-top-8 left-2 magicBall-anime "}  delay={0.7}/>
            <MagicBall extraClasses={"-top-2 -right-5 magicBall-anime  "} delay={0.1}  />
            <img src={currentTheme.name == "light" ? `${lightWizzard}` : `${darkWizzard}`}
              className=" h-60 w-50  "
            ></img>

            <MagicBall extraClasses={"-left-8 bottom-10 magicBall-anime "}  delay={0.5} />
            <MagicBall extraClasses={"-right-4 bottom-2 magicBall-anime"}  delay={0.2}/>
          </div>
        </aside>



      </section>
    </div>
  )
}
export default Landing