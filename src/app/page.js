import Image from "next/image";
import Hero from "@/component/Hero";
import Marquee from "@/component/Marquee";
import TilesFeature from "@/component/TilesFeature";

export default function Home() {
  return (
    <>
      <Marquee />
      <Hero />
      <TilesFeature />
    </>
  );
}
