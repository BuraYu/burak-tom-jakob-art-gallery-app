import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
export default function ArtPieces({ pieces, onToggleFavorite, isFavorite }) {
  return (
    <ul>
      {Array.isArray(pieces) &&
        pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <Link href={`/art-pieces/${piece.slug}`}>
                <ArtPiecePreview
                  image={piece.imageSource}
                  title={piece.name}
                  artist={piece.artist}
                  genre={piece.genre}
                />
              </Link>
              <FavoriteButton
                onToggleFavorite={() => onToggleFavorite(piece.slug)}
                favorite={isFavorite}
              ></FavoriteButton>
            </li>
          );
        })}
    </ul>
  );
}
