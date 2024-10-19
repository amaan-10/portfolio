import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={`w-full h-full inline-block z-0 py-10 px-[34px] lg:px-[48px] xl:px-[96px] ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
