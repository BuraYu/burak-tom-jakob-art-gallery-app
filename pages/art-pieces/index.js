import Spotlight from "@/components/Spotlight/Spotlight";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ data }) {
  console.log(data);

  return (
    <>
      <h1>Hallo</h1>
      <ArtPieces pieces={data} />
    </>
  );
}
