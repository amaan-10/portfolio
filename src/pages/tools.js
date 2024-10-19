import ContactMe from "@/components/ContactMe";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import Tools from "@/components/Tools";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
const AnimatedSection = dynamic(() => import("../components/AnimatedSection"), {
  ssr: false,
});

const Tools = () => {
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
        <title>Amaan | Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex gap-[50px] w-full">
            <div ref={mainContentRef}>
              <ProfileCard />
            </div>

            <div
              ref={mainContentRefDelay}
              className="flex flex-col items-center justify-center bg-[#fff0] flex-[1_0_0px] gap-0 h-min overflow-visible relative w-[1px]"
            >
              <AnimatedSection>
                <Tools />
              </AnimatedSection>
              <div className="pt-28">
                <AnimatedSection>
                  <ContactMe />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Tools;
