import { About } from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Products from "@/components/main/Products";
import Image from "next/image";

export default function Home() {
  return (
   <main className="h-full w-full">
   <div className="flex flex-col gap-20">
    <Hero/>
    <Products/>
    <About/>
   </div>
   </main>
  );
}
