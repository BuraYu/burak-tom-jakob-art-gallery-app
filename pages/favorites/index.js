import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useRouter } from "next/router";

export default function ArtPiecesPage({ artPiecesInfo, onToggleFavorite }) {
  //   const router = useRouter();
  const favoritePieces = artPiecesInfo.filter(
    (piece) => piece.isFavorite === true
  );
  return (
    <>
      <h1>Favourites</h1>
      <ArtPieces
        artPiecesInfo={favoritePieces}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
