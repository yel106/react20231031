import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

let out = 0;
function MyComp() {
  //변수나 state는 웬만하면 컴포넌트 안에서 만들어서 쓰면됨
  const [num, setNum] = useState(0);
  let a = 3;
  a++;

  out++;
  console.log("a", a);
  console.log("num", num);
  console.log("out", out); //컴포넌트 밖에 있는 변수의 값을 변경하려는건 좋은 방법이 아님

  return (
    <div>
      <Button onClick={() => setNum(num + 1)}>증가</Button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
