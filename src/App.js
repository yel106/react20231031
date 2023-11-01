function App() {
  return (
    <>
      <MyComp value="흥민" address="신촌" />
      <MyComp value="강인" address="강남" />
    </>
  );
}

// {value: "흥민", address: "신촌"}
function MyComp({ value, address }) {
  // let {value, address} = props;
  //구조 분해 할당은 자바스크립트의 argument에 적용
  //  props 쓰는 것보다 구조 분해 할당을 더 자주 씀
  return (
    <div>
      <h1>
        {value}이는 {address}에 산다.
      </h1>
    </div>
  );
}

export default App;
