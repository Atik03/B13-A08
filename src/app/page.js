import Image from "next/image";
import AllPhoto from "./tiles/page";
import Hero from "@/component/Hero";
import Marquee from "@/component/Marquee";

export default function Home() {
  return (
    <>
      <Marquee />
      <Hero />
    </>
  );
}
