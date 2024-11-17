import React from "react";
import Image from "next/image";
import EmployMeeImage from "../assets/employ-mee-image.png";
import SpendLessImage from "../assets/spend-less-website.png";
import QuizImage from "../assets/quiz-website-image.png";
import PortfolioImage from "../assets/portfolio-website.png";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full ">
        <div className="flex items-center lg:items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col  items-center lg:items-start justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1 className="font-bold text-black dark:text-white text-center lg:text-left text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
              RECENT
              <p className="font-bold text-darkGray dark:text-softGray text-[52px] md:text-[94px] leading-[46px] md:leading-[90px] relative w-full whitespace-pre-wrap break-words">
                PROJECTS
              </p>
            </h1>
          </div>
          <div className="flex flex-col flex-none flex-nowrap items-center lg:items-start content-start gap-0 h-min justify-start p-0 relative w-full">
            <ProjectCard
              image={EmployMeeImage}
              title={"Employ-Mee"}
              description={"A Job Portal Website"}
              link={"https://employ-mee.vercel.app/"}
            />
            <ProjectCard
              image={SpendLessImage}
              title={"SpendLess"}
              description={"A Finance Manager Website"}
              link={"https://spend-less.vercel.app/"}
            />
            <ProjectCard
              image={QuizImage}
              title={"Quiz Website"}
              description={"A Quiz Website"}
              link={"https://quiz-website-purple.vercel.app/"}
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
