import { useSelector } from "react-redux"
import ProjectCard from "../../components/projectCard/ProjectCard"
import allProjects from "../../utils/projects";
import { useNavigate } from "react-router";

const Projects = () => {
  const { currentTheme } = useSelector(s => s.theme);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-120 h-auto  flex flex-col gap-5  justify-center items-center p-5">

      <h3 className="text-xl md:text-2xl lg:text-3xl"
        style={{ color: currentTheme.accent }}
      >Projects</h3>

      <section className="w-full h-full max-w-250  flex flex-col sm:flex-row gap-10 justify-evenly items-center pb-15 pt-5 relative">

        <ProjectCard data={allProjects[0]} />
        <ProjectCard data={allProjects[1]} />
        <button
          onClick={() => navigate("/projects")}
          className="h-10 w-30 hover:w-50 transition-all ease-out rounded-tl-2xl rounded-br-2xl absolute bottom-0 active:shadow-none shadow-sm shadow-black" style={{ backgroundColor: currentTheme.primary }}>All Projects</button>

      </section>

    </div>
  )
}
export default Projects