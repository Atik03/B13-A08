import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ tile }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <figure className="relative h-64 w-full">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <span className="badge badge-outline">{tile.category}</span>
          <span className="text-sm text-gray-500">{tile.brand}</span>
        </div>

        <h2 className="card-title text-xl font-bold">{tile.title}</h2>

        <p className="text-gray-600 text-sm">{tile.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-primary">${tile.price}</span>

          <span
            className={`badge ${
              tile.inStock ? "badge-success" : "badge-error"
            }`}
          >
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link href={`/tiles/${tile.id}`} className="w-full">
            <button className="btn btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
