import DetailsSection from "@/components/DetailsSection";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import ThemeToggle from "@/components/ThemeToggle";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${poppins.className} font-poppins bg-white dark:bg-black w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <ThemeToggle />
        <Footer />
      </main>
    </>
  );
}
