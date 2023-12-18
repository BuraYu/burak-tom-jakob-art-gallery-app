import Spotlight from "@/components/Spotlight/Spotlight";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useRouter } from "next/router";

export default function ArtPiecesPage({ data, handleClick }) {
  const router = useRouter();

  // console.log(data);

  return (
    <>
      <ArtPieces pieces={data} handleClick={handleClick}/>
    </>
  );
}
