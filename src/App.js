import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set... 메소드로 상태 변경할 수 있음
  // 상태가 같은지 아닌지(참조값에 의해 결정) 판단해서 re-render 결정함

  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({
    number: 0,
  }); /* 객체를 넣어봄*/

  function handleNumberObjectChange() {
    numberObject.number = numberObject.number + 1;
    setNumberObject(numberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        {/* number+1 은 이전과 다르다고 리액트가 판단해서 클릭시 숫자가 늘어남 */}
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjectChange}> number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
