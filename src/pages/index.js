import DetailsSection from "@/components/DetailsSection";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import gsap from "gsap";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
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
        <title>Amaan&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center  text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex flex-col lg:flex-row gap-[50px] w-full">
            <div
              className=" w-full lg:w-max self-center lg:self-auto"
              ref={mainContentRef}
            >
              <ProfileCard />
            </div>
            <div
              ref={mainContentRefDelay}
              className="flex flex-col items-center justify-center bg-[#fff0] flex-[1_0_0px] gap-0 h-min overflow-visible relative w-full lg:w-[1px] "
            >
              <DetailsSection />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
