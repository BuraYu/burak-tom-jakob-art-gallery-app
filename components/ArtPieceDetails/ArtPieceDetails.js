import Image from "next/image";
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>

      <Image src={image} alt={genre} width="500" height="500" />
    </div>
  );
}
