import React from "react";

const ProjectsInfoCard = () => {
  return (
    <>
      <div className="flex flex-col gap-6 h-full justify-start overflow-hidden p-10 px-5 relative rounded-[10px] w-[500px] bg-green ">
        <div className="absolute top-[-60px] right-[-36px] flex flex-row items-center justify-center gap-2.5 h-[284px] overflow-hidden w-[422px]">
          <div
            className="flex-none h-[284px] relative w-[422px]"
            style={{
              flexShrink: 0,
              imageRendering: "pixelated",
              backgroundSize: "100% 100%",
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 422 284"><path d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353" fill="transparent" stroke-width="5" stroke="rgba(108,227,182,0.5)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>')`,
            }}
          ></div>
        </div>
        <div className="flex items-center content-center flex-none flex-col flex-nowrap gap-[10px] h-[146px] justify-center absolute bottom-[-52px] left-[-3px] overflow-visible p-0 w-[329px] transform rotate-[4deg]">
          <div
            className="flex-none h-[284px] relative w-[422px]"
            style={{
              flexShrink: 0,
              imageRendering: "pixelated",
              backgroundSize: "100% 100%",
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 422 284"><path d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353" fill="transparent" stroke-width="5" stroke="rgba(108,227,182,0.5)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>')`,
            }}
          ></div>
        </div>
        <div className="aspect-[1/1] flex-none h-[41px] relative w-[38px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "100%", height: "100%" }}
          >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={3} y1={9} x2={21} y2={9} />
            <line x1={9} y1={21} x2={9} y2={9} />
          </svg>
        </div>
        <div
          className="content-end items-end bg-[#fff0] flex flex-col flex-nowrap h-[1px] justify-between overflow-visible p-0 relative w-full"
          style={{
            flex: "1 0 0px",
          }}
        >
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none text-black text-2xl font-medium p-1 flex-none h-auto relative whitespace-pre-wrap w-full break-words">
            <p>REACTJS, NODE JS,</p>
            <p>MERN STACK PROJECTS</p>
          </div>
          <div className="flex-none h-8 relative w-8">
            <a className="flex flex-row flex-nowrap items-center justify-center gap-2 h-8 relative w-8 cursor-pointer overflow-hidden no-underline border border-solid border-t border-b border-l border-r border-black bg-transparent rounded-lg opacity-100">
              <div className="flex-none h-5 relative w-5 bottom-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  color="var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    fill: "var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))",
                    flexShrink: 0,
                  }}
                >
                  <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsInfoCard;
