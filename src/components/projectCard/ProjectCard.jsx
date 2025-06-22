import { useSelector } from "react-redux"

import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./projectCard.css"
import { useState } from "react";

function ProjectCard() {
  const {currentTheme}=useSelector(s=>s.theme);
  const[isHover,setIsHover]=useState(false);

   const skillSrc=`https://skillicons.dev/icons?i=react,nodejs,express,postman&theme=light`;
   const projectImg=``;

  return (
    <div className="w-[300px]  h-80  rounded-md flex items-center justify-center relative p-2 cursor-pointer"
    style={{backgroundColor:currentTheme?.cardBackground,boxShadow:`1px 1px 5px ${currentTheme?.shadow}`}}
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    >

      <section className={` self-end flex flex-col ${isHover?"h-[48%] justify-between":"h-[40%] justify-evenly"} w-[95%] transition-all ease-in-out`}>
        <h3 className="text-center text-sm text-black"
        style={{color:currentTheme?.textPrimary}}
        >Project Title</h3>
        <p className=" scroll-bar min-h-[50%] text-[10px] text-black p-0.5 whitespace-break-spaces overflow-clip text-center overflow-y-scroll"
         style={{color:currentTheme?.textSecondary}}
        >Chat App is a real-time messaging platform built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.IO for instant communication. It supports one-on-one chats with persistent message hi</p>

        <img className=" overflow-y-scroll h-12 p-2 pt-1 pb-1 rounded-md transition-all ease-in-out mt-1.5" src={skillSrc}
        style={{backgroundColor:currentTheme?.secondaryAccent, display:isHover?"block":"none"}}
        />
      </section>



      <figure className={`project-img-body absolute ${isHover?"-top-5 shadow-md":"top-4"} h-${isHover?"[52%]":"[50%]"} w-[90%] rounded-md shadow-black transition-all ease-in-out flex flex-col gap-1 `}>

        <img src={"https://imgs.search.brave.com/oAFapUuHw2fu5IYVPsl1LNc9QCJyKoYt246TE9fuYR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/d29yay1jaGF0LWNv/bmNlcHQtaWxsdXN0/cmF0aW9uXzExNDM2/MC0xMDcxLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA"} 
        className=" bg-white h-full w-full rounded-md "
        // style={{boxShadow:`1px 1px 2px ${currentTheme.shadow}`}}
        ></img>

        <span className={`live-link absolute bottom-2 left-5 ${isHover?"block":"hidden"}  p-1.5 rounded-full hover:scale-110 active:scale-100 `}
         style={{backgroundColor:currentTheme?.secondaryAccent}}
        ><FaLink className="w-6 h-6"/></span>

        <span className={`github-link absolute bottom-2 right-5 ${isHover?"block":"hidden"}   p-1.5 rounded-full hover:scale-110 active:scale-100`}
        style={{backgroundColor:currentTheme?.secondaryAccent}}
        ><FaGithub className="w-6 h-6  "/></span>
      </figure>
    </div>
  )
}
export default ProjectCard