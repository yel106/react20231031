import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  // 3. context 사용하기 : useContext(Context)
  const { setMessage } = useContext(MessageContext);

  return (
    <Button onClick={() => setMessage("변경된 메세지")}>
      메시지 변경하기!!
    </Button>
  );
}

function BComp() {
  //3. context 사용하기: useContext(Context)
  // const value = useContext(MessageContext);

  const { message } = useContext(MessageContext);

  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기 상태 메시지");

  const value = { message: message, setMessage: setMessage };

  return (
    <div>
      {/* 2. context에 value 넣기: context.Provider value={state}> 컴포넌트넣기</Context.Provider> */}
      <MessageContext.Provider
        value={{
          message,
          setMessage,
        }}
      >
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기: createContext(null)
const MessageContext = createContext(null);
export default App;
