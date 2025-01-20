import React from "react";
import ProjectsInfoCard from "./ProjectsInfoCard";
import ResumeCard from "./ResumeCard";

const Info = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
        <div className="flex items-center lg:items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col  items-center lg:items-start justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1 className="font-bold text-center lg:text-left  text-black dark:text-white text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
              MY
              <p className="font-bold text-darkGray dark:text-softGray text-[52px] md:text-[94px] leading-[46px] md:leading-[90px] relative w-full whitespace-pre-wrap break-words">
                BIOGRAPHY
              </p>
            </h1>
          </div>
          <div className="outline-none text-center lg:text-left justify-start flex-shrink-0 flex-none h-auto max-w-[480px] relative whitespace-pre-wrap w-full break-words text-base md:text-lg text-[#474747] dark:text-gray">
            An AI & Data Science student eager to become a
            <span className="inline-block text-orange  font-semibold">
              Software Developer
            </span>
            , with a focus on building efficient, user-friendly applications.
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </div>
        </div>
        <div className="flex items-center bg-[#fff0] flex-none flex-col md:flex-row  flex-nowrap gap-[30px] lg:gap-[20px] justify-start md:justify-center lg:justify-start overflow-hidden lg:pl-7 relative w-full ">
          <ProjectsInfoCard />
          <ResumeCard />
        </div>
      </div>
    </>
  );
};

export default Info;
