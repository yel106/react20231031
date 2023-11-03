import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, align, size, children }) {
  return (
    <>
      <Card color={color} bg={bg} textAlign={align} fontSize={size}>
        <CardBody>{children} </CardBody>
      </Card>
    </>
  );
}
function App(props) {
  return (
    <div>
      <MyBox color={"orange"} bg={"black"} align={"center"} size={"20px"}>
        연습해보기
      </MyBox>
    </div>
  );
}

export default App;
