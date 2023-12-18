import Image from "next/image";
export default function FavoriteButton({ favorite, onToggleFavorite }) {

    // const {isFavorite} = favorite
  return (
    <Image
    onClick={()=> onToggleFavorite()}
      src={favorite.isFavorite ? "/heart.svg" : "/favicon.ico"}
      alt="favourite button"
      width="50"
      height="50"
    ></Image>
  );
}
