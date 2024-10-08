import React from "react";
import Info from "./Info";
import RecentProjects from "./RecentProjects";
import Tools from "./Tools";
import ContactMe from "./ContactMe";

const DetailsSection = () => {
  return (
    <>
      <Info />
      <div className="pt-28">
        <RecentProjects />
      </div>
      <div className="pt-28"></div>
      <Tools />
      <div className="pt-28">
        <ContactMe />
      </div>
    </>
  );
};

export default DetailsSection;
