import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import BackgroundRender from "../BackgroundRender/BackgroundRender";

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
  colors,
}) {
  return (
    <div>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <BackgroundRender colors={colors}></BackgroundRender>

      <Image src={image} alt={genre} width="500" height="500" />
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
      ></FavoriteButton>
      <CommentForm slug={slug} onSubmit={onSubmitComment}></CommentForm>

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
