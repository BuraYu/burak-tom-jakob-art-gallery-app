export default function Comments({ date, time, comment }) {
  return (
    <>
      <h5>
        {date} {time}
      </h5>
      <p>{comment}</p>
    </>
  );
}
