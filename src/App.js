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
      <MyBox color={"pink"} bg={"black"} align={"center"} size={"20px"}>
        연습해보기
      </MyBox>
      <MyBox color={"yellow"} bg={"green"} align={"center"} size={"30px"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
        modi!
      </MyBox>
    </div>
  );
}

export default App;
