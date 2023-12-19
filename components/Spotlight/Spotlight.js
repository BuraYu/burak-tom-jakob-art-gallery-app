import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  slug,
  image,
  artist,
  onToggleFavorite,
  data,
  artPiecesInfo,
}) {
  console.log("artPiecesInfo: ", artPiecesInfo);
  const currentPieceSlug = data.find((piece) => piece.slug === slug).slug;
  console.log("currentPiece: ", currentPieceSlug);

  const currentPieceIsFavorite = artPiecesInfo?.find(
    (piece) => piece.slug === slug
  ).isFavorite;

  return (
    <div>
      <Image src={image} alt={artist} width="500" height="500" />
      <h2>{artist}</h2>
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(currentPieceSlug)}
        isFavorite={currentPieceIsFavorite}
      ></FavoriteButton>
    </div>
  );
}
