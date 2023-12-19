export default function Comments({ date, time, comment }) {
  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px solid black", // Added border style and color
        padding: "20px", // Added padding for better appearance
        width: "60%",
        heigh: "100px",
      }}
    >
      <h5>
        {date} {time}
      </h5>
      <p>{comment}</p>
    </div>
  );
}
