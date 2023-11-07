import React, { createContext, useContext, useState } from "react";
import { Text, Button } from "@chakra-ui/react";
function Ccomp() {
  //3. context 사용하기 : useContext(Context);
  const message = useContext(Messagecontext);

  return <Text>받은 메시지: {message}</Text>;
}

function Bcomp() {
  return <Ccomp />;
}

function Acomp() {
  return <Bcomp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  //message state를 Ccomp에 전달하기
  // 1. context만들기 : createContext();로 만들기
  // 2. context에 state 넣기 . 상위 컴포넌트를 Messagecontext로 감싸줌
  //        :<Context.Provide value={state}></Context.Provider>
  // 3. tree 안에 context 사용하기
  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메시지!")}>메시지 바꾸기</Button>
      <Messagecontext.Provider value={message}>
        <Acomp />
      </Messagecontext.Provider>
    </div>
  );
}
// 1. Context 만들기
// context 이름은 대문자로 시작하고 Context로 끝남
const Messagecontext = createContext(null);

export default App;
