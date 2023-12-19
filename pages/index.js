import { preload } from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useEffect, useState } from "react";
import Spotlight from "@/components/Spotlight/Spotlight";
import SpotlightScene from "@/components/SpotlightScene/SpotlightScene";

export default function SpotlightPage({
  index,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <div>
      <SpotlightScene image={artPiecesInfo[index].imageSource} dimensions={artPiecesInfo[index].dimensions} artist={artPiecesInfo[index].artist} colors={artPiecesInfo[index].colors} title={artPiecesInfo[index].name}/>
      {/* <h1>Spotlight</h1>
      <Spotlight
        image={data[index].imageSource}
        artist={data[index].artist}
        slug={data[index].slug}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      /> */}
    </div>
  );
}
