import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 상태(state)가 변경(이전 state와 달라짐) 되면
  // component를 다시 그림 (re render)

  const [message, setMessage] = useState(""); //배열을 리턴. 배열에 넣으면 구조분해 할당으로 state만 써도 됨
  // parameter에 0을 넣으면 초기값이 0이 됨. ""을 넣으면 뭘 쓰냐에 따라 값이 달라짐
  // index 0: 현재상태(state)
  // index 1: state를 변경할 수 있는 메소드. (변경하고 안하고는 리액트가 관리함)

  let text = "초기 메시지";
  function handleInputChange(e) {
    text = e.target.value;
    console.log("text", text);
  }

  function handleButtonClick(e) {
    setMessage("바뀐 상태");
  }
  return (
    <div>
      <Input onChange={handleInputChange} />
      <p>{text}</p>
      <Button onClick={handleButtonClick}>상태 바꾸기</Button>
      <Button onClick={() => setMessage("")}> 빈 문자열로 바꾸기</Button>
      <p>{message}</p>
    </div>
  );
}

export default App;
