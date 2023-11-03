import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

function App(props) {
  function func1() {
    console.log("func1 실행");
  }

  let func2 = () => {
    console.log("arrow function 실행 111");
  };

  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow function 실행 222");
        }}
      >
        Button3
      </MyComp>
      {/* fun2라는 함수명을 넣는대신 arrow function을 바로 넣어서 사용 */}

      {/* 한 줄 일 땐 {} 생략 가능 */}
      <MyComp executeClick={() => console.log("arrow function 실행 333")}>
        Button4
      </MyComp>
    </div>
  );
}

export default App;
