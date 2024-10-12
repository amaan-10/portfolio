import DetailsSection from "@/components/DetailsSection";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device width, initial-scale=1" />
        <title>Amaan's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex gap-[50px] w-full">
            <ProfileCard />
            <div className="flex flex-col items-center justify-center bg-[#fff0] flex-[1_0_0px] gap-0 h-min overflow-visible relative w-[1px]">
              <DetailsSection />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
