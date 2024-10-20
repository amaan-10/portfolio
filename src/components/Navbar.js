import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { HomeIcon, ProjectsIcon, ToolsIcon } from "./Icons";
import gsap from "gsap";

const Navbar = () => {
  const Logo = useRef(null);
  const LogoDelay = useRef(null);
  const LogoDelay2 = useRef(null);

  useEffect(() => {
    // Fade-in effect on window load
    gsap.fromTo(
      Logo.current, // Use the ref to target the specific div
      { opacity: 0, y: -8 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0, // Final scale
        duration: 1, // Duration of the animation
        ease: "power2.out", // Easing function for smooth effect
        delay: 0.2,
      }
    );
    // Fade-in effect on window load
    gsap.fromTo(
      LogoDelay.current, // Use the ref to target the specific div
      { opacity: 0, y: -8 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0, // Final scale
        duration: 1, // Duration of the animation
        ease: "power2.out", // Easing function for smooth effect
        delay: 0.3,
      }
    );
    // Fade-in effect on window load
    gsap.fromTo(
      LogoDelay2.current, // Use the ref to target the specific div
      { opacity: 0, y: -8 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0, // Final scale
        duration: 1, // Duration of the animation
        ease: "power2.out", // Easing function for smooth effect
        delay: 0.4,
      }
    );
  }, []);
  return (
    <>
      <header className="w-full px-32 py-8 font-medium pt-[90px] lg:pt-[130px] xl:pt-[160px]">
        <div className="flex-none h-auto left-1/2 absolute top-[30px] transform -translate-x-1/2 w-auto z-10">
          <nav className="flex items-center justify-center flex-row flex-nowrap gap-7 h-12 overflow-visible px-5 relative w-min bg-nav rounded-2xl">
            <Link
              ref={Logo}
              className="flex-none h-6 relative w-6 group"
              href="/"
            >
              <HomeIcon />
            </Link>
            <Link
              ref={LogoDelay}
              className="flex-none h-6 relative w-6 group"
              href="/projects"
            >
              <ProjectsIcon />
            </Link>
            <Link
              ref={LogoDelay2}
              className="flex-none h-6 relative w-6 group"
              href="/tools"
            >
              <ToolsIcon />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
