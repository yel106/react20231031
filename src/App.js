import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>클릭!</Button>;
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  return <OtherChildComp message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("원래의 메시지");

  return (
    <div>
      <SomeComp onClick={() => setMessage("다른 메시지입니다!!!")} />
      <OtherComp message={message} />
    </div>
  );
}

export default App;
