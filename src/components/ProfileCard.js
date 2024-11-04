import Image from "next/image";
import React from "react";
import profilePic from "../assets/pfp-portfolio.png";
import { EmailIcon, GithubIcon, InstagramIcon, TwitterIcon } from "./Icons";

const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 h-min overflow-hidden p-0 sticky top-[40px] w-full will-change-transform ">
        <div className="flex flex-col items-center justify-start gap-6 h-[525px] md:h-[590px] lg:h-[690px] overflow-hidden p-[30px_20px]  relative max-w-[750px] w-full lg:w-[344px] will-change-transform bg-[#EDEDED] dark:bg-white rounded-[16px] opacity-100">
          <div className="flex flex-row items-center justify-center h-[100px] left-0 md:left-[171px] lg:left-0 overflow-visible p-0 absolute top-[-37px] md:top-[-34px] lg:top-[-18px] w-[194px] z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 194 100"
            >
              <path
                d="M 0 34.544 L 3.22 33.201 C 4.186 35.732 5.256 38.221 6.429 40.663 L 3.329 42.293 C 2.113 39.757 1.002 37.172 0 34.544 Z M 7.294 49.71 L 10.246 47.806 C 11.613 50.127 13.073 52.392 14.622 54.596 L 11.828 56.748 C 10.223 54.464 8.711 52.116 7.294 49.71 Z M 16.894 63.37 L 19.509 60.989 C 21.22 63.047 23.012 65.037 24.881 66.953 L 22.454 69.543 C 20.522 67.557 18.667 65.498 16.894 63.369 Z M 28.47 75.232 L 30.69 72.449 C 32.693 74.197 34.764 75.864 36.9 77.447 L 34.895 80.41 C 32.688 78.767 30.544 77.04 28.47 75.232 Z M 41.7 85.029 L 43.471 81.912 C 45.712 83.304 48.011 84.603 50.36 85.804 L 48.836 89.061 C 46.403 87.816 44.022 86.471 41.7 85.029 Z M 56.27 92.473 L 57.53 89.093 C 59.958 90.083 62.428 90.966 64.934 91.737 L 63.955 95.216 C 61.354 94.415 58.79 93.5 56.27 92.473 Z M 71.836 97.256 L 72.519 93.701 C 73.429 93.891 74.342 94.067 75.251 94.225 C 76.906 94.514 78.569 94.754 80.238 94.947 L 79.861 98.552 C 77.167 98.245 74.489 97.813 71.836 97.256 Z M 87.974 99.1 L 88.046 95.474 C 90.656 95.532 93.266 95.474 95.871 95.301 L 96.088 98.921 C 93.387 99.099 90.68 99.159 87.974 99.101 Z M 103.652 94.44 C 106.238 94.042 108.805 93.535 111.348 92.92 L 112.127 96.454 C 109.493 97.088 106.834 97.613 104.157 98.027 L 103.652 94.439 Z M 118.899 90.762 C 121.391 89.934 123.848 89.006 126.265 87.979 L 127.572 91.337 C 125.07 92.402 122.526 93.364 119.946 94.22 Z M 133.4 84.59 C 135.738 83.362 138.023 82.036 140.251 80.618 L 142.053 83.717 C 139.745 85.184 137.379 86.556 134.959 87.829 L 133.4 84.589 Z M 146.773 76.083 C 148.89 74.477 150.937 72.782 152.91 71.002 L 155.175 73.749 C 153.128 75.594 151.004 77.351 148.808 79.016 Z M 158.611 65.4 C 160.436 63.446 162.174 61.412 163.821 59.306 L 166.505 61.601 C 164.795 63.791 162.988 65.904 161.092 67.935 Z M 168.516 52.75 C 170.003 50.493 171.409 48.184 172.731 45.826 L 175.721 47.665 C 174.354 50.096 172.904 52.479 171.372 54.81 Z M 176.507 38.612 C 177.694 36.166 178.817 33.682 179.881 31.164 L 183.049 32.633 C 181.963 35.204 180.81 37.745 179.592 40.256 Z M 182.922 23.537 C 183.887 20.966 184.809 18.379 185.688 15.777 L 188.956 16.991 C 188.056 19.634 187.126 22.262 186.148 24.862 Z M 188.238 7.924 C 189.062 5.288 189.858 2.645 190.641 -0.001 L 193.953 1.073 C 193.168 3.738 192.361 6.396 191.533 9.048 Z"
                fill="rgb(255,122,0)"
              />
            </svg>
          </div>
          <div className=" rounded-xl cursor-pointer flex-none h-[210px] md:h-[284px] overflow-visible relative w-full max-w-[240px] ">
            <div className="absolute rounded-xl top-0 right-0 bottom-0 left-0">
              <Image
                src={profilePic}
                alt="Amaan"
                className="block w-full h-full rounded-xl object-center object-cover"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between flex-[1_0_0] h-[1px] overflow-hidden p-0 relative w-full">
            <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
              <p className=" text-black font-bold text-[28px] md:text-4xl text-center">
                Amaan Shaikh
              </p>
            </div>
            <div className="flex items-center justify-center flex-none flex-col gap-2 h-min overflow-hidden p-0 relative w-full">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100 flex-none h-auto max-w-[300px] relative whitespace-pre-wrap w-full break-words">
                <p className="font-poppins text-[18px] font-medium leading-[110%] text-center text-darkGray">
                  An AI & Data Science student eager to become a Software
                  Developer, with a focus on building efficient, user-friendly
                  applications.
                </p>
              </div>
              <div className="flex items-center justify-center flex-none flex-row flex-nowrap gap-[16px] h-min overflow-hidden p-0 relative w-full">
                <GithubIcon link={"https://github.com/amaan-10"} />
                <TwitterIcon link={"https://x.com"} />
                <InstagramIcon link={"https://www.instagram.com"} />
                <EmailIcon link={"mailto:amaanshaikh.gg@gmail.com"} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-none flex-row gap-[10px] h-[166px] overflow-visible p-4 absolute left-[-175px] md:left-[-135px] top-[150px] md:top-[348px] w-[275px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 270 166"
              className="flex-none h-[166px] relative w-[270px]"
            >
              <path
                d="M 20.39 33.95 L 24.482 33.83 C 24.482 33.83 19.778 31.198 20.39 33.95 L 21.878 42.543 C 21.249 39.703 20.752 36.836 20.39 33.95 Z M 24.194 51.046 L 28.148 50.296 C 29.025 53.022 30.018 55.71 31.124 58.351 L 27.277 59.395 C 26.131 56.657 25.103 53.871 24.194 51.045 Z M 31.094 67.538 L 34.806 66.211 C 36.139 68.772 37.606 71.338 39.17 73.837 L 35.612 75.432 C 34.005 72.86 32.498 70.227 31.094 67.538 Z M 40.798 83.031 L 44.178 81.177 C 45.961 83.583 47.833 85.92 49.792 88.185 L 46.606 90.288 C 44.582 87.941 42.645 85.52 40.798 83.031 Z M 53.014 97.146 L 55.98 94.812 C 58.144 96.961 60.387 99.028 62.705 101.01 L 59.981 103.567 C 57.583 101.517 55.241 99.357 53.014 97.147 Z M 67.475 109.502 L 69.933 106.733 C 72.429 108.561 74.994 110.293 77.623 111.925 L 75.458 114.891 C 72.729 113.197 70.066 111.399 67.475 109.502 Z M 83.875 119.679 L 85.725 116.534 C 86.711 117.044 87.705 117.541 88.699 118.02 C 90.511 118.895 92.348 119.722 94.197 120.507 L 92.682 123.81 C 89.694 122.548 86.757 121.17 83.876 119.679 Z M 101.815 127.261 L 102.986 123.827 C 105.959 124.823 108.967 125.71 112.005 126.486 L 111.166 130.016 C 108.017 129.21 104.898 128.291 101.815 127.261 Z M 121.18 128.47 C 124.228 129.019 127.352 129.464 130.454 129.797 L 130.286 133.448 C 127.069 133.102 123.866 132.644 120.681 132.074 Z M 139.755 130.462 C 142.842 130.572 145.963 130.572 149.031 130.464 L 149.521 134.139 C 146.343 134.252 143.11 134.251 139.916 134.138 Z M 158.226 129.805 C 161.273 129.477 164.313 129.033 167.268 128.488 L 168.403 132.094 C 165.343 132.655 162.193 133.117 159.039 133.456 Z M 176.103 126.514 C 179.003 125.748 181.884 124.863 184.661 123.881 L 186.432 127.318 C 183.511 128.347 180.549 129.257 177.554 130.046 Z M 192.876 120.594 C 195.533 119.399 198.135 118.086 200.676 116.661 L 203.062 119.818 C 200.422 121.3 197.718 122.665 194.958 123.907 Z M 208.025 112.1 C 210.392 110.494 212.696 108.798 214.933 107.016 L 217.807 109.848 C 215.497 111.685 213.119 113.436 210.678 115.096 Z M 221.426 101.497 C 223.517 99.594 225.552 97.631 227.528 95.61 L 230.717 98.154 C 228.693 100.223 226.609 102.232 224.468 104.179 Z M 233.303 89.432 C 235.177 87.333 237.011 85.198 238.803 83.028 L 242.183 85.364 C 240.362 87.563 238.502 89.728 236.602 91.859 Z M 244.083 76.457 C 245.814 74.241 247.525 72.01 249.216 69.764 L 252.689 71.983 C 250.987 74.243 249.264 76.488 247.521 78.717 Z"
                fill="rgb(255,122,0)"
              />
              <path
                d="M 236 63 C 236 53.611 243.611 46 253 46 C 262.389 46 270 53.611 270 63 C 270 72.389 262.389 80 253 80 C 243.611 80 236 72.389 236 63 Z"
                fill="rgb(255,122,0)"
              />
              <path
                d="M 248.202 59.765 C 248.171 61.334 248.402 62.763 249.823 63.785 C 249.748 63.325 249.655 62.869 249.601 62.408 C 249.355 60.298 249.548 58.268 250.889 56.462 C 251.644 55.443 252.623 54.655 253.833 54 C 253.732 54.327 253.625 54.582 253.577 54.847 C 253.368 56.003 253.771 57.005 254.618 57.812 C 255.239 58.405 255.957 58.916 256.671 59.415 C 257.942 60.304 258.983 61.357 259.525 62.775 C 260.818 66.16 259.435 69.865 255.81 71.445 C 252.418 72.922 248.04 71.34 246.671 68.035 C 245.523 65.264 245.822 62.585 247.774 60.15 C 247.856 60.048 247.949 59.954 248.041 59.86 C 248.064 59.835 248.101 59.822 248.202 59.765 Z M 249.493 68.381 C 250.425 69.591 252.817 70.454 255.031 69.641 C 257.311 68.804 258.617 66.535 258.134 64.249 C 257.759 62.477 256.094 60.97 254.647 60.771 C 255.558 61.904 255.94 63.15 255.71 64.548 C 255.495 65.861 254.23 67.58 253.345 67.708 C 253.788 66.808 254.04 65.885 253.811 64.881 C 253.09 66.821 251.685 68.006 249.493 68.381 Z"
                fill="rgb(255,255,255)"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
