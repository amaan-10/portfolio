import Image from "next/image";
import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <>
      <div className="flex-none h-auto relative w-full">
        <div className="bg-transparent rounded-lg opacity-100 cursor-pointer flex flex-row flex-nowrap h-auto justify-between overflow-hidden px-4 py-5 relative w-[696px]">
          <div
            className="absolute right-5 top-9 w-5 h-5 z-10"
            style={{
              transform: "rotate(-45deg)",
              transformOrigin: "50% 50% 0px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              color="var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))"
              style={{
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))",
                flexShrink: 0,
              }}
            >
              <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
            </svg>
          </div>
          <div className="flex flex-row flex-nowrap items-center justify-start gap-5 h-min overflow-hidden relative ">
            <div className="rounded-lg opacity-100 flex-none h-28 overflow-hidden relative w-28 will-change-transform">
              <div className="absolute rounded-inherit top-0 right-0 bottom-0 left-0">
                <Image
                  src={image}
                  alt={title}
                  className="block w-full h-full rounded-xl object-center object-cover"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col flex-nowrap gap-2 h-min max-w-[420px] overflow-visible relative ">
              <div className="flex flex-row flex-nowrap gap-5 h-min justify-center overflow-visible p-0 relative w-min">
                <div className="flex flex-col justify-start flex-shrink-0 opacity-100 flex-none h-auto relative whitespace-pre w-auto">
                  <h3 className="font-poppins text-2xl font-semibold leading-[120%] text-white">
                    {title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col justify-start h-auto relative whitespace-pre-wrap w-full break-words">
                <div class="font-poppins text-left text-gray leading-[140%] tracking-0 mb-[20px]">
                  <p class="font-normal text-[16px]">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;