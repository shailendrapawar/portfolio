import { motion } from "framer-motion"; // ← only this new import
import { useSelector } from "react-redux";
import illustrationImg from "/projectImages/about-me-illustration.jpg";
import "./aboutMe.css";
import useLazyLoad from "../../hooks/useLazyLoad";
import MagicBall from "../../components/magicBall/MagicBall";

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AboutMe() {
  const { currentTheme } = useSelector((s) => s.theme);
  const [ref, isVisible] = useLazyLoad();

  return (
    <div
      className="h-150 sm:h-90 w-full max-w-full flex justify-center relative p-5"
      ref={ref}
    >
      {isVisible && (
        <section className="aboutMe-slide w-full h-full flex flex-col max-w-250 sm:flex-row relative z-10">
          <aside
            className="w-full h-full sm:w-[50%] sm:pl-10 flex flex-col gap-5 p-5 pt-0 justify-center items-center z-10"
            style={{ color: currentTheme.textPrimary }}
          >
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:text-xl md:text-2xl"
              style={{ color: currentTheme.accent }}
            >
              ABOUT ME
            </motion.h3>

            <motion.h5
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="sm:text-xl md:text-2xl"
            >
              Coding <b style={{ color: currentTheme.secondaryAccent }}>Dreams</b> into{" "}
              <b style={{ color: currentTheme.secondaryAccent }}>Designs</b>
            </motion.h5>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-sm text-center sm:text-md md:text-lg"
              style={{ color: currentTheme.textSecondary }}
            >
              Fairly adaptive to the any kind of new learnings and conditions, to meet up the mark.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-sm text-center sm:text-md md:text-lg"
              style={{ color: currentTheme.textSecondary }}
            >
              Eager to work with my skillset and abilities where i can contribute for the growth and
              development of the organization as well as my professional career.
            </motion.p>
          </aside>

          <figure
            className="w-full h-full sm:w-[50%] sm:pr-10 flex justify-center items-center"
            style={{}}
          >
            <img
              style={{}}
              src={illustrationImg}
              className="h-60 w-80 sm:h-60 sm:w-90 sm:pr-0 rounded-lg"
            ></img>
          </figure>
        </section>
      )}
    </div>
  );
}

export default AboutMe;