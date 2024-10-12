import ContactMe from "@/components/ContactMe";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import Tools from "@/components/Tools";
import Head from "next/head";
import React from "react";

const tools = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device width, initial-scale=1" />
        <title>Amaan | Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex gap-[50px] w-full">
            <ProfileCard />
            <div className="flex flex-col items-center justify-center bg-[#fff0] flex-[1_0_0px] gap-0 h-min overflow-visible relative w-[1px]">
              <Tools />
              <div className="pt-28">
                <ContactMe />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default tools;
