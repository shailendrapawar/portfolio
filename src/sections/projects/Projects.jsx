import { useSelector } from "react-redux"
import ProjectCard from "../../components/projectCard/ProjectCard"

const Projects = () => {
  const {currentTheme}=useSelector(s=>s.theme);

  return (
    <div className="w-full min-h-150 h-auto  flex flex-col gap-5  justify-center items-center p-5">

        <h3 className="text-xl"
        style={{color:currentTheme.accent}}
        >Projects</h3>

        <section className="w-full h-full max-w-250  flex flex-col sm:flex-row gap-10 justify-evenly items-center pb-15 pt-5 relative">

            <ProjectCard/>
             <ProjectCard/>

             <button className="h-10 w-30 hover:w-50 active:scale-95 transition-all ease-in-out rounded-tl-2xl rounded-br-2xl absolute bottom-0" style={{backgroundColor:currentTheme.primary}}>All Projects</button>
            
        </section>
    
    </div>
  )
}
export default Projects