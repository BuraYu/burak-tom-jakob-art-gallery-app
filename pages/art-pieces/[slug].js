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
  const {
    imageSource,
    name,
    year,
    artist,
    genre,
    isFavorite,
    slug,
    comments,
    colors,
  } = currentPiece;
  console.log(colors);
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
        colors={colors}
      />

      <Link href={`/art-pieces/`}>
        <button
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            border: "none",
            fontSize: "25px",
          }}
        >
          Back
        </button>
      </Link>
    </>
  );
}
