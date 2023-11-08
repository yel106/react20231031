import React, { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);
  // useEffect 사용 시 자주하는 실수
  useEffect(() => {
    console.log("코드 실행");
    // setNumber(number + 1); // trigger하는 값을 변경하면 안 됨
  }, [number]);

  return <div></div>;
}

export default App;
