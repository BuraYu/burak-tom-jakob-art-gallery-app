import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist, genre }) {
  return (
    <div>
      <Image src={image} alt={genre} width="500" height="500" />
      <h2>
        {"'" + title + "'"} by {artist}
      </h2>
    </div>
  );
}
