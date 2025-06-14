import { useSelector } from "react-redux";
import illustrationImg from "../../assets/about-me-illustration.jpg";


function AboutMe() {

    const {currentTheme}=useSelector(s=>s.theme)
    return (
        <div className="h-150  sm:h-90  w-full max-w-full flex justify-center relative p-5"
        // style={{backgroundColor:currentTheme.background}}
        >


            <section className="w-full h-full  flex flex-col max-w-250 sm:flex-row relative">

                <aside className="w-full h-full sm:w-[50%] sm:pl-10  flex flex-col gap-5 p-5 justify-center items-center"
                style={{color:currentTheme.textPrimary}}
                >
                    <h3 className="sm:text-xl" style={{color:currentTheme.accent}}>ABOUT ME</h3>
                    <h5 className="sm:text-xl md:text-2xl">Coding <b style={{color:currentTheme.secondaryAccent}}> Dreams</b> into <b style={{color:currentTheme.secondaryAccent}} >Designs</b></h5>
                    <p className="text-sm  text-center sm:text-md md:text-lg" style={{color:currentTheme.textSecondary}}>Fairly adaptive to the any kind of new learnings and conditions, to meet up the mark.</p>
                    <p className="text-sm text-center sm:text-md  md:text-lg" style={{color:currentTheme.textSecondary}}>Eager to work with my skillset and abilities where i can contribute for the growth and development of the organization as well as my professional career.</p>
                </aside>

                <figure className="w-full h-full sm:w-[50%]  sm:pr-10 flex justify-center items-center"
                style={{}}
                >
                    <img style={{}} src={illustrationImg} className="h-60 w-80 sm:h-60 sm:w-90 sm:pr-0 rounded-lg"></img>
                </figure>

            </section>
        </div>
    )
}
export default AboutMe