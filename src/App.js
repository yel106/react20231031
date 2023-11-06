import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  // 필요한 코드들 작성
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    setItems([...items, text]);

    //위에 쓴 것과 동일한 결과
    // const nextItems =[...items];
    // nextItems.splice(index, 1);
    // setItems(nextItems);
  }

  function handleRemoveButtonClick(index) {
    setItems(items.filter((item, i) => i != index));
  }

  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={handleButtonClick} colorScheme="blue">
          추가
        </Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button
                colorScheme="red"
                onClick={() => handleRemoveButtonClick(index)}
              >
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;
