import { useSelector } from "react-redux"

import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./projectCard.css"
import React, { useState } from "react";

function ProjectCard({data}) {
  const {currentTheme}=useSelector(s=>s.theme);
  const[isHover,setIsHover]=useState(false);
  // console.log(data)

   const skillSrc=`https://skillicons.dev/icons?i=${data?.skills}&theme=light`;
   const projectImg=data?.img;

  return (
    <div className=" transform-anime w-[300px]  h-80  rounded-2xl flex items-center justify-center relative p-2 cursor-pointer shadow-md  drop-shadow-md drop-shadow-black"
    style={{backgroundColor:currentTheme?.cardBackground,}}
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    >

      <section className={` self-end flex flex-col ${isHover?"h-[48%] justify-between":"h-[40%] justify-evenly"} w-[100%] transition-all ease-in-out`}>
        <h3 className="text-center text-sm text-black"
        style={{color:currentTheme?.textPrimary}}
        >{data?.title}</h3>
        <p className=" scroll-bar min-h-[50%] text-[10px] text-black p-0.5 whitespace-break-spaces overflow-clip text-center overflow-y-scroll"
         style={{color:currentTheme?.textSecondary}}
        >{data?.description}</p>

        <img className=" overflow-y-scroll h-12 p-2 pt-1 pb-1 rounded-xl transition-all shadow- shadow-black ease-in-out mt-1.5" src={skillSrc}
        style={{ display:isHover?"block":"none"}}
        />
      </section>

      <figure className={`project-img-body absolute ${isHover?"-top-5 shadow-md":"top-5"} ${isHover?"h-[55%] w-[95%] rounded-3xl":"h-[50%]"} w-[90%]  overflow-clip shadow-black transition-all ease-in-out flex flex-col gap-1 `}>
        <img src={projectImg} 
        alt="projectimg"
        className="relative  bg-white min-h-full w-full rounded-md "
        // style={{boxShadow:`1px 1px 2px ${currentTheme.shadow}`}}
        ></img>

        <a
        href={data?.live}
        target="_blank"
        className={`live-link absolute bottom-2 left-2 ${isHover?"block":"hidden"}  p-1.5 rounded-full hover:scale-110 active:scale-100 `}
         style={{backgroundColor:currentTheme?.secondaryAccent}}
        ><FaLink className="w-6 h-6"/></a>

        <a 
        target="_blank"
        href={data?.github}
        className={`github-link absolute bottom-2 right-2 ${isHover?"block":"hidden"}   p-1.5 rounded-full hover:scale-110 active:scale-100`}
        style={{backgroundColor:currentTheme?.secondaryAccent}}
        ><FaGithub className="w-6 h-6  "/></a>
      </figure>
    </div>
  )
}
export default React.memo(ProjectCard)