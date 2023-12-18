import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Details({ artPiecesInfo, onToggleFavorite }) {
  const router = useRouter();
  // const { slug } = router.query;
  const slugRouter = router.query.slug

  const currentPiece = artPiecesInfo?.find((piece) => piece.slug === slugRouter);
  console.log(currentPiece)
  const { imageSource, name, year, artist, genre, isFavorite, slug } = currentPiece;

  return (
    <>
      <ArtPieceDetails
        slug={slug}
        image={imageSource}
        title={name}
        artist={artist}
        genre={genre}
        year={year}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />

      <Link href={`/art-pieces/`}>
        <button>Back</button>
      </Link>
    </>
  );
}
