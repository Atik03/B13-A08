import React from "react";
import TilesPhotoDetails from "@/component/TilesPhotoDetails";

async function CardDetails({ params }) {
  const { id } = await params;
  const res = await fetch("https://b13-a08-nine.vercel.app/data.json");
  const photos = await res.json();

  const filteredPhotos = id
    ? photos.filter((photo) => photo.id === id)
    : photos;

  console.log("Filtered Photos:", filteredPhotos);

  return (
    <div >
      {filteredPhotos.length > 0 ? (
        filteredPhotos.map((photo) => {
          return <TilesPhotoDetails key={photo.id} tile={photo} />;
        })
      ) : (
        <p className="text-center text-gray-500">Tile not found.</p>
      )}
    </div>
  );
}

export default CardDetails;
