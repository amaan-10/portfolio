import React from "react";

const Info = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
        <div className="flex items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1
              className="font-bold "
              style={{ fontSize: 94, lineHeight: "90px" }}
            >
              SOFTWARE
              <p
                className="font-bold text-softGray relative w-full whitespace-pre-wrap break-words"
                style={{ fontSize: 94 }}
              >
                DEVELOPER
              </p>
            </h1>
          </div>
          <div className="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto max-w-[480px] relative whitespace-pre-wrap w-full break-words text-lg text-gray">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </div>
        </div>
        <div className="flex items-center bg-[#fff0] flex-none flex-row flex-nowrap gap-[30px] h-[240px] justify-start overflow-hidden p-0 relative w-full ">
          <div className="flex flex-col gap-6 h-full justify-start overflow-hidden p-10 px-5 relative rounded-[10px] w-[500px] bg-green ">
            <div className="absolute top-[-60px] right-[-36px] flex flex-row items-center justify-center gap-2.5 h-[284px] overflow-hidden w-[422px]">
              <div
                className="flex-none h-[284px] relative w-[422px]"
                style={{
                  flexShrink: 0,
                  imageRendering: "pixelated",
                  backgroundSize: "100% 100%",
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 422 284"><path d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353" fill="transparent" stroke-width="5" stroke="rgba(108,227,182,0.5)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>')`,
                }}
              ></div>
            </div>
            <div className="flex items-center content-center flex-none flex-col flex-nowrap gap-[10px] h-[146px] justify-center absolute bottom-[-52px] left-[-3px] overflow-visible p-0 w-[329px] transform rotate-[4deg]">
              <div
                className="flex-none h-[284px] relative w-[422px]"
                style={{
                  flexShrink: 0,
                  imageRendering: "pixelated",
                  backgroundSize: "100% 100%",
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 422 284"><path d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353" fill="transparent" stroke-width="5" stroke="rgba(108,227,182,0.5)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>')`,
                }}
              ></div>
            </div>
            <div className="aspect-[1/1] flex-none h-[41px] relative w-[38px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "100%", height: "100%" }}
              >
                <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                <line x1={3} y1={9} x2={21} y2={9} />
                <line x1={9} y1={21} x2={9} y2={9} />
              </svg>
            </div>
            <div
              className="content-end items-end bg-[#fff0] flex flex-col flex-nowrap h-[1px] justify-between overflow-visible p-0 relative w-full"
              style={{
                flex: "1 0 0px",
              }}
            >
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none text-black text-2xl font-medium p-1 flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <p>REACTJS, NODE JS,</p>
                <p>MERN STACK PROJECTS</p>
              </div>
              <div className="flex-none h-8 relative w-8">
                <a className="flex flex-row flex-nowrap items-center justify-center gap-2 h-8 relative w-8 cursor-pointer overflow-hidden no-underline border border-solid border-t border-b border-l border-r border-black bg-transparent rounded-lg opacity-100">
                  <div className="flex-none h-5 relative w-5 bottom-[3px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      viewBox="0 0 24 24"
                      color="var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))"
                      style={{
                        userSelect: "none",
                        width: "100%",
                        height: "100%",
                        display: "inline-block",
                        fill: "var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))",
                        flexShrink: 0,
                      }}
                    >
                      <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
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
                <a className="flex flex-row items-center justify-center gap-2 h-8 w-8 mt-1 rounded border border-white border-solid cursor-pointer opacity-100 bg-transparent overflow-hidden">
                  <div className="flex-none h-5 w-5 relative bottom-[3px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      viewBox="0 0 24 24"
                      color="rgb(255, 255, 255)"
                      style={{
                        userSelect: "none",
                        width: "100%",
                        height: "100%",
                        display: "inline-block",
                        fill: "rgb(255, 255, 255)",
                        flexShrink: 0,
                      }}
                    >
                      <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
