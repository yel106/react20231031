import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);

  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveButtonClick(index) {
    // console.log(index + "번째 아이템 지우기");
    // const nextFoods = [...foods];
    // nextFoods.splice(index, 1); //index에 있는거 1개 지움

    // const nextFoods = foods.filter((item, i) => i != index); //i랑 index랑 다른애만 살아남도록 필터함
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      {/*Button[onClick]{}*3*/}
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스커피")}>
        아이스커피
      </Button>
      <Box>
        <UnorderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
