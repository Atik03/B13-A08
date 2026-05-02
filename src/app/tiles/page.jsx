import AllPhoto from "./AllPhoto";

async function TilesPage() {
  const res = await fetch("https://b13-a08-nine.vercel.app/data.json");

  const photos = await res.json();

  return <AllPhoto photos={photos} />;
}

export default TilesPage;
