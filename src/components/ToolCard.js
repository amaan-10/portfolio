import Image from "next/image";
import Link from "next/link";
import React from "react";

const ToolCard = ({ image, title, description, link }) => {
  return (
    <>
      <div className="self-start flex-none h-auto justify-self-start relative w-full ">
        <Link
          href={link}
          target="blank_"
          className="bg-transparent hover:bg-nav rounded-lg opacity-100 will-change-auto flex items-center cursor-pointer flex-row flex-nowrap gap-4 h-min justify-start overflow-hidden p-4 relative w-[300px]"
        >
          <div className="rounded-lg opacity-100 flex-none h-10 overflow-hidden relative w-10 will-change-auto">
            <div className="absolute inset-0 rounded-inherit">
              <Image
                className="block w-full h-full rounded-inherit object-center object-cover"
                src={image}
                alt={title}
              />
            </div>
          </div>
          <div className="bg-transparent opacity-100 flex flex-col flex-nowrap gap-1.5 min-h-min justify-center items-start overflow-visible p-0 relative">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100 flex-none h-auto relative whitespace-pre-wrap w-full break-words">
              <div className="font-poppins text-[18px] font-semibold leading-[120%] tracking-normal text-left text-white">
                {title}
              </div>
            </div>
            <div className="flex flex-col justify-start shrink-0 transform-none opacity-100 flex-none h-auto relative whitespace-pre-wrap w-full break-words">
              <div className="font-poppins text-xs leading-tight text-left text-gray font-normal custom-class">
                {description}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ToolCard;
