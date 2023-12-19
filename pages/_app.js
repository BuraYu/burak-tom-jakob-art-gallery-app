import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./style.css";

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
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState("keyGallery", {
    defaultValue: [],
  });

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    const localArtPiecesInfo = JSON.parse(localStorage.getItem("keyGallery"));
    console.log("jakob", localArtPiecesInfo);
    if (localArtPiecesInfo && localArtPiecesInfo.length > 0) {
      setArtPiecesInfo(localArtPiecesInfo);
      setIndex(randomPiece());
    } else if (data && data.length > 0) {
      setIndex(randomPiece());

      setArtPiecesInfo(
        data.map((piece) => ({
          ...piece,
          isFavorite: false,
          comments: [],
        }))
      );
    }
  }, [artPiecesInfo]);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("keyGallery", JSON.stringify(artPiecesInfo));
  // }, [artPiecesInfo]);

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

  function onSubmitComment(event, slug) {
    event.preventDefault();

    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    const comment = event.target.inputComment.value;

    setArtPiecesInfo((artPiecesInfoPrev) =>
      artPiecesInfoPrev.map((piece) => {
        if (piece.slug === slug) {
          return {
            ...piece,
            comments: [
              ...piece.comments,
              {
                id: uid(),
                date: formattedDate,
                time: formattedTime,
                userComment: comment,
              },
            ],
          };
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
