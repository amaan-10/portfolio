import React from "react";

const ContactMe = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
        <div className="flex items-center lg:items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col  items-center lg:items-start justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1
              className="font-bold text-center lg:text-left"
              style={{ fontSize: 94, lineHeight: "90px" }}
            >
              LET&apos;S WORK
              <p
                className="font-bold text-softGray relative w-full whitespace-pre-wrap break-words"
                style={{ fontSize: 94 }}
              >
                TOGETHER
              </p>
            </h1>
          </div>
          <div className="flex lg:block justify-center items-center lg:items-start h-full w-full">
            <form className=" p-6 rounded-lg shadow-lg w-[696px] lg:w-full max-w-[696px]">
              {/* Flex container for Name and Email */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label
                    className="block text-gray text-sm mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-[10px] text-sm bg-softGray text-gray placeholder-gray rounded-lg border-none border-softGray focus:outline-none focus:ring-1 focus:ring-orange"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-gray text-sm mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-[10px] text-sm bg-softGray text-gray placeholder-gray rounded-lg border-none border-softGray focus:outline-none focus:ring-1 focus:ring-orange"
                    type="email"
                    id="email"
                    placeholder="Your@email.com"
                  />
                </div>
              </div>

              {/* Flex container for Message */}
              <div className="mb-6">
                <label
                  className="block text-gray text-sm mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-[10px] text-sm bg-softGray text-gray placeholder-gray rounded-lg border-none border-softGray focus:outline-none focus:ring-1 focus:ring-orange"
                  id="message"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full py-[10px] text-sm font-semibold bg-orange text-white rounded-lg hover:bg-orange transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
