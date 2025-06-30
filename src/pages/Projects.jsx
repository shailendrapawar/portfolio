import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import allProjects from "../utils/projects";
import ProjectCard from "../components/projectCard/ProjectCard";

function Projects() {

  const allProjects=useSelector(s=>s.project);
  const {currentTheme}=useSelector(s=>s.theme);


  const [type,setType]=useState("fullstack")
  const[renderedProject,setRenderedProject]=useState([]);

  useEffect(()=>{

    console.log("rendered")
    const p=allProjects?.filter((v,i)=>v.category===type);
    setRenderedProject(p);
  },[type]);


  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center ">

      <section className="h-full w-full max-w-250 p-5 flex flex-col items-center gap-5">

        <nav
        style={{backgroundColor:currentTheme.secondaryAccent+`50`}}
        className="h-10 w-full min-w-[280px] max-w-80 bg-green-300 rounded-full flex justify-evenly items-center cursor-pointer">
          <span onClick={()=>setType("frontend")}
          style={type==="frontend"? {backgroundColor:currentTheme.secondaryAccent,color:"white"}:{}}
          name="frontend" className="w-[30%] flex justify-center items-center rounded-full">Frontend</span>


          <span onClick={()=>setType("fullstack")}
          style={type==="fullstack"? {backgroundColor:currentTheme.secondaryAccent,color:"white"}:{}}
          name="fullstack" className="w-[30%] flex justify-center items-center rounded-full">Full-stack</span>


          <span onClick={()=>setType("other")}
          style={type==="other"? {backgroundColor:currentTheme.secondaryAccent,color:"white"}:{}}
          name="other" className="w-[30%] flex justify-center items-center rounded-full">Other</span>
        </nav>

        <main className="min-h-100 w-full sm:flex-row sm: justify-evenly flex-wrap flex flex-col items-center gap-10 pt-5 pb-5 ">
          {renderedProject.length>0?renderedProject?.map((item,i)=><ProjectCard data={item} key={i}/>):(<h1 className="text-2xl"> Coming soon...😎</h1>)}
        </main>

      </section>

    </div>
  )
}
export default Projects
