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

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setIndex(randomPiece());

      setArtPiecesInfo(
        data.map((piece) => {
          return {
            ...piece,
            isFavorite: false,
            comments: [{ date: "", time: "", userComment: "" }],
          };
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

  useEffect(() => {
    console.log("artPiecesInfo updated:", artPiecesInfo);
  }, [artPiecesInfo]); // This effect will run whenever artPiecesInfo changes

  function onSubmitComment(event, index) {
    event.preventDefault();
    const comment = event.target.elements.inputComment.value;

    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;

    setArtPiecesInfo((artPiecesInfoPrev) =>
      artPiecesInfoPrev.map((piece, i) => {
        if (i === index) {
          const updatedComments = [
            ...piece.comments,
            { date: formattedDate, time: formattedTime, userComment: comment },
          ];

          const updatedPiece = { ...piece, comments: updatedComments };

          console.log("Updated piece:", updatedPiece);

          return updatedPiece;
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        index={index}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        onSubmitComment={onSubmitComment}
      />
      <Layout />
    </>
  );
}
