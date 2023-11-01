function App() {
  return (
    <div>
      <MyBox text="곧 점심시간이다" p={50} m={10} color="black" bg="skyblue" />
    </div>
  );
}

function MyBox({ p, m, bg, color, text }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <h1>{text}</h1>
    </div>
  );
}
export default App;
