function App() {
  const myStyle = {
    color: "orange",
    backgroundColor: "gold", // background-color라고 쓰면 안되고 loswerCamelCase법으로 써야함
    fontSize: "70px",
    textAlign: "center",
  }; //js object 자바스크립에서 객체만드는법

  return (
    <>
      {/* style 속성은 객체로 주어야 함*/}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "30px" }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
