import React from "react";
import { Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <FormLabel>본문</FormLabel>
          <Textarea
            placeholder="본문을 작성하세요"
            h={"700px"}
            width={"1000px"}
          ></Textarea>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
