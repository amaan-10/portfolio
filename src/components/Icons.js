import Link from "next/link";
import React from "react";

export const HomeIcon = () => {
  return (
    <div>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="stroke-current text-[#333333] dark:text-white"
          fill="none"
          stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "100%", height: "100%" }}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <span className="absolute mt-2 w-max -translate-x-1/2 bg-[#dedede] dark:bg-nav text-[#333333] dark:text-white text-sm px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 origin-center ease-in-out  top-8 left-1/2 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0 ">
        Home
      </span>
    </div>
  );
};

export const EducationIcon = () => {
  return (
    <div>
      <div className="absolute inset-0 opacity-50 "></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current text-[#333333] dark:text-white"
          stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "100%", height: "100%" }}
        >
          <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      </div>
      <span className="absolute mt-2 w-max -translate-x-1/2  bg-[#dedede] dark:bg-nav text-[#333333] dark:text-white text-sm px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 origin-center ease-in-out  top-8 left-1/2 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0 ">
        Education
      </span>
    </div>
  );
};

export const ProjectsIcon = () => {
  return (
    <div>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current text-[#333333] dark:text-white"
          stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "100%", height: "100%" }}
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <span className="absolute mt-2 w-max -translate-x-1/2 bg-[#dedede] dark:bg-nav text-[#333333] dark:text-white  text-sm px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 origin-center ease-in-out  top-8 left-1/2 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0 ">
        Projects
      </span>
    </div>
  );
};

export const ToolsIcon = () => {
  return (
    <div>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current text-[#333333] dark:text-white"
          stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "100%", height: "100%" }}
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <span className="absolute mt-2 w-max -translate-x-1/2  bg-[#dedede] dark:bg-nav text-[#333333] dark:text-white text-sm px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 origin-center ease-in-out  top-8 left-1/2 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0 ">
        Tools
      </span>
    </div>
  );
};

export const EduIcon = () => {
  return (
    <div className="flex-none h-auto w-auto relative">
      <div className="flex items-center cursor-pointer flex-row flex-nowrap gap-[10px] h-auto justify-center overflow-hidden p-[6px] relative no-underline w-auto will-change-transform">
        <svg
          stroke="var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </div>
    </div>
  );
};

export const GithubIcon = ({ link = "/" }) => {
  return (
    <div className="flex-none h-auto w-auto relative">
      <Link href={link} target="blank_">
        <div className="flex items-center cursor-pointer flex-row flex-nowrap gap-[10px] h-auto justify-center overflow-hidden p-[6px] relative no-underline w-auto will-change-transform">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pt-[10px]"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))"
              style={{ width: "150%", height: "150%" }}
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const TwitterIcon = ({ link = "/" }) => {
  return (
    <div className="flex-none h-auto w-auto relative">
      <Link href={link} target="blank_">
        <div className="flex items-center cursor-pointer flex-row flex-nowrap gap-[10px] h-auto justify-center overflow-hidden p-[6px] relative no-underline w-auto will-change-transform">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const InstagramIcon = ({ link = "/" }) => {
  return (
    <div className="flex-none h-auto w-auto relative">
      <Link href={link} target="blank_">
        <div className="flex items-center cursor-pointer flex-row flex-nowrap gap-[10px] h-auto justify-center overflow-hidden p-[6px] relative no-underline w-auto will-change-transform">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const EmailIcon = ({ link = "/" }) => {
  return (
    <div className="flex-none h-auto w-auto relative">
      <Link href={link} target="blank_">
        <div className="flex items-center cursor-pointer flex-row flex-nowrap gap-[10px] h-auto justify-center overflow-hidden p-[6px] relative no-underline w-auto will-change-transform">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--token-733bbd01-4431-42a0-b8b0-48fb9de5f3db, rgb(244, 108, 56))"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "100%", height: "100%" }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};
