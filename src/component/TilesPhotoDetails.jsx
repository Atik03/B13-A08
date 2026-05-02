"use client";

import Image from "next/image";
import React from "react";

const TilesPhotoDetails = ({ tile }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br py-10 px-4 ">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden lg:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-[350px] md:h-[500px] lg:h-full bg-gray-100">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <span className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm uppercase tracking-wide">
              {tile.category}
            </span>
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-center">
            <p className="text-amber-600 font-semibold text-lg mb-2">
              {tile.brand}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tile.title}
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              {tile.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-4xl font-extrabold text-primary">
                ${tile.price}
              </span>

              <span
                className={`badge ${
                  tile.inStock ? "badge-success" : "badge-error"
                }`}
              >
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Dimensions</p>
                <h3 className="font-bold text-gray-800">{tile.dimensions}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Material</p>
                <h3 className="font-bold text-gray-800">{tile.material}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Finish</p>
                <h3 className="font-bold text-gray-800">{tile.finish}</h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">
                <p className="text-sm text-gray-500">Usage</p>
                <h3 className="font-bold text-gray-800">{tile.usage}</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary flex-1 rounded-full">
                Buy Now
              </button>

              <button className="btn btn-outline flex-1 rounded-full">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesPhotoDetails;
