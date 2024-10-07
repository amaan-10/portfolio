import Image from "next/image";
import React from "react";
import Nextjs from "../assets/nextjs-logo.png";
import ToolCard from "./ToolCard";

const Tools = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full pt-28">
        <div className="flex items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1
              className="font-bold "
              style={{ fontSize: 94, lineHeight: "90px" }}
            >
              PREMIUM
              <p
                className="font-bold text-softGray relative w-full whitespace-pre-wrap break-words"
                style={{ fontSize: 94 }}
              >
                TOOLS
              </p>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-[10px] auto-rows-min justify-start w-full relative p-0">
            <ToolCard
              image={Nextjs}
              title={"Nextjs"}
              description={"React framework"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
