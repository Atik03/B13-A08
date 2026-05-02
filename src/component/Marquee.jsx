"use client";

import React from "react";
import FastMarquee from "react-fast-marquee";

const Marquee = () => {
  return (
    <div className="w-full bg-white border-y border-gray-200 py-3 shadow-sm">
      <FastMarquee
        speed={55}
        gradient={false}
        pauseOnHover={true}
        className="text-sm md:text-base font-medium text-gray-800"
      >
        <span className="mx-8">
          New Arrivals:
          <span className="text-amber-600 font-semibold">
            Ceramic Blue Tile
          </span>
        </span>

        <span className="mx-8">
          Weekly Feature:
          <span className="text-amber-600 font-semibold">
            Modern Geometric Patterns
          </span>
        </span>

        <span className="mx-8">
          Explore Premium Marble, Porcelain & Ceramic Collections
        </span>

        <span className="mx-8">
          Join Our Community for Exclusive Tile Trends, Offers & Design Ideas
        </span>

        <span className="mx-8">
          Luxury Flooring Solutions Crafted for Style & Durability
        </span>
      </FastMarquee>
    </div>
  );
};

export default Marquee;
