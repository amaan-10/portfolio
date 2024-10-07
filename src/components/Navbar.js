import Link from "next/link";
import React from "react";
import { HomeIcon, ProjectsIcon, ToolsIcon } from "./Icons";

const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium pt-[160px]">
        <div className="flex-none h-auto left-1/2 absolute top-[30px] transform -translate-x-1/2 w-auto z-10">
          <nav className="flex items-center justify-center flex-row flex-nowrap gap-7 h-12 overflow-visible px-5 relative w-min bg-nav rounded-2xl">
            <Link className="flex-none h-6 relative w-6 group" href="/">
              <HomeIcon />
            </Link>
            <Link className="flex-none h-6 relative w-6 group" href="/projects">
              <ProjectsIcon />
            </Link>
            <Link className="flex-none h-6 relative w-6 group" href="/tools">
              <ToolsIcon />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
