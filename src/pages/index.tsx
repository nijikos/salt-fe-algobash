import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Specialty from "@/components/Specialty";
import TopBar from "@/components/TopBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} scroll-smooth`}>
      <Hero />
      <TopBar />
      <About />
      <CoreValues />
      <Specialty />
      <Footer />
    </main>
  );
}
