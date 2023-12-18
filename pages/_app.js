import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [index, setIndex] = useState(0);
  const [artPiecesInfo, setArtPiecesInfo] = useState();

  console.log("after setter: ", artPiecesInfo);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setIndex(randomPiece());
      // console.log(data)

      setArtPiecesInfo(
        data.map((piece) => {
          return { ...piece, isFavorite: false };
        })
      );
    }
  }, [data]);

  function onToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfoPrev) =>
      artPiecesInfoPrev.map((piece) => {
        if (piece.slug === slug) {
          return { ...piece, isFavorite: !piece.isFavorite };
        }
        return piece;
      })
    );
  }
  function randomPiece() {
    return Math.floor(Math.random() * 11);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("artPiecesInfo on App page: ", artPiecesInfo)


  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        index={index}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
