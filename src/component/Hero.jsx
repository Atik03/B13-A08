"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

function Hero() {
  const slides = [
    {
      image: "/images/hero.png",
      title: "TilesBrand",
      desc: "Discover premium quality tiles crafted for modern homes and commercial spaces.",
    },
    {
      image: "/images/hero2.jpg",
      title: "Modern Elegance",
      desc: "Stylish ceramic and luxury flooring solutions for sophisticated interiors.",
    },
    {
      image: "/images/hero3.jpg",
      title: "Built To Last",
      desc: "Durable, beautiful, and reliable tiles for every residential and business need.",
    },
  ];

  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero md:min-h-screen h-[400px]"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>

                <p className="leading-relaxed mb-5">{slide.desc}</p>

                <Link href={"/tiles"} className="btn btn-primary">
                  Browse Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
