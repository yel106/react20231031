function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hello react" />
      <MyComp m="30px" p="10px" color="gold" bg="black" />
      <MyComp m="30px" bg="black" text="hello react" />
      <MyComp p="10px" color="black" text="hello react" />
    </div>
  );
}

function MyComp({
  m = "20px",
  p = "10px",
  color = "pink",
  bg = "yellow",
  text = "헬로우 리액트",
}) {
  return (
    <div style={{ margin: m, padding: p, color: color, backgroundColor: bg }}>
      <p3>{text}</p3>
    </div>
  );
}
export default App;
