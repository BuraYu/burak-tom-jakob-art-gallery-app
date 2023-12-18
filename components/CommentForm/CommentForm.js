export default function CommentForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="inputComment">hi</label>
      <input type="text" name="inputComment"></input>
      <button type="submit">submit Comment</button>
    </form>
  );
}
