import ContactMe from "@/components/ContactMe";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import RecentProjects from "@/components/RecentProjects";
import Head from "next/head";
import React from "react";

const projects = () => {
  const mainContentRef = useRef(null);
  const mainContentRefDelay = useRef(null);

  useEffect(() => {
    // Fade-in effect on window load
    gsap.fromTo(
      mainContentRef.current, // Use the ref to target the specific div
      { opacity: 0, y: -30 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0, // Final scale
        duration: 1, // Duration of the animation
        ease: "power2.out", // Easing function for smooth effect
      }
    );
    // Fade-in effect on window load
    gsap.fromTo(
      mainContentRefDelay.current, // Use the ref to target the specific div
      { opacity: 0, y: -30 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0, // Final scale
        duration: 1, // Duration of the animation
        ease: "power2.out", // Easing function for smooth effect
        delay: 0.3,
      }
    );
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device width, initial-scale=1" />
        <title>Amaan | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex gap-[50px] w-full">
            <ProfileCard />
            <div className="flex flex-col items-center justify-center bg-[#fff0] flex-[1_0_0px] gap-0 h-min overflow-visible relative w-[1px]">
              <RecentProjects />
              <div className="pt-28">
                <ContactMe />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
