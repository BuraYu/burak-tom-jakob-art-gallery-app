import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
export default function ArtPieceDetails({ image, title, artist, year, genre, isFavorite, slug, onToggleFavorite }) {

  // console.log("artPiecesInfo: ", artPiecesInfo)
  // const currentPieceSlug = data.find((piece) => piece.slug === slug).slug
  // console.log("currentPiece: ", currentPieceSlug)
  // const currentPieceIsFavorite = artPiecesInfo?.find((piece) => piece.slug === slug).isFavorite

  return (
    <div>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>

      <Image src={image} alt={genre} width="500" height="500" />
      <FavoriteButton onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}>
      </FavoriteButton>
    </div>
  );
}
