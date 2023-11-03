import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  // let number = 0; 이렇게 하면 리렌더링 안됨
  let [number, setNumber] = useState(0); //상태 변경했지만 let으로 했을땐 버튼 눌러도 변하지 않음
  //상태를 리액트가 관리하기 떄문에 리액트가 제공하는 메소드를 이용해서 변경해야함
  function handleClick() {
    //상태를 리액트가 관리하기 떄문에 리액트가 제공하는 메소드를 이용해서 변경해야함
    // number++;
    setNumber(number + 1); //setNumber를 이용해야 변경됨. number++라고 쓰면 후위연산이라 두번 눌러야 바뀜. number+1로 써야함
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
