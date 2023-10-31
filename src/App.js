function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MyComp />
        <MyComp />
        <MyComp />
      </div>
    </>
  );
}

function MyComp() {
  const name = "흥민";
  return (
    <div
      style={{
        backgroundColor: "yellow",
        color: "black",
        padding: "10px",
        width: "25%",
        textAlign: "center",
      }}
    >
      {name}
    </div>
  );
}

export default App;
