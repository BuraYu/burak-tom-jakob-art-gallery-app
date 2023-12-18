import { preload } from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useEffect, useState } from "react";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ data, index }) {

  return (
    <div>
      <Spotlight image={data[index].imageSource} artist={data[index].artist} />
    </div>
  );
}
