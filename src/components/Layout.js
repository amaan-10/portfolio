import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <div className={`w-full h-full inline-block z-0 p-[118px] ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Layout;
