import React from "react";

const ContactMe = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(formData);

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[60px] h-min overflow-hidden relative w-full">
        <div className="flex items-center lg:items-start justify-center flex-none flex-col flex-nowrap gap-[10px] h-min overflow-hidden p-0 relative w-full bg-[#fff0]">
          <div className="outline-none flex flex-col  items-center lg:items-start justify-start flex-shrink-0 transform-none h-auto relative w-full whitespace-pre-wrap break-words">
            <h1 className="font-bold text-black dark:text-white text-center lg:text-left text-[52px] md:text-[94px] leading-[46px] md:leading-[90px]">
              LET&apos;S
              <p className="font-bold text-darkGray dark:text-softGray text-[52px] md:text-[94px] leading-[46px] md:leading-[90px] relative w-full whitespace-pre-wrap break-words">
                CONNECT
              </p>
            </h1>
          </div>
          <div className="flex lg:block justify-center items-center lg:items-start h-full w-full">
            <form
              onSubmit={handleSubmit}
              className=" p-6 rounded-lg shadow-lg w-[696px] lg:w-full max-w-[696px]"
            >
              {/* Flex container for Name and Email */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label
                    className="block text-[#707070] dark:text-gray text-sm mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-[10px] text-sm bg-softGray text-[#707070] dark:text-gray placeholder-[#707070] dark:placeholder-gray rounded-lg border-none border-softGray focus:outline-none focus:ring-1 focus:ring-orange"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-[#707070] dark:text-gray text-sm mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-[10px] text-sm bg-softGray text-[#707070] dark:text-gray placeholder-[#707070] dark:placeholder-gray rounded-lg border-none border-softGray focus:outline-none focus:ring-1 focus:ring-orange"
                    type="email"
                    id="email"
                    placeholder="Your@email.com"
                  />
                </div>
              </div>

              {/* Flex container for Message */}
              <div className="mb-6">
                <label
                  className="block text-[#707070] dark:text-gray text-sm mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-[10px] text-sm bg-softGray text-[#707070] dark:text-gray placeholder-[#707070] dark:placeholder-gray rounded-lg border-none border-softGray focus:outline-none focus:ring-1 focus:ring-orange"
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
              <div>
                <p className=" font-medium mt-5 text-center text-black dark:text-white">
                  OR
                  <p className="mt-2 ">
                    Mail me directly at{" "}
                    <a
                      href="mailto:amaanshaikh.gg@gmail.com"
                      className="underline"
                    >
                      amaanshaikh.gg@gmail.com
                    </a>
                  </p>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
