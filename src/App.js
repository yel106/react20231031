import React from "react";
import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요." multiple h={"120px"}>
            {/*option[value=value$]*5>lorem1*/}
            <option value="value1">Lorem.</option>
            <option value="value2">Nostrum.</option>
            <option value="value3">Voluptatum.</option>
            <option value="value4">Dignissimos?</option>
            <option value="value5">Consequuntur.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
