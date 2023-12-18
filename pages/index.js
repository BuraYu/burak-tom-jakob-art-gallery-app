import { preload } from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useEffect, useState } from "react";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({
  data,
  index,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log("artPiecesInfo: ", artPiecesInfo);
  console.log("data: ", data);

  return (
    <div>
      <h1>Spotlight</h1>
      <Spotlight
        image={data[index].imageSource}
        artist={data[index].artist}
        slug={data[index].slug}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
