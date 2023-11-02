import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"70px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        {/* 1정도의 간격이 생김*/}
        {/*Box*5>lorem1*/}
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Error!</Box>
        <Box bg={"pink"}>Ut.</Box>
        <Box bg={"teal"}>Dicta.</Box>
        <Box bg={"yellow"}>Vel?</Box>
      </Flex>
    </>
  );
}
export default App;
