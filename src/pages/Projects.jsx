import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import allProjects from "../utils/projects";
import ProjectCard from "../components/projectCard/ProjectCard";

function Projects() {

  const allProjects = useSelector(s => s.project);
  const { currentTheme } = useSelector(s => s.theme);


  const [type, setType] = useState("fullstack")
  const [renderedProject, setRenderedProject] = useState([]);

  useEffect(() => {

    console.log("rendered")
    const p = allProjects?.filter((v, i) => v.category === type);
    setRenderedProject(p);
  }, [type]);


  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center ">

      <section className="h-full w-full max-w-250 p-5 flex flex-col items-center gap-5">

        <nav
          style={{ backgroundColor: currentTheme.primary + `50` }}
          className="h-10 w-full min-w-[280px] max-w-80 bg-green-300 rounded-full shadow-black shadow-sm flex justify-between items-center cursor-pointer mt-5 p-1">
          <span onClick={() => setType("frontend")}
            style={type === "frontend" ? { backgroundColor: currentTheme.primary, color: "white" } : {}}
            name="frontend" className=" h-8 w-[30%] flex justify-center items-center rounded-full transition-all ease-in-out duration-300">Frontend</span>


          <span onClick={() => setType("fullstack")}
            style={type === "fullstack" ? { backgroundColor: currentTheme.primary, color: "white" } : {}}
            name="fullstack" className=" h-8 w-[30%] flex justify-center items-center rounded-full transition-all ease-in-out duration-300">Full-stack</span>


          <span onClick={() => setType("other")}
            style={type === "other" ? { backgroundColor: currentTheme.primary, color: "white" } : {}}
            name="other" className="h-8 w-[30%] flex justify-center items-center rounded-full transition-all ease-in-out duration-300">Other</span>
        </nav>

        <main className="min-h-100 w-full sm:flex-row sm: justify-evenly flex-wrap flex flex-col items-center gap-10 pt-5 pb-5 transition-all ease-in-out duration-300 ">
          {renderedProject.length > 0 ? renderedProject?.map((item, i) => <ProjectCard data={item} key={i} />) : (<h1 className="text-2xl  transition-all ease-in-out duration-300"> Coming soon...😎</h1>)}
        </main>

      </section>

    </div>
  )
}
export default Projects
