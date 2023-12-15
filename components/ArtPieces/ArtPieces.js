import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <ul>
      {Array.isArray(pieces) &&
        pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                genre={piece.genre}
              />
            </li>
          );
        })}
    </ul>
  );
}
