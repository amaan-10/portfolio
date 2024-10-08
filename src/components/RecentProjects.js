import React from "react";
import Image from "next/image";
import EmployMeeImage from "../assets/employ-mee-image.png";
import QuizImage from "../assets/quiz-website-image.png";
import PortfolioImage from "../assets/portfolio-website.png";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full ">
        <div className="flex items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1
              className="font-bold text-white"
              style={{ fontSize: 94, lineHeight: "90px" }}
            >
              RECENT
              <p
                className="font-bold text-softGray relative w-full whitespace-pre-wrap break-words"
                style={{ fontSize: 94 }}
              >
                PROJECTS
              </p>
            </h1>
          </div>
          <div className="flex flex-col flex-none flex-nowrap items-start content-start gap-0 h-min justify-start p-0 relative w-full">
            <ProjectCard
              image={EmployMeeImage}
              title={"Employ-Mee"}
              description={"Job Portal App"}
            />
            <ProjectCard
              image={QuizImage}
              title={"Quiz Website"}
              description={"A Quiz Website"}
            />
            <ProjectCard
              image={PortfolioImage}
              title={"Amaan's Portfolio"}
              description={"A Portfolio Website"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
