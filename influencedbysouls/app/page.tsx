import { About } from "@/components/main/About";
import { Footer } from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Products from "@/components/main/Products";
import Image from "next/image";

export default function Home() {
  return (
   <main className="h-full w-full">
   <div className="flex flex-col h-[850px] gap-20">
    <Hero/>
    <Products/>
    <About/>
    <Footer/>
   </div>
   </main>
  );
}
