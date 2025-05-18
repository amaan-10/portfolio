import Image from "next/image";
import React from "react";
import HTML from "../assets/html-logo.png";
import CSS from "../assets/css-logo.png";
import JavaScript from "../assets/javascript-logo.png";
import TypeScript from "../assets/typescript-logo.png";
import BootStrap from "../assets/bootstrap-logo.png";
import TailWind from "../assets/tailwind-logo.png";
import Nextjs from "../assets/nextjs-logo.png";
import Reactjs from "../assets/react-logo.png";
import Nodejs from "../assets/nodejs-logo.png";
import Expressjs from "../assets/express-logo.png";
import MySQL from "../assets/mysql-logo.png";
import MongoDB from "../assets/mongodb-logo.png";
import CPP from "../assets/cpp-logo.png";
import Python from "../assets/python-logo.png";
import Java from "../assets/java-logo.png";
import ChatGPT from "../assets/chatgpt-logo.png";
import ToolCard from "./ToolCard";

const Tools = () => {
  const toolsList = [
    {
      image: HTML,
      title: "HTML",
      description:
        "A standard markup language used to structure content on the Web.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      image: CSS,
      title: "CSS",
      description:
        "A stylesheet language used to style and enhance website presentation.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      image: JavaScript,
      title: "JavaScript",
      description: "A programming language and core technology of the Web.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      image: TypeScript,
      title: "TypeScript",
      description: "TS extends JS by adding types to the language.",
      link: "https://www.typescriptlang.org",
    },
    {
      image: BootStrap,
      title: "BootStrap",
      description: "Mobile-first front-end CSS framework",
      link: "https://getbootstrap.com",
    },
    {
      image: TailWind,
      title: "Tailwind",
      description: "A utility-first CSS framework.",
      link: "https://tailwindcss.com/",
    },
    {
      image: Reactjs,
      title: "ReactJS",
      description: "The library for web and UI",
      link: "https://react.dev/",
    },
    {
      image: Nextjs,
      title: "NextJS",
      description: "React framework",
      link: "https://nextjs.org/",
    },
    {
      image: Nodejs,
      title: "NodeJS",
      description: "Used for server-side scripting",
      link: "https://nodejs.org/en",
    },
    {
      image: Expressjs,
      title: "ExpressJS",
      description: "Node.js web application framework",
      link: "https://expressjs.com/",
    },
    {
      image: MySQL,
      title: "MySQL",
      description: "An open-source relational database management system",
      link: "https://www.mysql.com/",
    },
    {
      image: MongoDB,
      title: "MongoDB",
      description: "A NoSQL document database",
      link: "https://www.mongodb.com/",
    },
    {
      image: CPP,
      title: "C++",
      description: "An object-oriented programming language",
      link: "https://isocpp.org/",
    },
    {
      image: Python,
      title: "Python",
      description: "A general-purpose programming language",
      link: "https://www.python.org/",
    },
    // {
    //   image: Java,
    //   title: "Java",
    //   description: "A class-based, object-oriented programming language",
    //   link: "https://www.java.com/en",
    // },
    // {
    //   image: ChatGPT,
    //   title: "ChatGPT",
    //   description: "AI Assistant",
    //   link: "https://chatgpt.com/",
    // },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
        <div className="flex items-center lg:items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col  items-center lg:items-start justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1 className="font-bold text-black dark:text-white text-center lg:text-left text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
              TECHNICAL
              <p className="font-bold text-darkGray dark:text-softGray text-[52px] md:text-[94px] leading-[46px] md:leading-[90px] relative w-full whitespace-pre-wrap break-words">
                SKILLS
              </p>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-[10px] auto-rows-min justify-start w-full relative p-0">
            {toolsList.map((tool, index) => (
              <ToolCard
                key={index}
                image={tool.image}
                title={tool.title}
                description={tool.description}
                link={tool.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
