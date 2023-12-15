import { preload } from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useEffect, useState } from "react";
import Spotlight from "@/components/Spotlight/Spotlight";

// const fetcher = async (url) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };

// preload("https://example-apis.vercel.app/api/art", fetcher);

export default function SpotlightPage({ data, index }) {
  // const [index, setIndex] = useState(0);

  // const { data, error, isLoading } = useSWR(
  //   "https://example-apis.vercel.app/api/art",
  //   fetcher
  // );

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setIndex(randomPiece());
  //   }
  // }, [data]);

  // function randomPiece() {
  //   return Math.floor(Math.random() * 11);
  // }

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Spotlight image={data[index].imageSource} artist={data[index].artist} />
      {/* <ArtPieces pieces={data} /> */}
    </div>
  );
}
