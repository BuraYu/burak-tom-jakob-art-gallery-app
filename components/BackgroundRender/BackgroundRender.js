export default function BackgroundRender({ colors }) {
  //#a6b33f#356e0b#eeeee4#bec99e#635523

  return (
    <div>
      {colors.map((color, i) => (
        <p key={i} style={{ backgroundColor: `${color}` }}>
          {color}
        </p>
      ))}
    </div>
  );
}
