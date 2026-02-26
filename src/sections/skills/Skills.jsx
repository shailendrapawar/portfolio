import { motion } from "framer-motion"; // ← only this new import
import "./skills.css";
import allSkills from "../../utils/allSkills";
import { useSelector } from "react-redux";
import { useState } from "react";
import useLazyLoad from "../../hooks/useLazyLoad";

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const { currentTheme } = useSelector((s) => s.theme);
  const getRandomDelay = () => `${Math.floor(Math.random() * 5) + 1}s`;

  const [hoverIcon, setHoverIcon] = useState(null);

  const [ref, isVisible] = useLazyLoad();

  return (
    <div ref={ref} className="h-150 w-full flex justify-center p-5">
      {isVisible && (
        <section className="skills-slide w-full max-w-150 h-full flex flex-col justify-center items-center">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={textReveal}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl"
            style={{ color: currentTheme.accent }}
          >
            My Stack
          </motion.h3>

          <div
            className="w-full h-full grid grid-cols-4 sm:grid-cols-5 place-items-center p-2"
            style={{}}
          >
            {allSkills.map((skill, i) => (
              <div
                className={`skillAnime ${skill?.category} ${
                  i % 2 == 0 ? "animate-combo-one" : "animate-combo-two"
                } ${
                  hoverIcon === skill.category ? "scale-150 grayscale-0" : "grayscale-75"
                } h-10 w-10 sm:h-15 sm:w-15 overflow-hidden flex items-center justify-center ease-in transition-all cursor-pointer`}
                title={skill?.name}
                key={i}
                style={
                  hoverIcon === skill?.category
                    ? { animation: "none" }
                    : { animationDelay: getRandomDelay() }
                }
              >
                {currentTheme?.name == "light" ? skill?.lightIcon : skill?.darkIcon}
              </div>
            ))}
          </div>

          {/* <motion.nav
            initial="hidden"
            animate="visible"
            variants={textReveal}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-[100%] max-w-100 h-12 sm:h-15 rounded-full text-[10px] sm:text-sm flex justify-evenly items-center shadow-sm shadow-black"
            style={{ backgroundColor: currentTheme.secondaryAccent }}
          >
            <span
              className="cursor-pointer hover:scale-120 transition-all ease-in-out"
              onMouseEnter={() => setHoverIcon("language")}
              onMouseLeave={() => setHoverIcon(null)}
            >
              Languages
            </span>

            <span
              className="cursor-pointer hover:scale-120 transition-all ease-in-out"
              onMouseEnter={() => setHoverIcon("framework")}
              onMouseLeave={() => setHoverIcon(null)}
            >
              Frameworks
            </span>

            <span
              className="cursor-pointer hover:scale-120 transition-all ease-in-out"
              onMouseEnter={() => setHoverIcon("library")}
              onMouseLeave={() => setHoverIcon(null)}
            >
              Library
            </span>

            <span
              className="cursor-pointer hover:scale-120 transition-all ease-in-out"
              onMouseEnter={() => setHoverIcon("tool")}
              onMouseLeave={() => setHoverIcon(null)}
            >
              Tools
            </span>

            <span
              className="cursor-pointer hover:scale-120 transition-all ease-in-out"
              onMouseEnter={() => setHoverIcon("database")}
              onMouseLeave={() => setHoverIcon(null)}
            >
              Databases
            </span>
          </motion.nav> */}
          <motion.nav
  initial="hidden"
  animate="visible"
  variants={textReveal}
  transition={{ duration: 0.7, delay: 0.6 }}
  className="w-full max-w-[340px] sm:max-w-[480px] mx-auto h-10 sm:h-12 rounded-full flex items-center justify-between px-2 sm:px-4 backdrop-blur-xl border border-[#00ff9d]/15 shadow-xl shadow-black/30 overflow-hidden"
  style={{
    background: "rgba(10, 15, 20, 0.45)", // deep dark semi-transparent for glass effect
    boxShadow: "0 10px 40px rgba(0, 255, 157, 0.08)", // very subtle neon shadow
  }}
>
  {[
    { label: "Languages", category: "language" },
    { label: "Frameworks", category: "framework" },
    { label: "Library", category: "library" },
    { label: "Tools", category: "tool" },
    { label: "Databases", category: "database" },
  ].map((item) => {
    const isActive = hoverIcon === item.category;

    return (
      <motion.span
        key={item.category}
        className="relative px-2 sm:px-4 py-2 text-[11px] sm:text-xs font-medium cursor-pointer select-none transition-colors duration-300 flex-1 text-center"
        style={{
          color: isActive ? "#00ff9d" : "#d1d5db", // neon green when active, soft gray otherwise
          textShadow: isActive ? "0 0 10px rgba(0, 255, 157, 0.7)" : "none",
        }}
        onMouseEnter={() => setHoverIcon(item.category)}
        onMouseLeave={() => setHoverIcon(null)}
        whileHover={{ scale: 1.07, y: -1.5 }}
        whileTap={{ scale: 0.97 }}
      >
        {item.label}

        {/* Neon gradient underline – grows from center */}
        <motion.span
          className="absolute bottom-[6px] left-1/2 h-[2px] bg-gradient-to-r from-[#00d4ff] via-[#00ff9d] to-[#00d4ff] rounded-full origin-center"
          initial={{ width: 0, x: "-50%", opacity: 0 }}
          animate={{
            width: isActive ? "70%" : 0,
            x: "-50%",
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </motion.span>
    );
  })}
</motion.nav>
          
        </section>
      )}
    </div>
  );
}

export default Skills;