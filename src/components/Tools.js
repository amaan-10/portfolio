import Image from "next/image";
import React from "react";
import Nextjs from "../assets/nextjs-logo.png";
import Reactjs from "../assets/react-logo.png";
import Nodejs from "../assets/nodejs-logo.png";
import Expressjs from "../assets/express-logo.png";
import MongoDB from "../assets/mongodb-logo.png";
import ChatGPT from "../assets/chatgpt-logo.png";
import ToolCard from "./ToolCard";

const Tools = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
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
              image={Reactjs}
              title={"Reactjs"}
              description={"The library for web and UI"}
              link={"https://react.dev/"}
            />
            <ToolCard
              image={Nextjs}
              title={"Nextjs"}
              description={"React framework"}
              link={"https://nextjs.org/"}
            />
            <ToolCard
              image={Nodejs}
              title={"Nodejs"}
              description={"Used for server-side scripting"}
              link={"https://nodejs.org/en"}
            />
            <ToolCard
              image={Expressjs}
              title={"Expressjs"}
              description={"Node.js web application framework"}
              link={"https://expressjs.com/"}
            />
            <ToolCard
              image={MongoDB}
              title={"MongoDB"}
              description={"A NoSQL document database"}
              link={"https://www.mongodb.com/"}
            />
            <ToolCard
              image={ChatGPT}
              title={"MongoDB"}
              description={"A NoSQL document database"}
              link={"https://www.mongodb.com/"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
