import "./skills.css"
import allSkills from "../../utils/allSkills"
import { useSelector } from "react-redux"
import { useState } from "react";
function Skills() {

    const { currentTheme } = useSelector(s => s.theme);
    const getRandomDelay = () => `${Math.floor(Math.random() * 5) + 1}s`;

    const [hoverIcon, setHoverIcon] = useState(null);




    return (
        <div className="h-150 w-full  flex justify-center  mt-10 sm:mt-10">

            <section className="w-full max-w-150 h-full  flex flex-col justify-center items-center ">

                <h3 className=" text-lg sm:text-xl" style={{ color: currentTheme.accent }}>My Stack</h3>

                <div className=" w-full h-full grid grid-cols-4 sm:grid-cols-5   place-items-center  p-2" style={{}}>
                    {allSkills.map((skill, i) => (
                        <div className={` skillAnime ${skill?.category} ${i % 2 == 0 ? "animate-combo-one" : "animate-combo-two"} ${hoverIcon === skill.category ? "scale-150 drop-shadow-md drop-shadow-blue-400 " : ""}   h-10 w-10 sm:h-15 sm:w-15 overflow-hidden flex items-center justify-center ease-in transition-all cursor-pointer`}
                            title={skill?.name}
                            key={i}
                            style={hoverIcon === skill?.category ? { animation: "none", } : { animationDelay: getRandomDelay() }}
                        >
                            {currentTheme?.name == "light" ? skill?.lightIcon : skill?.darkIcon}
                        </div>
                    ))}
                </div>




                <nav className="w-[95%] max-w-100 h-15 rounded-full  text-[10px] sm:text-sm flex justify-evenly items-center"
                style={{backgroundColor:currentTheme.secondaryAccent}}
                >

                    <span
                        className="cursor-pointer hover:scale-120 transition-all ease-in-out"
                        onMouseEnter={() => setHoverIcon("language")}
                        onMouseLeave={() => setHoverIcon(null)}
                    >Languages</span>

                    <span
                    className="cursor-pointer hover:scale-120 transition-all ease-in-out"
                    onMouseEnter={() => setHoverIcon("framework")}
                    onMouseLeave={() => setHoverIcon(null)}
                    >Frameworks</span>

                    <span 
                    className="cursor-pointer hover:scale-120 transition-all ease-in-out"
                    onMouseEnter={() => setHoverIcon("library")}
                    onMouseLeave={() => setHoverIcon(null)}
                    >Library</span>

                    <span
                    className="cursor-pointer hover:scale-120 transition-all ease-in-out"
                    onMouseEnter={() => setHoverIcon("tool")}
                    onMouseLeave={() => setHoverIcon(null)}
                    >Tools</span>

                    <span
                    className="cursor-pointer hover:scale-120 transition-all ease-in-out"
                    onMouseEnter={() => setHoverIcon("database")}
                    onMouseLeave={() => setHoverIcon(null)}
                    >Databases</span>

                </nav>

            </section>

        </div>
    )
}
export default Skills