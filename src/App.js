function App() {
  return (
    <div>
      <MyElem name="흥민" age={44} team="토트넘" style={{ color: "orange" }} />
      <MyElem name="강인" age={33} team="파리" style={{ color: "red" }} />
    </div>
  );
}

function MyElem({ name, age, team, style }) {
  return (
    <>
      <h1 style={style}>
        {name}이는 {age}세 이고, {team} 소속이다.
      </h1>
    </>
  );
}

export default App;
