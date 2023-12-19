export default function CommentForm({ slug, onSubmit }) {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        marginTop: "30px",
        border: "2px solid black",
        padding: "20px",
      }}
      onSubmit={(event) => onSubmit(event, slug)}
    >
      <label htmlFor="inputComment">Comment if you love this art:</label>
      <input type="text" name="inputComment" />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
