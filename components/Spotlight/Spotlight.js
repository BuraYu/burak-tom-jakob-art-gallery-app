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
  const currentPieceSlug = data.find((piece) => piece.slug === slug).slug;

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
