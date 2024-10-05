import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-white w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <ProfileCard />
            <div className="w-1/2">Home</div>
          </div>
        </Layout>
      </main>
    </>
  );
}
