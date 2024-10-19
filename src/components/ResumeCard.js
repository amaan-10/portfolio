import Link from "next/link";
import React from "react";

const ResumeCard = () => {
  return (
    <>
      <div className="flex-none flex flex-col nowrap gap-6 h-full overflow-hidden p-[40px_20px_22px] relative w-[268px] bg-orange rounded-[10px] will-change-[transform]">
        <div className="flex-none aspect-[1/1] h-[41px] relative w-[38px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(255, 255, 255)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "100%", height: "100%" }}
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <div className="absolute left-[-58px] right-[-58px] top-[-57px] flex flex-col gap-2.5 h-[251px] justify-center items-center overflow-hidden p-0">
          <div
            className="relative h-[155px] w-[388px] flex-none"
            style={{
              flexShrink: 0,
              imageRendering: "pixelated",
              backgroundSize: "100% 100%",
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 388 155"><path d="M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626" fill="transparent" stroke-width="5" stroke="rgba(202,89,46,0.4)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>')`,
            }}
          ></div>
        </div>
        <div className="absolute left-[-54px] right-[-34px] bottom-[-1px] flex flex-row gap-2.5 h-[155px] justify-center items-center overflow-hidden p-0">
          <div
            className="relative h-[155px] w-[388px] flex-none"
            style={{
              flexShrink: 0,
              imageRendering: "pixelated",
              backgroundSize: "100% 100%",
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 388 155"><path d="M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626" fill="transparent" stroke-width="5" stroke="rgba(202,89,46,0.4)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>')`,
            }}
          ></div>
        </div>
        <div className="flex items-end content-end flex-col flex-nowrap justify-between gap-10 overflow-hidden p-0 relative w-full">
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words">
            <p className="font-poppins text-2xl leading-[110%]  text-white">
              DOWNLOAD CV
            </p>
          </div>
          <div className="flex-none h-8 w-8 relative transform rotate-90">
            <Link
              className="flex flex-row items-center justify-center gap-2 h-8 w-8 mt-1 rounded border hover:bg-white border-white border-solid cursor-pointer opacity-100 bg-transparent overflow-hidden"
              href="/amaan-resume.pdf"
              target="_blank"
              download="amaan-resume.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                style={{
                  userSelect: "none",
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                  flexShrink: 0,
                }}
                className=" p-[5px] fill-white hover:fill-orange"
              >
                <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
