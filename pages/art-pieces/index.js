import Spotlight from "@/components/Spotlight/Spotlight";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useRouter } from "next/router";

export default function ArtPiecesPage({ artPiecesInfo, onToggleFavorite }) {
  const router = useRouter();

  return (
    <>
      <ArtPieces artPiecesInfo={artPiecesInfo} onToggleFavorite={onToggleFavorite}/>
    </>
  );
}
