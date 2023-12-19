export default function BackgroundRender({ colors }) {
  return (
    <div className="bg-render-color">
      {colors.map((color, i) => (
        <p
          className="bg-render-color-form"
          key={i}
          style={{
            backgroundColor: color,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "18px",
          }}
        ></p>
      ))}
    </div>
  );
}
