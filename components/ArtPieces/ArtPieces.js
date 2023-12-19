import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieces({
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <div className="art-pieces-div">
      <ul className="art-pieces-ul">
        {Array.isArray(artPiecesInfo) &&
          artPiecesInfo.map((piece) => {
            return (
              <li key={piece.slug} className="art-pieces-list">
                <div className="art-piece-container">
                  <FavoriteButton
                    onToggleFavorite={() => onToggleFavorite(piece.slug)}
                    isFavorite={piece.isFavorite}
                    className="favicon"
                  />
                  <Link
                    href={`/art-pieces/${piece.slug}`}
                    className="art-pieces-link"
                  >
                    <ArtPiecePreview
                      image={piece.imageSource}
                      title={piece.name}
                      artist={piece.artist}
                      genre={piece.genre}
                      onSubmitComment={onSubmitComment}
                    />
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
