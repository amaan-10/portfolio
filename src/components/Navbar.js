import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium">
        <div className="flex-none h-auto left-1/2 absolute top-[30px] transform -translate-x-1/2 w-auto z-10">
          <nav className="flex items-center justify-center flex-row flex-nowrap gap-[18px] h-12 overflow-visible px-5 relative w-min bg-nav rounded-2xl">
            <Link className="flex-none h-6 relative w-6" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "100%", height: "100%" }}
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>

            <Link className="flex-none h-6 relative w-6" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "100%", height: "100%" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </Link>
            <Link className="flex-none h-6 relative w-6" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "100%", height: "100%" }}
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
