import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
export default function ArtPieces({
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <ul>
      {Array.isArray(artPiecesInfo) &&
        artPiecesInfo.map((piece) => {
          return (
            <li key={piece.slug}>
              <Link href={`/art-pieces/${piece.slug}`}>
                <ArtPiecePreview
                  image={piece.imageSource}
                  title={piece.name}
                  artist={piece.artist}
                  genre={piece.genre}
                  onSubmitComment={onSubmitComment}
                />
              </Link>
              <FavoriteButton
                onToggleFavorite={() => onToggleFavorite(piece.slug)}
                isFavorite={piece.isFavorite}
              ></FavoriteButton>
            </li>
          );
        })}
    </ul>
  );
}
