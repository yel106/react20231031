import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");

  console.log(text);

  function handleButtonClick() {
    // text 라는 state 값 변경
    // text = "message"; // 이렇게 써도 안바뀜. 리액트가 상태를 변경할지 말지 결정하기 때문에 setText를 이용해서 변경해야함
    setText("greeting");
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>상태 변경!</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
