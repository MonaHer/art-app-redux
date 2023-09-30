import ArtworkCard from "./ArtworkCard";
import { useGetAllArtworksQuery } from "./apiSlice";
import { useState } from "react";

export default function ArtworksList() {
  const [isVisible, setIsVisible] = useState(3);
  const { data, isLoading, isError } = useGetAllArtworksQuery();

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  function showMoreArtworks() {
    setIsVisible(isVisible + 3);
  }

  function showLessArtworks() {
    setIsVisible(isVisible - 3);
  }

  return (
    <>
      <h1>Artworks</h1>
      <ul>
        {data.slice(0, isVisible).map((artwork) => (
          <ArtworkCard artwork={artwork} key={artwork.slug} />
        ))}
      </ul>
      <button onClick={showLessArtworks} disabled={isVisible <= 3}>
        Show less
      </button>
      <button onClick={showMoreArtworks} disabled={isVisible >= data.length}>
        Show more
      </button>
    </>
  );
}
