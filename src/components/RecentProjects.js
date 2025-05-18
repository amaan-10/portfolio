import React from "react";
import Link from "next/link";
import EmployMeeImage from "../assets/employ-mee-image.png";
import SpendLessImage from "../assets/spend-less-website.png";
import CuraLinkImage from "../assets/curalink-image.png";
import QuizImage from "../assets/quiz-website-image.png";
import SARAImage from "../assets/sara-mov-website.png";
import DePayImage from "../assets/depay-image.png";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    image: SpendLessImage,
    title: "SpendLess",
    description: "A Finance Manager Website",
    link: "https://spend-less.vercel.app/",
  },
  {
    image: DePayImage,
    title: "DePayment",
    description: "A Decentralized Payment Platform",
    link: "https://depayment.vercel.app/",
  },
  {
    image: SARAImage,
    title: "SARA.mov",
    description: "Search Analysis Recommend Application for Movies",
    link: "https://sara-mov.vercel.app/",
  },
  {
    image: EmployMeeImage,
    title: "Employ-Mee",
    description: "A Job Portal Website",
    link: "https://employ-mee.vercel.app/",
  },
  {
    image: CuraLinkImage,
    title: "CuraLink",
    description: "A Healthcare Management Website",
    link: "https://curalink-appointments.vercel.app/",
  },
  {
    image: QuizImage,
    title: "Quiz Website",
    description: "A Quiz Website",
    link: "https://quiz-website-purple.vercel.app/",
  },
];

const RecentProjects = ({ showAll = false }) => {
  const displayedProjects = showAll ? projectList : projectList.slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-center gap-[60px] w-full">
      <div className="flex flex-col items-center lg:items-start w-full">
        <h1 className="font-bold text-black dark:text-white text-center lg:text-left text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
          RECENT
          <p className="font-bold text-darkGray dark:text-softGray text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
            PROJECTS
          </p>
        </h1>

        <div className="flex flex-col items-center lg:items-start gap-6 w-full">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>

        {!showAll && (
          <div className="flex flex-col items-center gap-6 w-full">
            {/* <Link
              href="/projects"
              className="mt-6 text-blue-600 dark:text-blue-400 text-lg font-semibold"
            >
              Show More →
            </Link> */}
            <div id="container">
              <Link href="/projects" className="">
                <button className="learn-more ">
                  <span className="circle !bg-transparent" aria-hidden="true">
                    <span className="icon2 arrow" />
                  </span>
                  <span className="button-text !text-blue-500">Show More</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
