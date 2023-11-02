import { Box, Center, Circle } from "@chakra-ui/react";
import { MoonIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"gray.300"} h={"300px"}>
        <Box bg={"white"} w={"100px"} h={"100px"}>
          lorem.
        </Box>
      </Center>

      <Center bg={"pink.200"} h={"200px"}>
        <Circle bg={"yellow.200"} w={"100px"} h={"100px"}>
          <MoonIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
