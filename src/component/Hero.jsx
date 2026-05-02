import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">TilesBrand</h1>
          <p className="leading-relaxed mb-5">
            {" "}
            Discover premium quality tiles crafted for modern homes and
            commercial spaces. From elegant ceramic designs to durable flooring
            solutions, we bring style, strength, and sophistication to every
            surface.{" "}
          </p>
          <Link href={"/tiles"} className="btn btn-primary">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
