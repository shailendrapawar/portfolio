import { motion } from "framer-motion"; // ← only this new import
import { useSelector } from "react-redux"
import ProjectCard from "../../components/projectCard/ProjectCard"
import allProjects from "../../utils/projects";
import { useNavigate } from "react-router";
import "./projects.css"
import useLazyLoad from "../../hooks/useLazyLoad";
import { useEffect } from "react";

const Projects = () => {
  const { currentTheme } = useSelector(s => s.theme);
  const navigate = useNavigate();

  const [ref, isVisible] = useLazyLoad();

  // Simple entrance variant - same as other sections
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="w-full min-h-120 h-auto flex flex-col gap-5 justify-center items-center p-5">

      {isVisible && (
        <>
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={textReveal}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl"
            style={{ color: currentTheme.accent }}
          >
            Projects
          </motion.h3>

          <section className="projects-slide w-full h-full max-w-250 flex flex-col sm:flex-row gap-10 justify-evenly items-center pb-15 pt-5 relative">

            <ProjectCard data={allProjects[0]} />
            <ProjectCard data={allProjects[1]} />

            <motion.button
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => navigate("/projects")}
              className="h-10 w-30 hover:w-50 transition-all ease-out rounded-tl-2xl rounded-br-2xl absolute bottom-0 active:shadow-none shadow-sm shadow-black"
              style={{ backgroundColor: currentTheme.primary }}
            >
              All Projects
            </motion.button>

          </section>
        </>
      )}

    </div>
  )
}

export default Projects