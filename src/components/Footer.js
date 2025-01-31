import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="pb-10 px-12 text-center dark:text-[#998f8f] text-darkGray overflow-hidden">
        <p className="text-xs ">
          <span className="font-semibold text-[#f46c38]">
            Amaan Shaikh | 2025
          </span>{" "}
          - Build with NextJS (Page Routes &amp; Server API Actions),
          JavaScript, TailwindCSS, Framer Motion, Nodemailer, Vercel Hosting.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
