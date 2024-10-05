import React from "react";

const DetailsSection = () => {
  return (
    <>
      <div className="text-white p-0">
        <div className="flex items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1
              className="font-bold "
              style={{ fontSize: 94, lineHeight: "90px" }}
            >
              SOFTWARE
              <span
                className="font-bold text-softGray "
                style={{ fontSize: 94 }}
              >
                DEVELOPER
              </span>
            </h1>
          </div>
          <div class="outline-none flex flex-col justify-start flex-shrink-0 flex-none h-auto max-w-[480px] relative whitespace-pre-wrap w-full break-words text-lg text-gray">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
