import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} alt={artist} width="500" height="500" />
      <h2>{artist}</h2>
    </div>
  );
}
