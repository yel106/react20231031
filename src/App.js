function App() {
  // 1~100
  const number = Math.ceil(Math.random() * 100);
  const isLarge = number > 50;
  const isSmall = number <= 50;

  return (
    <>
      <h1>난수: {number}</h1>
      <div>{number > 50 ? "큰 수" : "작은 수"}</div>
      <div>{number > 50 ? <BigImage /> : <SmallImage />}</div>
      <div>{isLarge && <h1>큰 수이다</h1>}</div> {/* isLarge이면 큰수이다 */}
      <div>{isLarge || <h1>작은 수이다.</h1>} </div>{" "}
      {/* isLarge가 아니면 작은수이다 */}
    </>
  );
}

function BigImage() {
  return <h1>큰 이미지</h1>;
}

function SmallImage() {
  return <h3>작은 이미지</h3>;
}

export default App;
