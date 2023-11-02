import React from "react";
import { Box, Image } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <Image src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize={"200px"} src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize={"100px"} src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image
          borderRadius={"full"}
          boxSize={"200px"}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box>
        <Image src="adf.jpg" fallbackSrc="https://via.placeholder.com/150" />
        {/* 이미지가 없을때 fallback이미지가 뜨도록 함 */}
      </Box>
    </div>
  );
}

export default App;
