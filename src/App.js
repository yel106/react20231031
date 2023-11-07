import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>텍스트 바꾸기</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");

  function handleButtonClick() {
    setMessage("안녕하세요");
  }

  return (
    <div>
      <MyComp1 onClick={handleButtonClick}></MyComp1>{" "}
      {/*관습상 on~ 라고 이름 지음*/}
      {/*여기엔 setMessage를 전달해야함 */}
      {/* MyComp1에 있는 버튼이 클릭되면 */}
      <MyComp2 message={message}></MyComp2>
      {/* MyComp2에 있는 text가 바뀌게 */}
    </div>
  );
}

export default App;
