export default function CommentForm({ slug, onSubmit }) {
  return (
    <form onSubmit={() => onSubmit(event, slug)}>
      <label htmlFor="inputComment">hi</label>
      <input type="text" name="inputComment"></input>
      <button type="submit">submit Comment</button>
    </form>
  );
}
