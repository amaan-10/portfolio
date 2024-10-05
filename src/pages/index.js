import DetailsSection from "@/components/DetailsSection";
import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex gap-[50px] w-full">
            <ProfileCard />
            <div className="w-1/2">
              <DetailsSection />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
