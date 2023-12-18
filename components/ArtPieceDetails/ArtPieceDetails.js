import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  slug,
  comments,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <div>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>

      <Image src={image} alt={genre} width="500" height="500" />
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
      ></FavoriteButton>
      <CommentForm onSubmit={onSubmitComment}></CommentForm>

      {comments.map((comment, index) => {
        return (
          <Comments
            key={index}
            date={comment.date}
            time={comment.time}
            comment={comment.userComment}
          ></Comments>
        );
      })}
    </div>
  );
}
