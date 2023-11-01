function App() {
  return (
    <>
      <MyComp name="흥민" address="신촌" age={33} city="서울" />
      <MyComp address="런던" city="영국" />
      <MyComp address="신촌" age={33} city="서울" />
      <MyComp name="희찬" address="프랑스" age={66} city="파리" />
    </>
  );
}

function MyComp({
  name = "익명",
  address = "미국",
  city = "애틀랜타",
  age = 100,
}) {
  return (
    <div>
      <p>
        {name}은 {age}세 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
