import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  //브라우저는 이벤트 핸들러 메소드에
  // event 객체를 매개값으로 넣어줌

  function handleClick(event) {
    // console.log(event); /* 버튼 누르면 객체의 내용이 출력됨*/
    console.log(event.target); /* 실제 이벤트가 일어난 element의 모습이 나옴.*/
    // console.log(event.target.className); /*실제 버튼의 클래스 네임이 나옴*/
    // console.log(event.target.type);
  }

  return (
    <div>
      <Button colorScheme="orange" onClick={handleClick}>
        button1
      </Button>
      <Button colorScheme="facebook" onClick={handleClick}>
        button2
      </Button>
    </div>
  );
}

export default App;
