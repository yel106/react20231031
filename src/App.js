function App() {
  // JSX가 JS 코드로 변환됨
  // 따라서 JS 키워드를 사용할 수 없음

  return (
    <>
      {/* class 속성은 className으로 작성 해야함 */}
      <div className="header">lorem ipsum dolor.</div>.
      <div className="error">lorem ipsum dolor.</div>.
      {/* for 속성은 htmlFor로 작성*/}
      <div>
        <label htmlFor="nameInput">이름</label>
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="ageInput"></label>
        <input type="text" id="ageInput" />
      </div>
    </>
  );
}

export default App;
