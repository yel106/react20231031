import { Box, Button } from "@chakra-ui/react";
import * as PropTypes from "prop-types";

function MyLink({ to, children }) {
  return (
    <>
      <a href={to}> {children} </a>
      {/* 버튼으로 만든느 방법 */}
      <Button as="a" href={to} colorScheme="blue">
        {children}
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to="https://www.naver.com">naver 로</MyLink>
      <MyLink to="https://www.daum.net">daum으로</MyLink>
      {/*
    <a href="https://www.naver.com">naver로 </a>
    <a href="https://www.daum.net">daum으로 </a>
    */}
    </>
  );
}

export default App;
