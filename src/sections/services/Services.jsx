import"./services.css"
import whiteWizard from "../../assets/white-wizard-meditating.png"
import MagicBall from "../../components/magicBall/MagicBall"
import purpleWizard from "../../assets/purple-wizard-meditating.png"
import { FaCode } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { BsWindowSidebar } from "react-icons/bs";
import { FaServer } from "react-icons/fa";import { FaDatabase } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import { useSelector } from "react-redux";
import useLazyLoad from "../../hooks/useLazyLoad";

const Services = () => {

    const {currentTheme}=useSelector(s=>s.theme)
    const[ref,isVisible]=useLazyLoad();

    const glowClass="shadow-[0_0_20px_5px_rgba(37,99,235,0.8)] rounded-full bg-[#2563EB]"


    return (
        <div ref={ref} className="w-full  h-auto min-h-100  flex  justify-center items-center relative p-5 animate-fade-in">

            {isVisible  && (<section className=" service-slide  h-150 sm:h-100 w-full max-w-250 flex flex-col sm:flex-row-reverse sm:justify-between sm:p-5">

                <aside className="h-[40%] w-full sm:w-[40%] sm:h-full  flex flex-col justify-center items-center gap-2">

                    <h3 className="text-center text-xl md:text-2xl" 
                    style={{color:currentTheme.accent}}
                    >Services</h3>

                    <h4 className="text-center text-xl md:text-2xl mt-3" style={{color:currentTheme.textPrimary}}>What i provide as a <b style={{color:currentTheme.secondaryAccent}}>Service</b></h4>

                    <p className="text-center text-sm mt-2 md:text-lg" style={{color:currentTheme.textSecondary}}>I provide full-stack web development services using modern technologies like React.js, Node.js, Express, and MongoDB. From building responsive UIs to creating secure APIs and deploying scalable applications, I help turn ideas into real, production-ready products.</p>
                </aside>


                <figure className=" float-anime h-[60%] sm:w-[50%] sm:h-full flex justify-center items-center ">

                    <div className={` rotate h-60 w-60 sm:h-70 sm:w-70 md:h-90 md:w-90 rounded-full flex justify-center items-center relative`} 
                    style={{border:` 1px solid ${currentTheme.secondaryAccent}`}}
                    >
                        <MagicBall title={"API"} extraClasses={"-top-8 unrotate"} icon={<FaLink  className="text-black h-5 w-5" />} />
                        <MagicBall  title={"Database"} extraClasses={"-right-8 unrotate"} icon={<FaDatabase  className="text-black h-5 w-5"/>} />

                        <img className="unrotate  h-50 w-40 md:h-65 md:w-55 " src={currentTheme.name==="light"?purpleWizard:whiteWizard}></img>

                        <MagicBall  title={"Frontend"} extraClasses={"-bottom-8 unrotate"} icon={<BsWindowSidebar className="text-black h-5 w-5" />} />
                        <MagicBall title={"Server"} extraClasses={"-left-8 unrotate"} icon={<FaServer className="text-black h-5 w-5" />} />
                    </div>

                </figure>


            </section>)}

        </div>
    )
}
export default Services