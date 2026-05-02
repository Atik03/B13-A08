"use client";

import { useState } from "react";
import TileCard from "../../component/TileCard";

export default function AllPhoto({ photos }) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filtered = photos.filter((tile) => {
    const titleWords = tile.title.toLowerCase().split(" ");
    const searchWords = query.toLowerCase().split(" ").filter(Boolean);

    if (searchWords.length === 0) return true;

    return searchWords.every((word) =>
      titleWords.some((tWord) => tWord.includes(word)),
    );
  });

  const handleSearch = () => {
    setQuery(search);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        All Tile Collections
      </h1>

      <div className="flex flex-col items-center mb-10">
        <div className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
          <input
            className="input input-bordered w-full"
            placeholder="Search tiles (marble white tile)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="btn btn-primary px-8" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.length > 0 ? (
          filtered.map((tile) => <TileCard key={tile.id} tile={tile} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-16 bg-base-200 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
              No Tiles Found
            </h3>

            <p className="text-gray-500 text-center max-w-md">
              We couldn’t find any tiles matching your search. Try different
              keywords like "marble", "wood", or "ceramic".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
