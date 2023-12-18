import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Details({ artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  const { imageSource, name, year, artist, genre } = currentPiece;

  return (
    <>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        genre={genre}
        year={year}
      />

      <Link href={`/art-pieces/`}>
        <button>Back</button>
      </Link>
    </>
  );
}
