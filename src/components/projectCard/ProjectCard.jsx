import { useSelector } from "react-redux";
import { FaLink, FaGithub } from "react-icons/fa6";
import { memo, useMemo } from "react";

function ProjectCard({ data }) {
  const { currentTheme } = useSelector((s) => s.theme);

  const skillSrc = useMemo(() => {
    return `https://skillicons.dev/icons?i=${data?.skills || ""}&theme=${currentTheme?.name === "dark" ? "dark" : "light"
      }`;
  }, [data?.skills, currentTheme?.name]);

  const projectImg = data?.img;

  const buttonStyle = {
    background: currentTheme.primary,
    color: "#fff",
    border: `1px solid ${currentTheme.border}`,
  };

  return (
    <div
      className="group relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden"
      style={{
        backgroundColor: currentTheme.cardBackground,
        border: `1px solid ${currentTheme.border}`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={projectImg}
          alt={data?.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
        />

        {/* Black gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 10%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25) 70%, transparent)",
          }}
        />
      </div>

      {/* Top Buttons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
        {data?.live && (
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm backdrop-blur-md transition-transform hover:scale-105"
            style={buttonStyle}
          >
            <FaLink className="w-4 h-4" />
            Live
          </a>
        )}

        {data?.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm backdrop-blur-md transition-transform hover:scale-105"
            style={buttonStyle}
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        )}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3
          className="text-lg font-bold mb-2 line-clamp-1"
          style={{ color: currentTheme.textPrimary }}
        >
          {data?.title}
        </h3>

        <p
          className="text-sm mb-4 line-clamp-3"
          style={{ color: currentTheme.textSecondary }}
        >
          {data?.description}
        </p>

        {data?.skills && (
          <div className="flex justify-center">
            <img
              src={skillSrc}
              alt="tech stack"
              loading="lazy"
              className="h-9"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ProjectCard);