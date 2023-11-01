function App() {
  return (
    <div>
      <MyText
        value="연습하는 중"
        style={{ color: "orange", backgroundColor: "yellow" }}
      />
      <MyText
        value="연습하는 중"
        style={{ color: "pink", backgroundColor: "black" }}
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <h1>{props.value}</h1>
    </div>
  );
}
export default App;
