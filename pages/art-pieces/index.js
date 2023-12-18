import Spotlight from "@/components/Spotlight/Spotlight";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useRouter } from "next/router";

export default function ArtPiecesPage({ artPiecesInfo, onToggleFavorite }) {
  const router = useRouter();

  return (
    <>
      <h1>Artworks</h1>
      <ArtPieces
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
