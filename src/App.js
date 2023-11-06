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
    //참조값은 같은데 property만 달라졌으니까 같은 객체라고 생각함.
    // 그래서  re-rendering을 안 함. 객체를 그냥 쓰면 안되고 복사해서 써야함.
    // 상태를 변경하는 객체라면 let c =d 이런식으로 쓰면 안되고 자바스크립트에서 복사하려면
    // numberObject.number = numberObject.number + 1;
    // setNumberObject(numberObject);

    //복사해서 써야함
    const newNumberObject = { ...numberObject };
    newNumberObject.number = newNumberObject.number + 1;
    setNumberObject(newNumberObject);
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
