import React, { useEffect, useRef, useState } from "react";
import { EduIcon } from "./Icons";

const Education = () => {
  const borderRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (borderRef.current) {
      observer.observe(borderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
      <div className="flex items-center lg:items-start justify-center flex-col gap-[10px] w-full bg-transparent relative">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h1 className="font-bold text-black dark:text-white text-center lg:text-left text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
            EDUCATION
            <p className="font-bold text-darkGray dark:text-softGray text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
              & EXPERIENCE
            </p>
          </h1>
        </div>

        <div
          ref={borderRef}
          className="flex flex-col items-center lg:items-start pt-10 pl-2 w-full relative"
        >
          <div
            className={`absolute left-[14px] top-0 w-[3px] bg-orange z-0 ${
              animate ? "animate-growBorder" : "h-0"
            }`}
          />

          <ol className="relative z-10 ml-4">
            <li className="mb-12 ml-8 relative">
              <div className="absolute w-3 h-3 bg-orange rounded-full mt-4 -left-[46px]" />
              <div className="flex flex-row flex-wrap items-center ml-0 sm:ml-2">
                <div className="flex items-center">
                  <div className="pr-1 sm:pr-2 ml-1 sm:ml-2 mr-4">
                    <EduIcon />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium sm:font-semibold text-gray-900 my-1 text-black dark:text-white">
                    B.E. Artificial Intelligence & Data Science
                  </h3>
                </div>
                <p className="ml-auto sm:mr-4 mb-2 mt-2 text-base font-normal leading-none text-darkGray dark:text-gray">
                  Pune, IN
                </p>
                <p className="mt-2 font-normal text-justify text-base sm:text-lg text-darkGray dark:text-gray">
                  Currently pursuing a B.E. degree in Artificial Intelligence &
                  Data Science at Dr. D. Y. Patil Institute of Technology,
                  Pimpri, Pune, with an anticipated graduation in 2025. Building
                  a robust foundation in both the theoretical and practical
                  aspects of software engineering.
                </p>
                <p className="ml-auto sm:mr-4 mt-6 sm:mt-2 mb-2 leading-none text-black dark:text-white">
                  CGPA: 8.38 | 2021 - 2025
                </p>
              </div>
            </li>

            <li className="mb-12 ml-8 relative">
              <div className="absolute w-3 h-3 bg-orange rounded-full mt-4 -left-[46px]" />
              <div className="flex flex-row flex-wrap items-center ml-0 sm:ml-2">
                <div className="flex items-center">
                  <div className="pr-1 sm:pr-2 ml-1 sm:ml-2 mr-4">
                    <EduIcon />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium sm:font-semibold text-gray-900 my-1 text-black dark:text-white">
                    XII (MSBSHSE)
                  </h3>
                </div>
                <p className="ml-auto sm:mr-4 mb-2 mt-2 sm:mt-0 text-base font-normal leading-none text-darkGray dark:text-gray">
                  Pune, IN
                </p>
                <p className="mt-2 font-normal text-justify text-base sm:text-lg text-darkGray dark:text-gray">
                  Completed 12th grade in Science (PCM + IT) at Saraswati
                  Vidyalaya Union Junior College, Pune under the MSBSHSE board,
                  with a strong emphasis on problem-solving, critical thinking,
                  and quantitative analysis.
                </p>
                <p className="ml-auto sm:mr-4 mt-6 sm:mt-2 mb-2 leading-none text-black dark:text-white">
                  90.33% | 2021
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
