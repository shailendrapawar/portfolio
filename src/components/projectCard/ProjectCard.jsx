import { useSelector } from "react-redux";
import { FaLink, FaGithub } from "react-icons/fa6";
import "./projectCard.css";
import { memo } from "react";

function ProjectCard({ data }) {
  const { currentTheme } = useSelector((s) => s.theme);

  const skillSrc = `https://skillicons.dev/icons?i=${data?.skills || ""}&theme=light`;
  const projectImg = data?.img;

  return (
    <div
      className={`
        group relative
        w-full max-w-[340px]
        aspect-[3/4]                 /* ← fixed 3:4 ratio everywhere */
        rounded-2xl overflow-hidden
        transition-all duration-400 ease-out
        shadow-lg hover:shadow-2xl hover:-translate-y-2
        bg-gradient-to-br from-black/30 to-black/10
        backdrop-blur-sm border border-white/10 hover:border-white/30
      `}
      style={{
        backgroundColor: currentTheme?.cardBackground || "#0f172a",
      }}
    >
      {/* Image + overlay */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 overflow-hidden">
        <img
          src={projectImg}
          alt={data?.title || "Project screenshot"}
          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
          loading="lazy"
        />
        {/* Strong overlay for white text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/75 to-transparent/55" />
      </div>

      {/* Top action buttons - appear on hover */}
      <div className="absolute top-4 left-4 right-4 flex justify-between opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-20">
        {data?.live && (
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-4 py-2
              bg-white/15 backdrop-blur-md border border-white/20
              rounded-full text-white hover:bg-white/25
              transition-all duration-300 hover:scale-105 active:scale-95
            `}
          >
            <FaLink className="w-4 h-4" />
            <span className="text-sm font-medium">Live</span>
          </a>
        )}

        {data?.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-4 py-2
              bg-white/15 backdrop-blur-md border border-white/20
              rounded-full text-white hover:bg-white/25
              transition-all duration-300 hover:scale-105 active:scale-95
            `}
          >
            <FaGithub className="w-4 h-4" />
            <span className="text-sm font-medium">Code</span>
          </a>
        )}
      </div>

      {/* Bottom content area - white text always */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pt-12">
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2 line-clamp-1 text-white">
            {data?.title}
          </h3>

          <p className="text-xs leading-relaxed line-clamp-4 mb-3 text-white">
            {data?.description}
          </p>

          {data?.skills && (
            <div className="flex justify-center mt-1">
              <img
                src={skillSrc}
                alt="tech stack"
                className="h-8 sm:h-9 transition-all duration-400 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);