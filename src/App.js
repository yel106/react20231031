function App() {
  // jsx에서 태그 사용시 꼭 종료태그를 작성해야함
  return (
    <div>
      <h1>hello react</h1>
      <h2>HI yelin</h2>
      <p>
        Lorem ipsum dolor.
        <br /> lorem ipsum dolor.
      </p>
      <MyComp />
      <MyCompo2 />
    </div>
  );
}

// built-in component는 소문자로 시작
// component명은 꼭 대문자로 시작해야함
function MyComp() {
  // return에 jsx 코드 작성 가능
  // 꼭 하나의 root tag가 존재해야 함
  return (
    <>
      {/* 주석 사용법 */}
      {/* fragment는 <></>  */}
      <h1>HI COMPONENT</h1>
      <h2>hello</h2>
    </>
  );
}

function MyCompo2() {
  let name = "손흥민";
  let age = 33;

  // {}: jsx에서 js 코드 작성하기 위한 기호
  // {}를 쓰면 자바스크립트 코드로 인식함
  return (
    <>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h1>{age} years</h1>
      <h1>{age * 2} double years</h1>
      <h1>{name + "선수"}</h1>
      {/* 그래서 주석이 이렇게 생김 */}
    </>
  );
}

export default App;
