import React from "react";
import TileCard from "./TileCard";

async function TilesFeature() {
  const res = await fetch("https://b13-a08-nine.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 py-5 px-5 lg:px-0">
      <h1 className="col-span-full text-3xl md:text-4xl font-bold text-center">
        Featured Tile Collections
      </h1>
      {topPhotos.map((tile) => (
        <TileCard key={tile.id} tile={tile} />
      ))}
    </div>
  );
}

export default TilesFeature;
