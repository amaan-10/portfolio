import React from "react";
import Info from "./Info";
import RecentProjects from "./RecentProjects";
import Tools from "./Tools";
import ContactMe from "./ContactMe";
import dynamic from "next/dynamic";

// Dynamically import the AnimatedSection component with SSR disabled
const AnimatedSection = dynamic(() => import("../components/AnimatedSection"), {
  ssr: false,
});

const DetailsSection = () => {
  return (
    <>
      <Info />
      <div className="pt-28">
        <AnimatedSection>
          <RecentProjects />
        </AnimatedSection>
      </div>
      <div className="pt-28"></div>
      <AnimatedSection>
        <Tools />
      </AnimatedSection>
      <div className="pt-28">
        <AnimatedSection>
          <ContactMe />
        </AnimatedSection>
      </div>
    </>
  );
};

export default DetailsSection;
