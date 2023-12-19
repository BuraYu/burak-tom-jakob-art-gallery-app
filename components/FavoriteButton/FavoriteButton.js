import Image from "next/image";
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // const {isFavorite} = favorite
  return (
    <Image
      onClick={() => onToggleFavorite()}
      src={isFavorite ? "/heart.svg" : "/heart.png"}
      alt="favourite button"
      width="50"
      height="50"
    ></Image>
  );
}
