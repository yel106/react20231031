import { Box, Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭됨");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }

  return (
    <>
      <Center onClick={handleOuterBoxClick} h={"200px"} bg={"blue"}>
        <Center
          onClick={handleInnerBoxClick}
          w={"200px"}
          h={"100px"}
          bg={"purple"}
        >
          <Button onClick={handleButtonClick} colorScheme="blue">
            button
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
