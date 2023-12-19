import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Details({
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();
  // const { slug } = router.query;
  const slugRouter = router.query.slug;

  const currentPiece = artPiecesInfo?.find(
    (piece) => piece.slug === slugRouter
  );
  if (!currentPiece) {
    return <div>Loading...</div>; // or any other loading state representation
  }
  console.log("currenzPiece", currentPiece);
  const { imageSource, name, year, artist, genre, isFavorite, slug, comments } =
    currentPiece;

  return (
    <>
      <h1>Details</h1>
      <ArtPieceDetails
        slug={slug}
        image={imageSource}
        title={name}
        artist={artist}
        genre={genre}
        year={year}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        comments={comments}
        onSubmitComment={onSubmitComment}
      />

      <Link href={`/art-pieces/`}>
        <button>Back</button>
      </Link>
    </>
  );
}
