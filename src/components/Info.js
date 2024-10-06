import React from "react";
import ProjectsInfoCard from "./ProjectsInfoCard";
import ResumeCard from "./ResumeCard";

const Info = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
        <div className="flex items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1
              className="font-bold "
              style={{ fontSize: 94, lineHeight: "90px" }}
            >
              SOFTWARE
              <p
                className="font-bold text-softGray relative w-full whitespace-pre-wrap break-words"
                style={{ fontSize: 94 }}
              >
                DEVELOPER
              </p>
            </h1>
          </div>
          <div className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto max-w-[480px] relative whitespace-pre-wrap w-full break-words text-lg text-gray">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </div>
        </div>
        <div className="flex items-center bg-[#fff0] flex-none flex-row flex-nowrap gap-[30px] h-[240px] justify-start overflow-hidden p-0 relative w-full ">
          <ProjectsInfoCard />
          <ResumeCard />
        </div>
      </div>
    </>
  );
};

export default Info;
